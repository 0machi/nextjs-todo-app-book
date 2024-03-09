FROM mcr.microsoft.com/playwright:focal

USER pwuser

WORKDIR /app
COPY ./package.json ./

ENTRYPOINT ["/app/docker/playwright/entrypoint.sh"]
