#!/bin/bash

cd ./backend

#first use only
#docker build -t tesla-back --rm .
docker run -p 3000:3000 -d --rm tesla-back

cd ../frontend

#first use only
#docker build -t tesla-front --rm .
docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm tesla-front

#front working on 4200, back on 3000
