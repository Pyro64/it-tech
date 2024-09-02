FROM node:20.11.1 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx nuxi cleanup
COPY . .
RUN npx nuxi build

FROM gcr.io/distroless/nodejs:18 as prod
COPY --from=build /app/.output ./.output
EXPOSE 3000
ENTRYPOINT [ "/nodejs/bin/node", ".output/server/index.mjs" ]