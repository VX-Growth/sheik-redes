import { Shield, Clock, Award, Wrench } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Materiais de Alta Qualidade",
    description: "Utilizamos apenas redes certificadas e resistentes à radiação UV, garantindo durabilidade.",
  },
  {
    icon: Clock,
    title: "Instalação Rápida",
    description: "Equipe especializada realiza a instalação em poucas horas, sem bagunça.",
  },
  {
    icon: Award,
    title: "Garantia Estendida",
    description: "Todos os nossos serviços possuem garantia de até 5 anos.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Fazemos manutenção preventiva para aumentar a durabilidade da sua rede.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Por que escolher a Sheik Redes?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <benefit.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
