"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTASection() {
  const handleWhatsApp = () => {
    const phoneNumber = "5511983667399"
    const message = encodeURIComponent("Olá! Gostaria de agendar uma visita técnica gratuita.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Pronto para proteger sua família?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg opacity-90">
          Entre em contato agora e receba um orçamento personalizado sem compromisso. Visita técnica gratuita!
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="h-14 gap-2 text-lg" onClick={handleWhatsApp}>
            <Phone className="h-5 w-5" />
            (11) 98366-7399
          </Button>
        </div>
      </div>
    </section>
  )
}
