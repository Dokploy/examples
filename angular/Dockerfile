# Stage 1: Build Angular app
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies with cache mount
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Copy rest of the application
COPY . .

# Build Angular app
RUN pnpm run build

# Stage 2: Serve with NGINX
FROM nginx:1.25-alpine

# Copy built Angular app to NGINX HTML folder
COPY --from=builder /app/dist/browser/ /usr/share/nginx/html

# Remove default NGINX config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom NGINX config for SPA routing
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
