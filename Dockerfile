# Stage 1: Install dependencies
FROM node:22-slim AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM node:22-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Recebe os build-args do Easypanel
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

# Define como variáveis de ambiente para o build do Next.js
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

# Desabilita o envio de telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1

# Aumenta o limite de memória para o build se necessário
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Garante que a pasta public existe (mesmo que vazia) para evitar erro no COPY
RUN mkdir -p public

RUN npm run build

# Stage 3: Production runner
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

# Cria a pasta public no runner e copia apenas se houver conteúdo no builder
RUN mkdir -p public
COPY --from=builder /app/public ./public

# Otimiza o tamanho da imagem usando o output 'standalone' do Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]



