"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

const slides = [
  {
    src: "/assets/foto-reparacion.jpg",
    alt: "Detección y reparación de fugas en A/C automotriz",
  },
  {
    src: "/assets/foto-mantenimiento.jpg",
    alt: "Cambio de evaporadores y mantenimiento de A/C automotriz",
  },
  {
    src: "/assets/foto-repuestos.jpg",
    alt: "Reparaciones completas y diagnóstico de aire acondicionado automotriz",
  },
]

export default function RepairsCarousel() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    stopAutoplay()
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4500)
  }, [stopAutoplay])

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [startAutoplay, stopAutoplay])

  const goTo = (i: number) => {
    setIndex((i + slides.length) % slides.length)
    startAutoplay()
  }

  // Touch handling
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > 40) {
      goTo(dx > 0 ? index - 1 : index + 1)
    }
  }

  return (
    <div
      ref={containerRef}
      className="h-60 overflow-hidden relative"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="carousel-slide">
            <Image
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={1200}
              height={800}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-6 z-20">
        <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
          <i className="fas fa-tools text-xl"></i>
        </div>
      </div>

      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
        <button
          className="carousel-btn pointer-events-auto"
          type="button"
          aria-label="Anterior"
          onClick={() => goTo(index - 1)}
        >
          <i className="fas fa-chevron-left text-slate-900"></i>
        </button>
        <button
          className="carousel-btn pointer-events-auto"
          type="button"
          aria-label="Siguiente"
          onClick={() => goTo(index + 1)}
        >
          <i className="fas fa-chevron-right text-slate-900"></i>
        </button>
      </div>

      <div
        className="absolute bottom-4 right-6 z-30 flex items-center gap-2"
        aria-label="Indicadores"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            className="carousel-dot"
            type="button"
            aria-label={`Ir a imagen ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
