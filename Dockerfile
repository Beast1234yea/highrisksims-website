# Build stage - clone with LFS to get actual video/model files
FROM node:20-alpine AS build
RUN apk add --no-cache git git-lfs
WORKDIR /app

# Clone repo with LFS files (ARG busts Docker cache on each deploy)
ARG CACHEBUST=1
RUN git lfs install
RUN git clone https://github.com/Beast1234yea/highrisksims-website.git .
RUN git lfs pull

# Copy local files over clone (picks up latest changes from build context)
COPY . .

# Build the app
RUN npm ci
RUN npm run build

# Production stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
