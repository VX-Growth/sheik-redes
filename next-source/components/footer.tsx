import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image src="/logo.png" alt="Sheik Redes" width={150} height={150} className="mb-4 h-auto w-32" />
            <p className="text-sm text-muted-foreground">
              Especialistas em redes de proteção, garantindo a segurança da sua família desde 2014.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 98366-7399</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@sheikredes.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  São Paulo - SP
                  <br />
                  Atendemos toda Grande SP
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Sheik Redes. Todos os direitos reservados.</p>
          <p className="mt-2">
            Feito por:{" "}
            <a
              href="https://nobregrowthmarketing.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Nobre Growth Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
