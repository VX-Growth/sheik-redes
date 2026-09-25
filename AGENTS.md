# AGENTS.md - Sheik Redes

Este documento define o contrato operacional e técnico do projeto **Sheik Redes**.

## 1. Identidade e Registro

```text
Project ID: sheik-redes
Nome Humano: Sheik Redes
Repositório: VX-Growth/sheik-redes
Domínio Público: https://sheikredes.com.br (alias: https://www.sheikredes.com.br)
Executor de Deploy: central-executor
Porta do Container: 3000
Healthcheck: /
Rede: vx-project-sheik-redes
```

## 2. Identidade Visual da Marca

- **Slogan:** "Proteja quem você ama com Segurança Total."
- **Cores Principais:**
  - Azul Primário: `#1C3F94` (rgb(28, 63, 148))
  - Azul Accent: `#152F6F` (rgb(21, 47, 111))
  - Fundo / Card: `#FFFFFF`
  - WhatsApp: `#25D366`
- **Ativos:**
  - Logo oficial: `public/images/logo.png`
  - Imagem Hero: `public/images/hero-girl.png`
  - Galeria de Serviços: `public/images/gallery-*.jpeg`
  - Contato / WhatsApp: `(11) 98366-7399`

## 3. Arquitetura da Aplicação

- **Runtime:** Node.js 22 LTS (Alpine)
- **Servidor:** Express (`server.js`)
- **Porta:** 3000 (`process.env.PORT || 3000`)
- **Healthcheck:** `GET /health` e `GET /`
- **Frontend:** Landing Page responsiva de alta conversão para redes de proteção (janelas, varandas, piscinas, escadas, pets e infantil) com Tailwind CSS e integração direta ao WhatsApp.
- **Next.js Source:** Código original preservado em `next-source/`.

## 4. Deploy Canônico

Novas versões devem ser commitadas na branch `main` e o deploy é orquestrado centralmente pelo repositório `VX-Growth/infra-vps` via `platform-managed-project-deploy.yml`.
