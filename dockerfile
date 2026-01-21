# Base Node
FROM node:24

WORKDIR /app

# Copia todos os arquivos do workspace primeiro (package.json + código)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
COPY packages ./packages

# Instala pnpm e tsx globalmente
RUN corepack enable \
 && corepack prepare pnpm@10.26.1 --activate

# Instala todas as deps do workspace já com os links internos corretos
RUN pnpm install --frozen-lockfile

# Gera Prisma Client para Linux
RUN pnpm --filter service prisma generate -- --binary-targets native,debian-openssl-3.0.x

EXPOSE 3000

# Rodar serviço
CMD ["pnpm", "--filter", "service", "dev"]
