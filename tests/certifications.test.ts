import assert from "node:assert/strict"
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

test("32 supplied public credentials and one independently reported exam", () => {
  assert.equal(PUBLIC_CERTIFICATIONS.length, 56)
  assert.equal(
    PUBLIC_CERTIFICATIONS.filter(
      (item) => item.issuer !== "Platzi" && item.source?.startsWith("LinkedIn")
    ).length,
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
})

test("23 public Platzi courses keep the original dates and no invented links", () => {
  const courses = PUBLIC_CERTIFICATIONS.filter(
    (item) => item.issuer === "Platzi"
  )
  assert.equal(courses.length, 23)
  assert.equal(
    PUBLIC_CERTIFICATIONS.filter((item) => item.issuer !== "Platzi").length,
    33
  )
  assert.ok(
    courses.every(
      (item) => item.isPublic && !item.featured && item.credentialUrl === null
    )
  )
  assert.deepEqual(
    courses.flatMap((item) => item.issueDate ?? []),
    ["2022-01", "2022-01", "2021-03"]
  )
  assert.ok(
    courses.every((item) => certificationsMarkdown.includes(item.title))
  )
})
