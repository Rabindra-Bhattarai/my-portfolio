import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * Any child element with the class `fade-in` gets the class
 * `visible` added when it scrolls into view, triggering the
 * CSS transition defined in globals.css.
 */
export function useScrollFadeIn() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>('.fade-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}