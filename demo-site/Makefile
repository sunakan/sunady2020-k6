export DOCKER_GO_TAG=1.13-buster
export MY_NETWORK=my-network

demo: shared-network
	docker run \
    --rm \
    --interactive \
    --tty \
    --mount type=bind,source=${PWD},target=/app \
    --workdir /app \
    --publish 8080:8080 \
    --name web \
    --net ${MY_NETWORK} \
    golang:${DOCKER_GO_TAG} \
    go run main.go

shared-network:
	docker network ls | grep ${MY_NETWORK} || docker network create ${MY_NETWORK}
