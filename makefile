CONTAINER_NAME=react-base

# build image
build:
	docker build -t $(CONTAINER_NAME) -f $(CONTAINER_NAME) --file ./docker/dev/Dockerfile .
build-prod:
	docker build -t $(CONTAINER_NAME)-prod -f $(CONTAINER_NAME)-prod --file ./docker/prod/Dockerfile .

# build and run container
up:
	docker-compose up -d

up-prod:
	docker-compose -f docker-compose.prod.yml up -d

# stop container
down:
	docker-compose kill
	docker-compose rm -f

down-prod:
	docker stop $(CONTAINER_NAME)-prod

# enter in container's shell
sh:
	docker exec -it $(CONTAINER_NAME) sh

# list containers
ps:
	docker-compose ps

# package scripts
lint:
	docker-compose run --rm $(CONTAINER_NAME) yarn lint
lint-fix:
	docker-compose run --rm $(CONTAINER_NAME) yarn lint:fix
test:
	docker-compose run --rm $(CONTAINER_NAME) yarn test
test-watch:
	docker-compose run --rm $(CONTAINER_NAME) yarn test:watch
test-coverage:
	docker-compose run --rm $(CONTAINER_NAME) yarn test:coverage
test-coverage-watch:
	docker-compose run --rm $(CONTAINER_NAME) yarn test:coverage:watch