import { useEffect, useState } from 'react'
import { SECTION_IDS, type SectionId } from '@utils/constants'

export type { SectionId }

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
