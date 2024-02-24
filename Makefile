NEXT_COMPOSE_YML := docker-compose.dev.yml
NEXT_DC := docker compose -f $(NEXT_COMPOSE_YML)
NEXT_SERVICE := nextjs-todo-app

next-build:
	mkdir -p node_modules
	$(NEXT_DC) build

next-up:
	$(NEXT_DC) up -d $(NEXT_SERVICE)

next-down:
	$(NEXT_DC) down --remove-orphans

next-down-v:
	$(NEXT_DC) down --remove-orphans --volumes

next-logs:
	$(NEXT_DC) logs -f $(NEXT_SERVICE)

next-sh:
	$(NEXT_DC) exec $(NEXT_SERVICE) sh

next-npm-install:
	$(NEXT_DC) run --rm $(NEXT_SERVICE) npm install

next-init:
	@make next-down-v
	@make next-build
	@make next-npm-install
	@make next-up

init:
	@make next-init
	@make next-logs

down-v:
	@make next-down-v
