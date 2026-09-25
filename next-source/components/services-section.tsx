import { Card, CardContent } from "@/components/ui/card"
import { Home, Waves, Building2, Baby, Dog, Package } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Janelas",
    description: "Proteção completa para todas as janelas da sua casa, com instalação rápida e segura.",
  },
  {
    icon: Waves,
    title: "Piscinas",
    description: "Redes resistentes para piscinas, garantindo segurança sem comprometer a estética.",
  },
  {
    icon: Building2,
    title: "Varandas e Sacadas",
    description: "Proteção ideal para apartamentos e casas com varandas ou sacadas amplas.",
  },
  {
    icon: Building2,
    title: "Mezaninos",
    description: "Soluções especiais para mezaninos com instalação profissional.",
  },
  {
    icon: Home,
    title: "Escadas",
    description: "Proteção para escadas internas e externas, evitando acidentes.",
  },
  {
    icon: Baby,
    title: "Proteção Infantil",
    description: "Redes especialmente projetadas para a segurança das crianças.",
  },
  {
    icon: Dog,
    title: "Proteção para Pets",
    description: "Mantenha seus pets seguros em varandas e janelas com nossas redes resistentes.",
  },
  {
    icon: Package,
    title: "Porta Palets",
    description: "Soluções industriais para proteção em armazéns e depósitos.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Oferecemos soluções completas em redes de proteção para todos os ambientes
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
