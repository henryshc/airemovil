"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a
            href="#inicio"
            className="flex items-center gap-2 group"
            aria-label="Ir al inicio"
          >
            <Image
              src="/assets/logo-airemovil.png"
              alt="Logo Aire Móvil"
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              width={180}
              height={60}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-2 font-semibold">
            <a
              href="#inicio"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
            >
              Servicios
            </a>
            <a
              href="#testimonios"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
            >
              Opiniones
            </a>
            <a
              href="#contacto"
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
            >
              Ubicación
            </a>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/50497801461?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20de%20A/C.%20Marca/modelo/a%C3%B1o:%20____.%20S%C3%ADntoma:%20____."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full font-extrabold hover:bg-green-500 transition shadow-lg shadow-green-500/25"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              WhatsApp
            </a>

            <a
              href="tel:+50497801461"
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-extrabold hover:bg-blue-700 transition shadow-lg shadow-blue-500/25"
            >
              <i className="fas fa-phone-alt text-sm"></i>
              Llamar
            </a>

            <a
              href="tel:+50497801461"
              className="sm:hidden text-blue-600 text-2xl p-2 hover:bg-blue-50 rounded-full transition"
              aria-label="Llamar"
            >
              <i className="fas fa-phone-alt"></i>
            </a>

            <button
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-controls="mobileMenu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i
                className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-slate-800 text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobileMenu"
          className="md:hidden border-t border-slate-200 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2 font-extrabold">
            <a
              href="#inicio"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl hover:bg-blue-50 text-slate-700"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl hover:bg-blue-50 text-slate-700"
            >
              Servicios
            </a>
            <a
              href="#testimonios"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl hover:bg-blue-50 text-slate-700"
            >
              Opiniones
            </a>
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl hover:bg-blue-50 text-slate-700"
            >
              Ubicación
            </a>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href="https://wa.me/50497801461?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20de%20A/C.%20Marca/modelo/a%C3%B1o:%20____.%20S%C3%ADntoma:%20____."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-2xl bg-green-600 text-white hover:bg-green-500 transition flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-xl"></i> WhatsApp
              </a>
              <a
                href="tel:+50497801461"
                className="px-4 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <i className="fas fa-phone-alt text-sm"></i> Llamar
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
