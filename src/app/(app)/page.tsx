import type { Metadata } from "next"
import type { ProfilePage as PageSchema, WithContext } from "schema-dts"

import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"
import { About } from "@/features/portfolio/components/about"
import { Awards } from "@/features/portfolio/components/awards"
import { Blog } from "@/features/portfolio/components/blog"
import { Bookmarks } from "@/features/portfolio/components/bookmarks"
import { Certifications } from "@/features/portfolio/components/certifications"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileCover } from "@/features/portfolio/components/profile-cover"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links-v2"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { TestimonialsMarquee } from "@/features/portfolio/components/testimonials-marquee"
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "@/features/portfolio/data/testimonials"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  alternates: SITE_INFO.hasPublicUrl ? { canonical: "/" } : undefined,
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="portfolio-home mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <ProfileCover />
        <div className="portfolio-intro">
          <ProfileHeader />
        </div>
        <p className="portfolio-intro portfolio-intro-copy border-x border-edge px-4 py-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {USER.bio}
        </p>
        <Separator />

        <Overview />
        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <TechStack />
        <Separator />

        <Projects />
        <Separator />

        <Experiences />
        <Separator />

        <Education />
        <Separator />

        <Awards />
        <Separator />

        <Certifications />
        <Separator />

        <GitHubContributions />
        <Separator />
        {getAllDocs().length > 0 && (
          <>
            <Blog />
            <Separator />
          </>
        )}
        {TESTIMONIALS_1.length + TESTIMONIALS_2.length > 0 && (
          <>
            <TestimonialsMarquee />
            <Separator />
          </>
        )}
        {BOOKMARKS.length > 0 && (
          <>
            <Bookmarks />
            <Separator />
          </>
        )}
      </div>
    </>
  )
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: SITE_INFO.hasPublicUrl ? SITE_INFO.url : undefined,
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar || undefined,
      jobTitle: USER.jobTitle,
      knowsAbout: USER.keywords.filter(
        (term) => term !== USER.displayName && term !== "Lima Peru"
      ),
      description: USER.bio,
      sameAs: SOCIAL_LINKS.map(({ href }) => href),
    },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}
