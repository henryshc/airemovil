"use client"

import { useEffect } from "react"

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )
    reveals.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
