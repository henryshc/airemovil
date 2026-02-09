export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="reveal">
            <div className="inline-block px-3 py-1 rounded bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-extrabold uppercase tracking-wider mb-6">
              Ubicación estratégica
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
              Visítanos en el corazón de SPS
            </h2>

            <p className="text-slate-300 mb-10 text-lg leading-relaxed font-light max-w-xl">
              Estamos en una zona accesible de San Pedro Sula. Trae tu vehículo
              y espera cómodamente en nuestras instalaciones.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-300 shrink-0">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg mb-1 text-white">
                    Dirección
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Bo. Las Flores, Ave. Juan Pablo II, entre 3ra y 4ta Ave. NE.
                    <br />
                    San Pedro Sula.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-300 shrink-0">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div className="w-full">
                  <h3 className="font-extrabold text-lg mb-2 text-white">
                    Horario de atención
                  </h3>
                  <div className="flex flex-col gap-1 text-slate-300">
                    <div className="flex justify-between w-full max-w-sm">
                      <span>Lun - Vie:</span>
                      <span className="font-extrabold text-white">
                        7:30 AM - 5:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between w-full max-w-sm">
                      <span>Sábado:</span>
                      <span className="font-extrabold text-white">
                        7:30 AM - 1:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=Aire+Movil+del+norte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-8 py-4 rounded-2xl font-extrabold hover:bg-blue-500 transition flex items-center shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 text-white"
              >
                <i className="fas fa-directions mr-3 text-xl"></i> Abrir en GPS
              </a>

              <a
                href="https://wa.me/50497801461?text=Hola,%20%C2%BFme%20puede%20enviar%20la%20ubicaci%C3%B3n%20por%20WhatsApp%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/15 px-8 py-4 rounded-2xl font-extrabold hover:bg-white/15 transition flex items-center text-white"
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i> Enviar
                ubicación
              </a>

              <a
                href="tel:+50497801461"
                className="border border-white/20 px-8 py-4 rounded-2xl font-extrabold hover:bg-white/10 transition flex items-center text-white"
              >
                <i className="fas fa-phone-alt mr-3"></i> +504 9780-1461
              </a>
            </div>
          </div>

          <div className="relative group reveal">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 rounded-[2.5rem]"></div>
            <div className="relative bg-slate-800 p-2 rounded-[2rem] shadow-2xl h-[500px] overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.3795723676812!2d-88.02027912510799!3d15.51776958508462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665b3663d01903%3A0xf3e6a6c79ae01a5b!2sAire%20Movil!5e0!3m2!1ses!2shn!4v1769285951746!5m2!1ses!2shn"
                className="w-full h-full rounded-[1.8rem] grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación Aire Móvil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
