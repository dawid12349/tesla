#!/bin/bash

cd ./backend

#first use only
docker build -t tesla-back --rm .
docker run -p 3001:3000 -d --rm tesla-back

cd ../frontend

#first use only
docker build -t tesla-front --rm .
docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm tesla-front

#front working on 4201, back on 3001, but communication between containers is 3000-4200
