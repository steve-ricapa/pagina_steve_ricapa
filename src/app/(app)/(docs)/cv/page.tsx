import { ArrowUpRightIcon, DownloadIcon } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { SITE_INFO } from "@/config/site"
import {
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"

const PDF_URL = "/steve-ricapa-cv.pdf"

export const metadata: Metadata = {
  title: "CV",
  description: "View or download Steve Ricapa’s résumé in PDF format.",
  alternates: SITE_INFO.hasPublicUrl ? { canonical: "/cv" } : undefined,
}

export default function CVPage() {
  return (
    <>
      <PanelHeader className="py-3">
        <PanelTitle asChild>
          <h1>Curriculum Vitae</h1>
        </PanelTitle>
      </PanelHeader>
      <PanelContent className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">Steve Ricapa · PDF</p>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline">
              <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                <ArrowUpRightIcon aria-hidden /> Open PDF
              </a>
            </Button>
            <Button asChild>
              <a href={PDF_URL} download="Steve-Ricapa-CV.pdf">
                <DownloadIcon aria-hidden /> Download CV
              </a>
            </Button>
          </div>
        </div>
        <object
          data={PDF_URL}
          type="application/pdf"
          aria-label="Steve Ricapa’s CV in PDF format"
          className="block h-[75dvh] min-h-96 w-full rounded-lg border border-edge bg-muted/30"
        >
          <p className="p-4 text-sm text-muted-foreground">
            PDF preview is unavailable in this browser. Use Open PDF or Download
            CV above.
          </p>
        </object>
      </PanelContent>
    </>
  )
}
