import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"

import {
  getCertificationCards,
  PUBLIC_CERTIFICATIONS,
} from "../src/features/portfolio/data/certifications"
import {
  certification,
  getPublicCertifications,
  withExpiration,
} from "../src/features/portfolio/lib/certification-catalog"
import { certificationsMarkdown } from "../src/features/portfolio/lib/profile-markdown"
import type { Certification } from "../src/features/portfolio/types/certifications"

test("32 supplied public credentials and one independently reported exam", () => {
  assert.equal(PUBLIC_CERTIFICATIONS.length, 33)
  assert.equal(
    PUBLIC_CERTIFICATIONS.filter((item) => item.source?.startsWith("LinkedIn"))
      .length,
    32
  )
  assert.equal(
    PUBLIC_CERTIFICATIONS.filter((item) => item.issuer === "Postman").length,
    1
  )
  assert.deepEqual(
    PUBLIC_CERTIFICATIONS.filter((item) => item.featured)
      .map((item) => item.examCode)
      .sort(),
    ["AI-103", "OTCA", "SC-500"]
  )
  const exam = PUBLIC_CERTIFICATIONS.find((item) => item.examCode === "AB-100")
  assert.equal(exam?.examStatus, "passed")
  assert.equal(exam?.credentialStatus, "pending_verification")
  assert.equal(exam?.credentialUrl, null)
  assert.equal(
    PUBLIC_CERTIFICATIONS.find((item) => item.id === "cambridge-b1")
      ?.credentialId,
    null
  )
  assert.ok(
    getCertificationCards().every(
      (card) => !("credentialId" in card) && !("source" in card)
    )
  )
})

test("expiration is conservative at month precision and PSE entries are expired", () => {
  assert.equal(
    PUBLIC_CERTIFICATIONS.filter((item) => item.status === "expired").length,
    2
  )
  const exam = PUBLIC_CERTIFICATIONS.find((item) => item.examCode === "AI-103")!
  assert.equal(withExpiration(exam, "2027-07-31").status, "listed")
  assert.equal(withExpiration(exam, "2027-08-01").status, "expired")
})

test("private records are excluded and duplicate identities are rejected", () => {
  const entry = certification({
    id: "private-test",
    title: "Private test record",
    issuer: "Example",
    category: "training",
    isPublic: false,
  })
  assert.deepEqual(getPublicCertifications([entry]), [])
  assert.throws(
    () =>
      getPublicCertifications([
        entry,
        { ...entry, id: "duplicate", title: ` ${entry.title.toUpperCase()} ` },
      ]),
    /Duplicate/
  )
  assert.doesNotMatch(certificationsMarkdown, /Platzi/i)
})

const localFile = ".local/certifications-platzi.json"
test(
  "complete private inventory stays out of the public catalog and export",
  { skip: !existsSync(localFile) },
  () => {
    const privateRecords = JSON.parse(
      readFileSync(localFile, "utf8")
    ) as Certification[]
    assert.equal(privateRecords.length, 23)
    assert.ok(
      privateRecords.every(
        (record) => record.issuer === "Platzi" && record.isPublic === false
      )
    )
    assert.equal(PUBLIC_CERTIFICATIONS.length + privateRecords.length, 56)
    assert.equal(
      getPublicCertifications([...PUBLIC_CERTIFICATIONS, ...privateRecords])
        .length,
      33
    )
    assert.ok(
      privateRecords.every(
        (record) => !certificationsMarkdown.includes(record.title)
      )
    )
  }
)
