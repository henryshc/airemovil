import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowWeWork from "@/components/how-we-work"
import SeoLocal from "@/components/seo-local"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import SiteFooter from "@/components/site-footer"
import WhatsAppFab from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      {/* Skip link */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-white text-slate-900 px-4 py-2 rounded-xl shadow-lg border border-slate-200"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <main>
        <Hero />
        <HowWeWork />
        <SeoLocal />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
