# Stack Técnico & Arquitetura - MShift

## 1. Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Biblioteca UI:** React 19
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Motion (Framer Motion), CSS nativo (`tw-animate-css`)
- **Ícones:** Lucide React
- **Fontes:** Fontsource (Montserrat, Noto Serif, Playfair Display, Plus Jakarta Sans)

## 2. Gerenciamento de Estado/Dados
- Estado local gerenciado com Hooks nativos do React (`useState`, `useEffect`).
- Formulários com submissões via rotas de API (`/api/meta-conversions`) e Webhooks (`n8n`).
- Tracking de conversões via `window.fbq`, `window.gtag` e `window.dataLayer`.

## 3. Estilo/UI e Padrões
- As páginas seguem as diretrizes definidas no `design-system.html`.
- Cores principais: Background Dark (`#021526`), Gold (`#C49A5A`), Yellow (`#E7AA1B`).
- Responsividade priorizada (Mobile-first).
- Uso extensivo de gradientes e efeitos de "glow" para estética premium.

## 4. Integrações
- Webhooks n8n para captura de leads (`/webhook/webnario`, `/webhook/site`).
- Meta Conversions API (Server-side tracking).
- Google Analytics e Meta Pixel (Client-side).

## 5. Padrões de Arquitetura
- Separação clara de componentes UI na pasta `/components`.
- Rotas estruturadas na pasta `/app` (ex: `/aula-usinagem`, `/aula-usinagem-2`).
- Server Components por padrão, usando `use client` estritamente quando interação é necessária (ex: modais, formulários).

## 6. Políticas de Segurança e Compliance
- Submissão de dados pessoais via POST para webhooks seguros.
- Tratamento de erros e fallbacks (`try...catch`) para garantir a navegação mesmo com falhas de scripts de terceiros.
- Validação de inputs (tamanho, formato) no frontend com feedback visual ao usuário, evitando "dead clicks".
