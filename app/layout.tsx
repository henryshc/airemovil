import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Aire Móvil | Expertos en A/C Automotriz en San Pedro Sula",
  description:
    "Taller certificado en aire acondicionado automotriz en San Pedro Sula. Diagnóstico, recarga R134a y R1234yf, reparación de fugas y soluciones completas con garantía.",
  robots: "index,follow",
  openGraph: {
    url: "https://airemovil.vercel.app/",
    type: "website",
    title: "Aire Móvil | Frescura Garantizada en San Pedro Sula",
    description:
      "Especialistas en A/C automotriz. Agenda tu revisión hoy por WhatsApp o llamada.",
    images: ["https://airemovil.vercel.app/assets/fondo-taller-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aire Móvil | Frescura Garantizada en San Pedro Sula",
    description:
      "Especialistas en A/C automotriz. Agenda tu revisión hoy por WhatsApp o llamada.",
    images: ["https://airemovil.vercel.app/assets/fondo-taller-hero.jpg"],
  },
  alternates: {
    canonical: "https://airemovil.vercel.app/",
  },
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Aire Móvil del Norte",
              image:
                "https://airemovil.vercel.app/assets/fondo-taller-hero.jpg",
              url: "https://airemovil.vercel.app/",
              telephone: "+50497801461",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Bo. Las Flores, Ave. Juan Pablo II, entre 3ra y 4ta Ave. NE.",
                addressLocality: "San Pedro Sula",
                addressRegion: "Cortés",
                addressCountry: "HN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 15.51776958508462,
                longitude: -88.02027912510799,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:30",
                  closes: "17:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "07:30",
                  closes: "13:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/airemovil",
                "https://www.instagram.com/airemovil",
              ],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "San Pedro Sula, Cortés, Honduras",
              },
              hasMap: "https://maps.google.com/?q=Aire+Movil+del+norte",
            }),
          }}
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen selection:bg-blue-200 selection:text-blue-900">
        {children}
      </body>
    </html>
  )
}
