import { ArrowUpRightIcon, TrophyIcon } from "lucide-react"

import { AWARDS } from "../data/awards"
import { Panel, PanelHeader, PanelTitle } from "./panel"

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>Awards &amp; Achievements</PanelTitle>
      </PanelHeader>
      <ul className="divide-y divide-edge">
        {AWARDS.map(
          ({
            title,
            year,
            organizer,
            description,
            credentialURL,
            credentialUnavailable,
          }) => (
            <li className="flex items-center" key={title}>
              <TrophyIcon
                className="mx-4 size-5 shrink-0 text-muted-foreground"
                aria-hidden
              />
              <div className="min-w-0 space-y-1 border-l border-dashed border-edge p-4">
                <h3 className="font-medium text-balance">{title}</h3>
                <p className="text-sm text-muted-foreground">
                  <time dateTime={year}>{year}</time> · {organizer}
                </p>
                {description && <p className="text-sm">{description}</p>}
                {credentialURL && !credentialUnavailable && (
                  <a
                    className="inline-flex items-center gap-1 text-sm underline"
                    href={credentialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify recognition <ArrowUpRightIcon className="size-3.5" />
                  </a>
                )}
              </div>
            </li>
          )
        )}
      </ul>
    </Panel>
  )
}
