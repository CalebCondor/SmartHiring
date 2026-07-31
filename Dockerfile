# syntax=docker/dockerfile:1.7

# ============================================
# Stage 1: Install dependencies (Bun)
# ============================================
FROM oven/bun:alpine AS deps
WORKDIR /app

# Copy lockfile and package.json first for better layer caching
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# ============================================
# Stage 2: Build the Next.js app
# ============================================
FROM oven/bun:alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

# ============================================
# Stage 3: Production runtime
# ============================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Copy the standalone build output and public assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
