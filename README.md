# **Plants PSQL API**

A node express postgresql typescript project made for learning/practicing purposes.

## **Description**

A node express postgresql typescript project made for learning/practicing purposes. Project revolves around plants and has all the basic CRUD operations using the pg client. Also documented with Swagger.

## **Getting Started**

### _Dependencies_

- Git installed on your machine
- Docker installed on your machine(optional)
- A Postgres DB(cloud, local, container)
- Check package.json for other details

### _Installing_

- Clone the repo from Github then run "npm install:

```
git clone https://github.com/axense234/Plants-PSQL-API.git
cd Plants-PSQL-API
npm install
```

- also rename **.env.sample** to **.env** and place your own environment variables:
  - **PGUSER** = the user of your postgres db
  - **PGPASSWORD** = the password of the user of your postgres db
  - **PGDATABASE** = the database you want to connect to on your postgres db
  - **PGHOST** = the host of your postgresdb
  - **PGPORT** = the port of your postgresdb
  - **PORT** = the port which your server listens on
  - **PGURI** = the connection string of your postgres db(made out of other pg env variables)

### _Executing program_

- Test the app using nodemon

```
npm run dev
```

- Test using docker-compose

```
docker build -t plants-psql-api .
docker compose up
```

## **Authors**

- axense234

## **Version History**

- 1.0.1
  - Upgraded the errorHandler middleware, added swagger docs, added a proper README.md and LICENSE.md.
  - See [commit change](https://github.com/axense234/Plants-PSQL-API/commits/master) or See [release history](https://github.com/axense234/Plants-PSQL-API/releases)
- 1.0.0
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details
