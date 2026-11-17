import { ArrowUpRightIcon, AwardIcon, InfoIcon } from "lucide-react"
import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

import { certificationStatus } from "../../lib/certification-status"
import { formatMonth } from "../../lib/format-month"
import type { CertificationCard } from "../../types/certifications"

export function CertificationItem({
  certification,
}: {
  certification: CertificationCard
}) {
  const {
    title,
    issuer,
    logo,
    credentialUrl,
    officialUrl,
    associatedCredential,
    examCode,
    topics,
    issueDate,
    expirationDate,
    featured,
    category,
  } = certification
  const status = certificationStatus(certification)
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 rounded-lg border border-edge p-4 transition-colors hover:border-muted-foreground/50 motion-safe:transition-[border-color,translate] motion-safe:hover:-translate-y-0.5",
        featured
          ? "border-t-2 border-t-foreground/60 bg-muted/30"
          : "bg-background"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            aria-hidden
            className="grid size-9 shrink-0 place-items-center rounded-md border border-edge bg-background text-muted-foreground"
          >
            {logo === "microsoft" ? (
              <Icons.microsoft className="size-5" />
            ) : logo ? (
              <Image
                src={logo}
                alt=""
                width={22}
                height={22}
                className={
                  logo.endsWith("/matlab.svg") ? undefined : "dark:invert"
                }
                unoptimized
              />
            ) : (
              <AwardIcon className="size-5" />
            )}
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {issuer}
          </span>
        </div>
        {examCode ? (
          <span className="shrink-0 rounded-sm border border-edge bg-background px-1.5 py-1 font-mono text-xs">
            {examCode}
          </span>
        ) : (
          <Tooltip>
            <TooltipTrigger
              render={
                <span
                  tabIndex={0}
                  aria-label={`${title}: credential details`}
                  className="rounded-sm p-1 text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <InfoIcon className="size-4" aria-hidden />
                </span>
              }
            />
            <TooltipContent className="max-w-52">
              {issuer} · {category}. {status}.
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <div className="grow space-y-1.5">
        <p className="font-mono text-[0.68rem] tracking-wide text-muted-foreground uppercase">
          {featured
            ? "Professional · Associate"
            : category === "training"
              ? "Training / course completion"
              : category === "badge"
                ? "Badge / achievement"
                : category === "type pending"
                  ? "Credential type pending"
                  : category}
        </p>
        <h4 className="leading-snug font-semibold text-balance">{title}</h4>
        {associatedCredential && (
          <p className="text-xs leading-relaxed text-muted-foreground">
            Associated credential: {associatedCredential}
          </p>
        )}
        {(featured || certification.status !== "listed") && (
          <p
            className={cn(
              "text-xs leading-relaxed text-muted-foreground",
              certification.status === "expired" && "font-semibold"
            )}
          >
            {status}
          </p>
        )}
        {issueDate && (
          <p className="text-xs text-muted-foreground">
            Issued <time dateTime={issueDate}>{formatMonth(issueDate)}</time>
          </p>
        )}
        {expirationDate && (
          <p className="text-xs text-muted-foreground">
            {certification.status === "expired" ? "Expired" : "Expires"}{" "}
            <time dateTime={expirationDate}>{formatMonth(expirationDate)}</time>
          </p>
        )}
      </div>
      {(topics?.length || officialUrl || credentialUrl) && (
        <div className="space-y-2 border-t border-dashed border-edge pt-2 text-xs">
          {topics?.length && (
            <details className="text-muted-foreground">
              <summary className="w-fit cursor-pointer focus-visible:outline-2 focus-visible:outline-ring">
                Exam topics
              </summary>
              <p className="mt-1 leading-relaxed">{topics.join(" · ")}</p>
            </details>
          )}
          {officialUrl && (
            <a
              className="inline-flex items-center gap-1 underline underline-offset-4"
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Official program reference for ${examCode ?? title}`}
            >
              {issuer === "Microsoft" ? "Microsoft Learn" : "Official program"}{" "}
              <ArrowUpRightIcon aria-hidden className="size-3.5" />
            </a>
          )}
          {credentialUrl && (
            <a
              className="flex w-fit items-center gap-1 underline underline-offset-4"
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${title}`}
            >
              Verify credential{" "}
              <ArrowUpRightIcon aria-hidden className="size-3.5" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
