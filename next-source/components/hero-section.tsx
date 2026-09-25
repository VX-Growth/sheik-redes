"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Phone } from "lucide-react"

export function HeroSection() {
  const handleWhatsApp = () => {
    const phoneNumber = "5511983667399"
    const message = encodeURIComponent("Olá! Vi o site e gostaria de solicitar um orçamento.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="absolute inset-0 bg-[url('/safety-net-pattern.jpg')] bg-cover bg-center opacity-5" />

      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/logo.png"
                alt="Sheik Redes"
                width={200}
                height={200}
                className="h-auto w-48 md:w-56"
                priority
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Proteja quem você ama com <span className="text-primary">Segurança Total</span>
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Especialistas em redes de proteção para janelas, varandas, piscinas e sacadas. Garantindo a segurança da
                sua família e pets há mais de 10 anos.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="h-12 gap-2 text-base md:h-14 md:text-lg" onClick={handleWhatsApp}>
                <Phone className="h-5 w-5" />
                Solicitar Orçamento Grátis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 gap-2 text-base md:h-14 md:text-lg bg-transparent"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Shield className="h-5 w-5" />
                Nossos Serviços
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">10+ Anos</p>
                  <p className="text-xs text-muted-foreground">de Experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">5.000+</p>
                  <p className="text-xs text-muted-foreground">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/hero-girl.png"
                alt="Criança segura com rede de proteção"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-card p-6 shadow-xl md:block">
              <p className="text-sm font-semibold text-card-foreground">Certificado de Qualidade</p>
              <p className="text-xs text-muted-foreground">ISO 9001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
