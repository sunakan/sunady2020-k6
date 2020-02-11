export DOCKER_GO_TAG=1.13-buster
export DOCKER_K6_TAG=0.26.0
export MY_NETWORK=my-network

ash: shared-network
	docker run \
    --rm \
    --interactive \
    --tty \
    --mount type=bind,source=${PWD}/script.js,target=/k6/script.js \
    --workdir /k6 \
    --entrypoint "" \
    --name k6 \
    --net ${MY_NETWORK} \
    loadimpact/k6:${DOCKER_K6_TAG} \
    ash

web: shared-network
	docker run \
    --rm \
    --interactive \
    --tty \
    --mount type=bind,source=${PWD}/demo-site.go,target=/demo-site/demo-site.go \
    --workdir /demo-site \
    --publish 8080:8080 \
    --name demo-site \
    --net ${MY_NETWORK} \
    golang:${DOCKER_GO_TAG} \
    go run demo-site.go

shared-network:
	docker network ls | grep ${MY_NETWORK} || docker network create ${MY_NETWORK}
