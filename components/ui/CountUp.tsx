'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  className?: string
}

export default function CountUp({ end, duration = 2500, className = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && countRef.current === 0) {
          countRef.current = 1
          const startTime = Date.now()
          const endTime = startTime + duration

          const animate = () => {
            const now = Date.now()
            const remaining = Math.max(0, endTime - now)
            const progress = 1 - remaining / duration
            
            if (progress < 1) {
              const currentCount = Math.floor(progress * end)
              setCount(currentCount)
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(animate)
        }
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [end, duration])

  return (
    <div ref={elementRef} className={className}>
      {count}{end > 0 && '+'}
    </div>
  )
}
