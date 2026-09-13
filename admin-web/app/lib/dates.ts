// Plain utility, not a component/hook — keeps Date.now()/new Date() calls
// out of Server Component render bodies, which the React purity linter
// (react-hooks/purity) now flags.
//
// 2026-08-30: that assumption about Server Components rendering "once per
// request" turned out to be wrong in practice — Next.js can invoke a
// Server Component's body more than once per request (once for the initial
// HTML, again for the RSC payload used to hydrate). Calling this more than
// once per component (or mixing it with a separate `new Date()`) can
// produce two slightly different timestamps for the "same" render, which
// showed up as a real hydration mismatch in `app/(admin)/page.tsx`
// (`BookingsBarChart` day labels differed between the two passes). Fix
// applied there: capture `Date.now()` exactly once per component, round it
// to a granularity coarse enough that inter-pass jitter can't change any
// rendered text (day-level, for anything that ends up in a date label),
// and derive every other timestamp from that single captured value instead
// of calling these helpers (or `new Date()`) again. Follow that pattern
// for any new dashboard-style page that renders date-derived text.
export function isoHoursFromNow(hours: number): string {
  return new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
}

export function isoDaysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}
