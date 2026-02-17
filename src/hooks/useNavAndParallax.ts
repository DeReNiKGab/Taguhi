import { useEffect } from 'react'

export function useNavAndParallax(
  reduceMotion: boolean,
  onNavSolidChange: (isSolid: boolean) => void,
) {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      onNavSolidChange(y > 20)

      if (reduceMotion) return

      const heroShift = y * 0.2
      const contactShift = Math.max(y - window.innerHeight * 3.2, 0) * 0.12

      document.documentElement.style.setProperty('--hero-parallax', `${heroShift}px`)
      document.documentElement.style.setProperty('--contact-parallax', `${contactShift}px`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [onNavSolidChange, reduceMotion])
}
