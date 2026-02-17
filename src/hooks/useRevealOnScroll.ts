import { useEffect } from 'react'

export function useRevealOnScroll(reduceMotion: boolean) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')

    if (reduceMotion) {
      elements.forEach((element) => {
        element.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [reduceMotion])
}
