FROM mcr.microsoft.com/playwright:v1.41.2-focal

USER pwuser

WORKDIR /app
COPY ./package.json ./

ENTRYPOINT ["/app/docker/playwright/entrypoint.sh"]
