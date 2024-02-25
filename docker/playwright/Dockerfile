FROM mcr.microsoft.com/playwright:focal

RUN apt-get update && apt-get -y install x11vnc websockify novnc

USER pwuser

WORKDIR /app
COPY ./package.json ./

ENTRYPOINT ["/app/docker/playwright/entrypoint.sh"]
