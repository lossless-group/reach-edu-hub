/**
 * Date formatting utilities for reach-edu-hub.
 * Ported from astro-knots/sites/dark-matter/src/lib/dates/convertRawDatesToPreferredFormats.ts
 * Only the citation-relevant subset is included here.
 */

const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function parseDate(dateStr: string | undefined | null): Date | null {
  if (!dateStr) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return isNaN(d.getTime()) ? null : d;
  }
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? null : d;
}

/** Format an ISO date string as "YYYY, Mon D" — e.g. "2018, Nov 15" */
export function formatCitationDate(
  dateInput: string | undefined | null,
  fallback: string = ''
): string {
  const d = parseDate(dateInput);
  if (!d) return fallback;
  return `${d.getFullYear()}, ${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}`;
}
