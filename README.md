# I did it reddit Discord Bot


## Run the production Environement
```bash
docker-compose -f docker.compose.yml 
```
## Run the dev Environement
You will need [Docker](https://www.docker.com/get-started) and [docker-compose](https://docs.docker.com/compose/install/) install on your machine.This is will install for you the tested version of node we use for this project , all the dependancies and also a mongoDB database.

Execute the following commands in repo root.
```bash
docker-compose -f docker.compose.yml \
			   -f docker.compose.dev.yml

```
## Rebuild the dockerfile

To rebuild the docker file simply do
```bash
docker-compose build
```

## Connecting to the data Base with an mongo client.

You can only connect to the database when you're using the dev environment.There is no user or password.You can use the following connection string to connect.
```
mongodb://localhost:27017/
```

## Environement variables
Environement variables can be pass 
to the containers by creating a .env
in the project root. For more information 
please check the [Docker documentation](https://docs.docker.com/compose/environment-variables/).


