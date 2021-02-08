


```bash
# list all system-wide containers
docker ps -a

# lsit all containers for the current docker-compose.yml project
docker-compose ps -a

# start a service listed in docker-compose.yml in the background
docker-compose up -d <service_name>

# execute a command in an running container
docker-compose exec <service_name> <command>
docker-compose exec <service_name> /bin/bash
docker-compose exec <service_name> bash

# stop a service listed in docker-compose.yml
docker-compose stop <service_name>

# deconstruct a service (stop and delete the container) listed in docker-compose.yml
docker-compose down <service_name>
```