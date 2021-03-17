#!/bin/bash

docker run --name my-redis \
    -p 6379:6379 \
    --network redis-net \
    -v /Users/ryong/docker_redis \
    -d redis:alpine redis-server --appendonly yes
