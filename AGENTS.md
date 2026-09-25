# VX PROJECT AGENT BOOTSTRAP

Protocol version: 2026-09-08.2

> **LEITURA OBRIGATORIA ANTES DE QUALQUER ACAO NESTE REPOSITORIO.**

Este projeto faz parte da infraestrutura gerenciada da VX Growth.

Antes de diagnosticar, alterar codigo, banco, deploy, DNS, Auth, Storage, Edge Functions, cron, secrets, integracoes ou infraestrutura:

1. leia o protocolo global em `VX-Growth/infra-vps/AGENTS.md`;
2. leia a fonte unica de contexto em `VX-Growth/infra-vps/VX-MASTER-CONTEXT.md`;
3. localize e leia o manifest deste projeto em `VX-Growth/infra-vps/platform/projects/`;
4. leia a documentacao operacional especifica aplicavel em `VX-Growth/infra-vps/docs/`;
5. confira o estado live antes de assumir que GitHub e producao coincidem.

## Regras permanentes

- Nao invente infraestrutura paralela se a VX ja possui ferramenta oficial para a tarefa.
- VPS/PostgreSQL VX e a infraestrutura de destino oficial. Servicos externos usados como origem de migracao nao viram automaticamente infraestrutura oficial.
- Project Factory provisiona novos projetos e contratos gerenciados.
- Control Plane coordena operacoes gerenciadas.
- VX Executor e workflows canonicos executam mutacoes autorizadas.
- Cloudflare cuida de DNS/edge conforme o manifest e os fluxos oficiais.
- Secrets nunca devem ser expostos, copiados para documentacao ou distribuidos entre repositorios.
- Toda alteracao deve ser pequena, reversivel, validada e documentada.
- Mudanca de arquitetura, ferramenta, servico, padrao operacional ou capacidade global exige atualizar `VX-Growth/infra-vps/VX-MASTER-CONTEXT.md` no mesmo bloco de trabalho.
- Uma ferramenta nova nao esta concluida enquanto nao estiver documentada no contexto mestre.
- Antes de acao irreversivel ou de alto impacto fora do escopo autorizado, pare e solicite autorizacao.

## Regra de conclusao

```text
ENTENDER -> LER CONTEXTO VX -> AUDITAR -> EXECUTAR -> VALIDAR -> DOCUMENTAR -> CONCLUIR
```

Se este arquivo conflitar com o contexto global, nao improvise. Consulte `VX-MASTER-CONTEXT.md`, o manifest do projeto e o estado live e reporte o conflito.

---

## Existing repository agent instructions preserved

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
