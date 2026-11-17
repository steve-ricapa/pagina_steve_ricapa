import { Suspense } from "react"

import { getGitHubContributions } from "../../data/github-contributions"
import { GITHUB_URL } from "../../data/social-links"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph"

export function GitHubContributions() {
  return (
    <Panel id="github">
      <PanelHeader>
        <PanelTitle>GitHub Contributions</PanelTitle>
      </PanelHeader>

      <Suspense fallback={<GitHubContributionFallback />}>
        <Contributions />
      </Suspense>
    </Panel>
  )
}

async function Contributions() {
  const data = await getGitHubContributions().catch(() => null)
  return data ? (
    <GitHubContributionGraph data={data.data} totalCount={data.totalCount} />
  ) : (
    <PanelContent className="text-sm text-muted-foreground">
      Contribution data is temporarily unavailable.{" "}
      <a
        className="underline"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View activity on GitHub
      </a>
      .
    </PanelContent>
  )
}
