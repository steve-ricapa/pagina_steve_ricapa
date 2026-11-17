import assert from "node:assert/strict"
import test from "node:test"

import { parseGitHubCalendar } from "../src/features/portfolio/lib/github-calendar"

const calendar = `<h2 id="js-contribution-activity-description">1,024 contributions in the last year</h2>
  <td id="later" data-date="2026-11-17" data-level="4"></td>
  <td data-level="0" data-date="2026-11-16" id="earlier"></td>
  <tool-tip for="earlier">No contributions on November 16th.</tool-tip>
  <tool-tip for="later">1,024 contributions on November 17th.</tool-tip>`

test("uses GitHub's public counts and heat levels, ordered by day", () => {
  assert.deepEqual(parseGitHubCalendar(calendar), {
    totalCount: 1024,
    data: [
      { date: "2026-11-16", count: 0, level: 0 },
      { date: "2026-11-17", count: 1024, level: 4 },
    ],
  })
})

test("rejects missing or inconsistent public contribution data", () => {
  assert.throws(
    () =>
      parseGitHubCalendar(
        calendar.replace("1,024 contributions in", "59 contributions in")
      ),
    /public total/
  )
  assert.throws(
    () =>
      parseGitHubCalendar(calendar.replace('for="earlier"', 'for="missing"')),
    /contribution day/
  )
})
