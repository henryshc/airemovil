import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex items-center justify-center">
          <a
            href="#inicio"
            className="opacity-80 hover:opacity-100 transition transform hover:scale-105 duration-300"
            aria-label="Volver al inicio"
          >
            <Image
              src="/assets/logo-airemovil.png"
              alt="Logo Aire Móvil"
              className="h-12 w-auto grayscale hover:grayscale-0 transition duration-500"
              width={180}
              height={60}
            />
          </a>
        </div>

        <div className="flex justify-center gap-8 text-slate-400 mb-8 text-3xl">
          <a
            href="https://www.facebook.com/airemovil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition transform hover:scale-110 hover:-translate-y-1"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/airemovil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition transform hover:scale-110 hover:-translate-y-1"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/50497801461"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition transform hover:scale-110 hover:-translate-y-1"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <p className="text-slate-500 text-sm font-semibold">
          {"© 2026 Aire Móvil del Norte. Todos los derechos reservados."}
          <br />
          <span className="text-slate-400">San Pedro Sula, Honduras.</span>
        </p>
      </div>
    </footer>
  )
}
