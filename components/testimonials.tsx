export default function Testimonials() {
  const reviews = [
    {
      initials: "FM",
      name: "Fabricio Mejia",
      date: "Hace 2 años",
      color: "from-orange-400 to-orange-600",
      shadow: "shadow-orange-500/30",
      hoverShadow: "hover:shadow-orange-500/10",
      text: '"Excelente diagnóstico, nos mostraron opciones y la retroalimentación fue clara."',
    },
    {
      initials: "CA",
      name: "Claudia Alfaro",
      date: "Hace 2 años",
      color: "from-teal-500 to-teal-700",
      shadow: "shadow-teal-500/30",
      hoverShadow: "hover:shadow-teal-500/10",
      text: '"Muy profesionales y amables. Dan confianza: sientes que tu vehículo está en manos de expertos."',
    },
    {
      initials: "LM",
      name: "Leonel Molina",
      date: "Local Guide",
      color: "from-slate-500 to-slate-700",
      shadow: "shadow-slate-500/30",
      hoverShadow: "hover:shadow-slate-500/10",
      text: '"Excelente servicio y recomendaciones. Muy responsables con el vehículo. Satisfechos con el resultado."',
    },
  ]

  return (
    <section id="testimonios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Logo"
                className="w-6 h-6"
                width={24}
                height={24}
                loading="lazy"
              />
              <span className="font-extrabold text-slate-700 text-sm tracking-wide uppercase">
                Reseñas verificadas
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Clientes felices en SPS
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl">
              Opiniones reales: enfocadas en diagnóstico, claridad y resultados.
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-black text-slate-900">4.6</span>
              <div className="flex flex-col">
                <div
                  className="flex text-yellow-400 text-xl"
                  aria-label="Calificación 4.6 de 5"
                >
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-slate-400 text-xs font-extrabold uppercase tracking-wider text-right mt-1">
                  32 reseñas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className={`reveal bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl ${review.hoverShadow} transition-all duration-300 hover:-translate-y-1 relative`}
            >
              <div className="absolute top-8 right-8 text-6xl text-slate-200 font-serif opacity-50">
                {'"'}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg ${review.shadow}`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-lg">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">
                    {review.date}
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-xs mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-slate-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://maps.google.com/?q=Aire+Movil+del+norte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-slate-200 text-blue-600 font-extrabold hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition-all"
          >
            Ver reseñas en Google{" "}
            <i className="fas fa-external-link-alt ml-2 text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
