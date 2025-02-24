FROM denoland/deno:2.0.1

WORKDIR /app

COPY deno.json .

RUN deno install

COPY . .
RUN deno cache main.ts

ARG PORT=8000
EXPOSE $PORT

CMD ["task", "start"]