import { getCertificationCards } from "../../data/certifications"
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
  const featured = entries.filter((entry) => entry.featured)
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
      {entries.length > 0 && (
        <PanelContent className="space-y-4 border-t border-edge">
          <h3 className="text-lg font-semibold">Certification library</h3>
          <CertificationGrid entries={entries} />
        </PanelContent>
      )}
    </Panel>
  )
}
