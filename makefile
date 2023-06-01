CONTAINER_NAME=react-base

# build image
build:
	docker build -t react-base .

# build and run container
up:
	docker-compose up -d

# stop container
down:
	docker-compose kill
	docker-compose rm -f

# enter in container's shell
sh:
	docker exec -it react-base sh

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