ARG HTTP_PROXY
ARG HTTPS_PROXY
# Base Node
FROM node:24

WORKDIR /app

# Copia todos os arquivos do workspace primeiro (package.json + código)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps ./apps
COPY packages ./packages

# Instala pnpm e tsx globalmente
RUN npm install -g pnpm


# Instala todas as deps do workspace já com os links internos corretos
RUN pnpm install --frozen-lockfile

# Compila o pacote compartilhado (@venC/packages)
RUN pnpm --filter @venC/packages build

# Gera Prisma Client para Linux
RUN pnpm --filter service exec prisma generate --schema=prisma/schema

EXPOSE 3000

# Rodar serviço
CMD ["pnpm", "--filter", "service", "dev"]
