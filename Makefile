NEXT_COMPOSE_YML := docker-compose.dev.yml
NEXT_DC := docker compose -f $(NEXT_COMPOSE_YML)
NEXT_SERVICE := nextjs-todo-app

SUPABASE_COMPOSE_YML := ./supabase/docker/docker-compose.yml
SUPABASE_DC := docker compose -f $(SUPABASE_COMPOSE_YML)

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

supabase-build:
	cp ./supabase/docker/.env.example ./supabase/docker/.env
	mkdir -p ./supabase/docker/volumes/db/data/
	$(SUPABASE_DC) build

supabase-up:
	$(SUPABASE_DC) up -d

supabase-down:
	$(SUPABASE_DC) down --remove-orphans

supabase-down-v:
	$(SUPABASE_DC) down --remove-orphans --volumes
	sudo rm -rf ./supabase/docker/volumes/db/data/

supabase-restart:
	$(SUPABASE_DC) restart

supabase-stop:
	$(SUPABASE_DC) stop

supabase-init:
	@make supabase-down-v
	@make supabase-build
	@make supabase-up

migrate:
	$(NEXT_DC) exec $(NEXT_SERVICE) npm run db:push

init:
	@make supabase-init
	@make next-init
	@make migrate
	@make next-logs

down-v:
	@make supabase-down-v
	@make next-down-v
