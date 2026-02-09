"use client"

import { useReveal } from "@/hooks/use-reveal"

export default function HowWeWork() {
  useReveal()

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Un proceso profesional, medible y orientado a resultados:
            diagnosticamos con precisión, explicamos opciones con claridad y
            ejecutamos solo lo necesario, priorizando seguridad, desempeño y
            durabilidad del sistema A/C.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-stethoscope",
              title: "1) Diagnóstico",
              text: 'Evaluamos presiones, fugas y componentes críticos para identificar la causa real. Evitamos "soluciones rápidas" que solo postergan el problema.',
            },
            {
              icon: "fa-file-invoice-dollar",
              title: "2) Cotización",
              text: "Presentamos alternativas con alcance, tiempos y costos. Usted aprueba antes de intervenir el vehículo: cero sorpresas.",
            },
            {
              icon: "fa-tools",
              title: "3) Reparación + Garantía",
              text: "Ejecutamos el trabajo con estándares de taller y entregamos con garantía en mano de obra. Verificamos desempeño antes de la entrega.",
            },
          ].map((step) => (
            <div
              key={step.icon}
              className="reveal bg-slate-50 rounded-[2rem] p-7 border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <div className="text-xl font-extrabold">{step.title}</div>
              <p className="text-slate-600 mt-2">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Commitment banner */}
        <div className="mt-10 reveal">
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="max-w-3xl">
                <div className="text-sm font-extrabold text-blue-700 uppercase tracking-wider">
                  Compromiso de servicio
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mt-2">
                  Transparencia, calidad y respaldo
                </div>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Nuestro enfoque es simple:{" "}
                  <strong>diagnóstico correcto</strong> para una{" "}
                  <strong>reparación correcta</strong>. Por eso documentamos
                  hallazgos, validamos el funcionamiento del sistema y le
                  orientamos sobre el mantenimiento preventivo para alargar la
                  vida útil del A/C.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://wa.me/50497801461?text=Hola,%20quiero%20agendar%20un%20diagn%C3%B3stico%20de%20A/C.%20Marca/modelo/a%C3%B1o:%20____.%20S%C3%ADntoma:%20____."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-2xl font-extrabold hover:bg-green-500 transition shadow-lg shadow-green-500/20"
                >
                  <i className="fab fa-whatsapp text-lg"></i> Agendar
                </a>
                <a
                  href="tel:+50497801461"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-extrabold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
                >
                  <i className="fas fa-phone-alt text-sm"></i> Llamar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
