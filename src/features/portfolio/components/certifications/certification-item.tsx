import { ArrowUpRightIcon, AwardIcon } from "lucide-react"
import Image from "next/image"

import { getIcon } from "@/components/icons"

import { certificationStatus } from "../../lib/certification-status"
import { formatMonth } from "../../lib/format-month"
import type { Certification } from "../../types/certifications"

export function CertificationItem({
  certification,
}: {
  certification: Certification
}) {
  const {
    title,
    issuerLogoURL,
    issuerIconName,
    credentialURL,
    examCode,
    topics,
    issueDate,
  } = certification
  const status = certificationStatus(certification)
  return (
    <div className="flex items-center">
      <div
        aria-hidden
        className="mx-4 grid size-6 shrink-0 place-items-center rounded-sm bg-muted text-muted-foreground [&_svg]:size-5"
      >
        {issuerLogoURL ? (
          <Image
            src={issuerLogoURL}
            alt=""
            width={22}
            height={22}
            className="dark:invert"
            unoptimized
          />
        ) : (
          (getIcon(issuerIconName) ?? <AwardIcon />)
        )}
      </div>
      <div className="min-w-0 flex-1 space-y-1 border-l border-dashed border-edge p-3">
        <h4 className="font-medium text-balance">
          {examCode && `${examCode} — `}
          {title}
        </h4>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
        {topics?.length && (
          <details className="text-sm text-muted-foreground">
            <summary className="w-fit cursor-pointer">Exam topics</summary>
            <p className="mt-1">{topics.join(" · ")}</p>
          </details>
        )}
        {issueDate && (
          <time
            className="block text-sm text-muted-foreground"
            dateTime={issueDate}
          >
            {formatMonth(issueDate)}
          </time>
        )}
        {credentialURL && (
          <a
            className="inline-flex items-center gap-1 text-sm underline"
            href={credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${title}`}
          >
            Verify credential <ArrowUpRightIcon className="size-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}
