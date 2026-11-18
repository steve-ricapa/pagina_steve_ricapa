import dynamic from "next/dynamic"

import { PortfolioBackdrop } from "@/components/portfolio-backdrop"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
)

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="relative isolate max-w-screen overflow-x-clip px-2">
        <PortfolioBackdrop />
        {children}
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  )
}
