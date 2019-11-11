#!/bin/bash

echo Cleaning containers; echo
docker ps -aq | xargs -r docker rm -f
echo

echo Cleaning volumes; echo
docker volume ls -q | xargs -r docker volume rm
echo

echo Cleaning networks; echo
docker network ls -q | xargs docker network rm 2> /dev/null
echo

if [ "$1" == "images" ]; then
  echo Cleaning images; echo
  docker images -q | xargs -r docker rmi -f
  echo
fi

echo Finished
