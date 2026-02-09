export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/50497801461?text=Hola,%20visito%20su%20web%20y%20necesito%20ayuda"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 z-[60] border-4 border-white/20 animate-bounce-subtle group"
      aria-label="Abrir WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl md:text-4xl group-hover:rotate-12 transition-transform"></i>
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-extrabold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {"¡Hablemos!"}
      </span>
    </a>
  )
}
