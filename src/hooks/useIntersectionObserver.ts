import { useEffect, useState } from 'react'

export function useIntersectionObserver<T extends Element>(options?: IntersectionObserverInit) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const [node, setNode] = useState<T | null>(null)

  useEffect(() => {
    if (!node) return
    const observer = new IntersectionObserver(([ent]) => setEntry(ent), options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [node, JSON.stringify(options)])

  return { setNode, entry }
}
