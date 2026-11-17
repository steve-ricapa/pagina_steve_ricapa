import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"

import { getCertificationCards } from "../../data/certifications"
import { formatMonth } from "../../lib/format-month"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "../panel"
import { CertificationGrid } from "./certification-grid"
import { CertificationItem } from "./certification-item"

export function Certifications() {
  const entries = getCertificationCards()
  const courses = entries.filter((entry) => entry.issuer === "Platzi")
  const main = entries.filter((entry) => entry.issuer !== "Platzi")
  const featured = main.filter((entry) => entry.featured)
  return (
    <Panel id="certs" aria-labelledby="certifications-title">
      <PanelHeader>
        <PanelTitle id="certifications-title">
          Certifications
          <PanelTitleSup>{entries.length} public records</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>
      {featured.length > 0 && (
        <PanelContent className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Featured credentials</h3>
            <p className="text-sm text-muted-foreground">
              Associate credentials in cloud AI, security and observability.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {featured.map((entry) => (
              <li key={entry.id} className="min-w-0">
                <CertificationItem certification={entry} />
              </li>
            ))}
          </ul>
        </PanelContent>
      )}
      {main.length > 0 && (
        <PanelContent className="space-y-4 border-t border-edge">
          <h3 className="text-lg font-semibold">Certification library</h3>
          <CertificationGrid entries={main} />
        </PanelContent>
      )}
      {courses.length > 0 && (
        <PanelContent className="space-y-4 border-t border-edge">
          <h3 className="text-lg font-semibold">
            Additional Courses &amp; Training
          </h3>
          <Collapsible className="rounded-lg border border-edge">
            <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring">
              <Image
                src="/brand-icons/platzi.svg"
                width={20}
                height={20}
                alt=""
                unoptimized
                className="shrink-0 dark:invert"
              />
              {courses.length} Platzi Courses
              <ChevronDownIcon
                aria-hidden
                className="ml-auto size-4 group-aria-expanded:rotate-180 motion-safe:transition-transform"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden data-ending-style:h-0 data-starting-style:h-0 motion-safe:transition-[height] motion-safe:duration-200">
              <ul
                className="grid gap-2 border-t border-edge p-3 sm:grid-cols-2"
                aria-label="Platzi courses"
              >
                {courses.map(({ id, title, logo, issueDate }) => (
                  <li
                    key={id}
                    className="flex min-w-0 items-start gap-2.5 rounded-md border border-edge p-3 text-sm transition-colors hover:bg-muted/40"
                  >
                    {logo && (
                      <Image
                        src={logo}
                        width={17}
                        height={17}
                        alt=""
                        unoptimized
                        className="mt-0.5 shrink-0 dark:invert"
                      />
                    )}
                    <div className="min-w-0">
                      <p className="font-medium wrap-break-word">{title}</p>
                      {issueDate && (
                        <time
                          className="text-xs text-muted-foreground"
                          dateTime={issueDate}
                        >
                          {formatMonth(issueDate)}
                        </time>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </PanelContent>
      )}
    </Panel>
  )
}
