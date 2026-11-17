import { CERTIFICATIONS } from "../../data/certifications"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { CertificationItem } from "./certification-item"

export function Certifications() {
  const issuers = [...new Set(CERTIFICATIONS.map(({ issuer }) => issuer))]
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>Certifications</PanelTitle>
      </PanelHeader>
      {issuers.map((issuer) => (
        <div className="border-b border-edge last:border-b-0" key={issuer}>
          <h3 className="border-b border-dashed border-edge bg-muted/30 px-4 py-2 font-mono text-xs text-muted-foreground">
            {issuer}
          </h3>
          <ul>
            {CERTIFICATIONS.filter((item) => item.issuer === issuer).map(
              (item) => (
                <li key={item.title}>
                  <CertificationItem certification={item} />
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </Panel>
  )
}
