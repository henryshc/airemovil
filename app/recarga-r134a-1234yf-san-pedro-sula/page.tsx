import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Recarga de Aire Acondicionado R134a y 1234yf en San Pedro Sula | Aire Móvil",
  description:
    "Servicio profesional de recarga de aire acondicionado automotriz con refrigerante R134a y 1234yf en San Pedro Sula. Diagnóstico, mantenimiento preventivo y garantía.",
  openGraph: {
    title: "Recarga de Aire Acondicionado Automotriz en SPS | Aire Móvil",
    description:
      "Especialistas en R134a y 1234yf. Atención profesional en San Pedro Sula.",
    url: "https://airemovil.vercel.app/recarga-r134a-1234yf-san-pedro-sula",
    type: "website",
  },
  alternates: {
    canonical:
      "https://airemovil.vercel.app/recarga-r134a-1234yf-san-pedro-sula",
  },
}

export default function RecargaPage() {
  return (
    <>
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-balance text-white">
            Recarga de Aire Acondicionado Automotriz en San Pedro Sula
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Servicio profesional con refrigerante{" "}
            <strong>R134a</strong> y <strong>1234yf</strong>. En Aire
            Móvil contamos con{" "}
            <strong>28 años de experiencia</strong> respaldando cada
            mantenimiento.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            {"¿Qué incluye nuestro servicio de recarga?"}
          </h2>
          <ul className="list-disc list-inside text-slate-700 flex flex-col gap-2">
            <li>Diagnóstico del sistema de aire acondicionado</li>
            <li>Vacío del sistema</li>
            <li>
              Recarga con refrigerante R134a o 1234yf según el vehículo
            </li>
            <li>Mantenimiento preventivo del sistema</li>
            <li>Prueba de funcionamiento y temperatura</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            {"¿Cuándo necesita tu vehículo una recarga?"}
          </h2>
          <p className="text-slate-700 mb-4">
            Si notas alguno de estos síntomas, es momento de revisar tu aire
            acondicionado:
          </p>
          <ul className="list-disc list-inside text-slate-700 flex flex-col gap-2">
            <li>El aire no enfría correctamente</li>
            <li>Enfría solo al inicio y luego deja de hacerlo</li>
            <li>Ruidos extraños al encender el A/C</li>
            <li>Mal olor proveniente de las salidas de aire</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Atención especializada en San Pedro Sula
          </h2>
          <p className="text-slate-700">
            Estamos ubicados en San Pedro Sula y atendemos vehículos livianos
            con equipos modernos y técnicos capacitados. Nuestro objetivo es que
            conduzcas con comodidad y seguridad, incluso en los días más
            calurosos.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Cotiza tu recarga hoy mismo
          </h2>
          <p className="text-slate-700 mb-6">
            Escríbenos por WhatsApp y agenda tu revisión sin compromiso.
          </p>
          <a
            href="https://wa.me/50497801461?text=Hola,%20necesito%20cotizar%20una%20recarga%20de%20aire%20acondicionado"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition"
          >
            Cotizar por WhatsApp
          </a>
        </section>
      </main>

      <footer className="bg-slate-900 text-white text-center py-8">
        <p className="text-sm text-slate-400">
          {"© 2026 Aire Móvil del Norte · San Pedro Sula, Honduras"}
        </p>
      </footer>
    </>
  )
}
