import { CAREER_START } from '@utils/constants'

/** Whole years of professional experience as of `now`. */
export function getYearsOfExperience(now: Date = new Date(), start: Date = CAREER_START): number {
  let years = now.getFullYear() - start.getFullYear()
  const hasHadAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate())
  if (!hasHadAnniversary) years -= 1
  return Math.max(0, years)
}
