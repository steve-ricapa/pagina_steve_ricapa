"use client"

import { PauseIcon, PlayIcon } from "lucide-react"
import { useState } from "react"

export function PortfolioBackdrop() {
  const [paused, setPaused] = useState(false)
  const label = paused ? "Resume background motion" : "Pause background motion"

  return (
    <>
      <div aria-hidden className="portfolio-backdrop" data-paused={paused} />
      <button
        type="button"
        aria-label={label}
        title={label}
        onClick={() => setPaused(!paused)}
        className="fixed bottom-3 left-3 z-20 grid size-9 place-items-center rounded-md border border-edge bg-background text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring motion-reduce:hidden"
      >
        {paused ? <PlayIcon className="size-4" /> : <PauseIcon className="size-4" />}
      </button>
    </>
  )
}
