export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-gradient min-h-[740px] flex items-center text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/25 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/15 blur-3xl rounded-full"></div>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center pt-10 pb-14">
          {/* Copy */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-blue-900/40 backdrop-blur-md border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-extrabold mb-7 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Especialistas en A/C Automotriz en San Pedro Sula
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance">
              {"A/C que enfría "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                de verdad
              </span>
              {", sin inventos."}
            </h1>

            <p className="mt-5 text-lg md:text-2xl text-slate-200 leading-relaxed max-w-xl font-light">
              {"Diagnóstico claro, cotización directa y reparación con garantía."}
            </p>

            {/* Bullets */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
              {[
                {
                  icon: "fa-clipboard-check",
                  title: "Diagnóstico transparente",
                  desc: "Explicamos opciones antes de reparar.",
                },
                {
                  icon: "fa-snowflake",
                  title: "R134a y R1234yf",
                  desc: "Vacío + recarga + preventivo.",
                },
                {
                  icon: "fa-shield-alt",
                  title: "Garantía de mano de obra",
                  desc: "Respaldo real, no promesas.",
                },
                {
                  icon: "fa-award",
                  title: "28 años de experiencia",
                  desc: "En SPS, con clientes recurrentes.",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex items-start gap-3 bg-white/10 border border-white/15 backdrop-blur-md p-4 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                    <i className={`fas ${item.icon} text-cyan-200`}></i>
                  </div>
                  <div>
                    <div className="font-extrabold">{item.title}</div>
                    <div className="text-slate-200 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50497801461?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20de%20A/C.%20Marca/modelo/a%C3%B1o:%20____.%20S%C3%ADntoma:%20____."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center transition-all transform hover:-translate-y-1 shadow-xl shadow-green-500/20 border border-green-400/20"
              >
                <i className="fab fa-whatsapp mr-3 text-2xl group-hover:animate-bounce"></i>{" "}
                Agendar por WhatsApp
              </a>

              <a
                href="#contacto"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center transition-all hover:shadow-lg hover:shadow-white/10"
              >
                <i className="fas fa-map-marker-alt mr-3"></i> Ver ubicación
              </a>
            </div>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <i className="fas fa-star text-yellow-300"></i> 4.6 en Google
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <i className="fas fa-map-marker-alt text-cyan-200"></i> San
                Pedro Sula
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <i className="fas fa-clock text-cyan-200"></i> Lun-Vie 7:30-5:30
                | Sáb 7:30-1:00
              </span>
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-200 font-semibold">
                    Servicio rápido y claro
                  </div>
                  <div className="text-2xl font-extrabold">
                    Agenda en 1 minuto
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <i className="fas fa-bolt text-cyan-200 text-xl"></i>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="bg-black/20 rounded-2xl p-4 border border-white/10">
                  <div className="font-extrabold">Mensaje recomendado</div>
                  <div className="text-slate-200 text-sm mt-1">
                    {
                      '"No enfría / intermitente / olor / fuga. Marca, modelo y año: ____"'
                    }
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#servicios"
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 transition"
                  >
                    <div className="font-extrabold">Servicios</div>
                    <div className="text-slate-200 text-sm">Ver opciones</div>
                  </a>
                  <a
                    href="#contacto"
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-4 transition"
                  >
                    <div className="font-extrabold">Ubicación</div>
                    <div className="text-slate-200 text-sm">Cómo llegar</div>
                  </a>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-200/80">
                Cotización sujeta a diagnóstico. Se confirma antes de ejecutar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
