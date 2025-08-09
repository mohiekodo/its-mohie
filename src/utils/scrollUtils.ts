import { useEffect } from 'react'

export function useReducedMotion(): boolean {
  const prefersReducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')
  return prefersReducedMotion?.matches ?? false
}

export function useScrollToHash(): void {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])
}
