import { readFileSync } from "node:fs"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { SiteMark } from "@/components/site-mark"
import { USER } from "@/features/portfolio/data/user"

const geistMedium = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-Medium.ttf")
)

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get("title") ?? USER.displayName
  const description =
    searchParams.get("description") ??
    (searchParams.has("title") ? null : USER.headline)

  return new ImageResponse(
    (
      <div tw="w-full h-full flex text-white bg-black">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="absolute flex bottom-16 right-16">
          <SiteMark width={128} height={64} />
        </div>

        <div tw="absolute inset-32 flex flex-col w-[896px] justify-center">
          <div
            style={{
              fontFamily: "GeistSans",
              fontWeight: 600,
              fontSize: 64,
              textWrap: "balance",
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </div>

          {description && (
            <div
              tw="flex-grow-1 mt-4 text-zinc-400"
              style={{
                fontFamily: "GeistSans",
                fontWeight: 500,
                fontSize: 32,
                textWrap: "balance",
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GeistSans",
          data: geistMedium,
          weight: 500,
        },
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
      ],
    }
  )
}
