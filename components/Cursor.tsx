'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top = `${my}px`
      }
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }
      requestAnimationFrame(animateRing)
    }

    const onMouseEnter = () => {
      dotRef.current?.classList.add('hovered')
      ringRef.current?.classList.add('hovered')
    }
    const onMouseLeave = () => {
      dotRef.current?.classList.remove('hovered')
      ringRef.current?.classList.remove('hovered')
    }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    const raf = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}