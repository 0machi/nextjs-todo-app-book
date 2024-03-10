FROM mcr.microsoft.com/playwright:v1.41.2-focal

RUN apt-get update && apt-get -y install x11vnc websockify novnc

USER pwuser

WORKDIR /app
COPY ./package.json ./

ENTRYPOINT ["/app/docker/playwright/entrypoint.sh"]
