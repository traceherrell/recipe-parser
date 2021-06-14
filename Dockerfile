FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]

# docker buildx create --name ci-builder --driver-opt network=host --use --buildkitd-flags '--allow-insecure-entitlement security.insecure'
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t localhost:5000/recipe-parser:latest --push .