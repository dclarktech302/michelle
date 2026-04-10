'use client'
import { useEffect, useRef } from 'react'

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'zoom'

export default function RevealOnScroll({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: RevealVariant
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal reveal-${variant} ${className}`}>
      {children}
    </div>
  )
}