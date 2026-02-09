"use client"

import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"
import RepairsCarousel from "./repairs-carousel"

export default function Services() {
  useReveal()

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Servicios principales
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Tecnología de punta para la salud de tu vehículo con garantía en
            mano de obra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 - Recarga */}
          <div className="reveal bg-white rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <Image
                src="/assets/foto-mantenimiento.jpg"
                alt="Recarga y mantenimiento preventivo de aire acondicionado automotriz"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                width={1200}
                height={800}
              />
              <div className="absolute bottom-4 left-6 z-20">
                <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                  <i className="fas fa-wind text-xl"></i>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                Recarga y mantenimiento
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Refrigerante <strong>R134a</strong> y{" "}
                <strong>R1234yf</strong>. Incluye vacío, recarga de gas y
                mantenimiento preventivo.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Vacío", "R134a", "R1234yf", "Preventivo"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://wa.me/50497801461?text=Hola,%20quiero%20cotizar%20recarga%20de%20A/C%20(R134a%20o%20R1234yf)%20+%20vac%C3%ADo.%20Marca/modelo/a%C3%B1o:%20____."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-extrabold hover:text-blue-700 tracking-wide uppercase text-sm"
              >
                Cotizar ahora{" "}
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Card 2 - Reparaciones (Carousel) */}
          <div className="reveal bg-white rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-2">
            <RepairsCarousel />
            <div className="p-8">
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                Reparaciones completas
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Cambio de evaporadores, reparación de fugas y soluciones
                integrales, entre otros.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Fugas", "Evaporador", "Diagnóstico", "Integral"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://wa.me/50497801461?text=Hola,%20quiero%20agendar%20diagn%C3%B3stico%20de%20A/C.%20S%C3%ADntoma:%20no%20enfr%C3%ADa%20/%20intermitente%20/%20olor%20/%20fuga.%20Marca/modelo/a%C3%B1o:%20____."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-extrabold hover:text-blue-700 tracking-wide uppercase text-sm"
              >
                Agendar diagnóstico{" "}
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Card 3 - Productos */}
          <div className="reveal bg-white rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <Image
                src="/assets/foto-repuestos.jpg"
                alt="Venta de compresores A/C originales y genéricos"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                width={1200}
                height={800}
              />
              <div className="absolute bottom-4 left-6 z-20">
                <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                  <i className="fas fa-cogs text-xl"></i>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                Venta de productos
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Amplio stock en compresores A/C originales y genéricos.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Compresores", "Original", "Genérico", "Consulta"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://wa.me/50497801461?text=Hola,%20quiero%20consultar%20stock%20de%20compresor%20A/C.%20Marca/modelo/a%C3%B1o:%20____."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-extrabold hover:text-blue-700 tracking-wide uppercase text-sm"
              >
                Consultar stock{" "}
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
