"use client"

import { useReducedMotion } from "motion/react"
import { useRef } from "react"

import { BrandContextMenu } from "@/components/brand-context-menu"
import { Magnet } from "@/components/react-bits/magnet"
import { SiteMark } from "@/components/site-mark"
import { cn } from "@/lib/utils"

export function ProfileCover() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  return (
    <BrandContextMenu>
      <div
        ref={containerRef}
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 dark:bg-white/0.75"
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="portfolio-cover-grid absolute -inset-2.5" />
        </div>
        <Magnet
          containerRef={containerRef}
          magnetStrength={6}
          disabled={Boolean(reduceMotion)}
          wrapperClassName="portfolio-cover-mark"
        >
          <SiteMark id="js-cover-mark" className="h-14 w-28 sm:h-16 sm:w-32" />
        </Magnet>
      </div>
    </BrandContextMenu>
  )
}
