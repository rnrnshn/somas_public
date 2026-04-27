import Lenis from 'lenis'
import { useEffect } from 'react'

type Props = {
  disabled?: boolean
}

export function SmoothScroll({ disabled = false }: Props) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    if (prefersReducedMotion || isMobile || disabled) return

    const lenis = new Lenis({
      anchors: true,
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [disabled])

  return null
}
