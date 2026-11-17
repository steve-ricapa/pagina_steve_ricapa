import Image from "next/image"

import { SiteMark } from "@/components/site-mark"
import { USER } from "@/features/portfolio/data/user"

import { PronounceMyName } from "./pronounce-my-name"

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="grid shrink-0 place-items-center border-r border-edge p-2 sm:p-4">
        {USER.avatar ? (
          <Image
            src={USER.avatar}
            alt={USER.displayName}
            width={128}
            height={128}
            className="size-16 rounded-full sm:size-32"
            unoptimized
          />
        ) : (
          <div
            aria-hidden
            className="grid size-16 place-items-center rounded-full border border-edge bg-muted sm:size-32"
          >
            <SiteMark className="w-8 sm:w-14" />
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-4">
        <div className="flex items-center gap-2 px-4 pb-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            {USER.displayName}
          </h1>
          {USER.namePronunciationUrl && (
            <PronounceMyName namePronunciationUrl={USER.namePronunciationUrl} />
          )}
        </div>
        <p className="border-t border-edge px-4 pt-2 font-pixel-square text-sm text-balance text-muted-foreground">
          {USER.headline}
        </p>
      </div>
    </div>
  )
}
