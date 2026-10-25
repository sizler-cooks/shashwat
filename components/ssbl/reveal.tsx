"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

type RevealDirection = "left" | "right" | "up" | "pop"

type RevealProps = {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
}

export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true)
      return
    }

    setArmed(true)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${direction}${armed ? " is-armed" : ""}${visible ? " is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
