# **Plants PSQL API**

A node express postgresql typescript project made for learning/practicing purposes.

## **Description**

A node express postgresql typescript project made for learning/practicing purposes.Project revolves around plants and has all the basic CRUD operations using the pg client.Also documented with swagger.

## **Getting Started**

### _Dependencies_

- check package.json for dependencies
- you want also want a postgresql URI to place in .env.sample, either a local or production one

### _Installing_

- install via **git** by pasting:

```
git clone https://github.com/axense234/Plants-PSQL-API.git
```

- install **dependencies** from package.json:

```
cd Plants-PSQL-API
npm install
```

- also rename **.env.sample** to **.env** and place your coresponding environment variables:
  - **PGURI** = the URI/URL of your postgresql instance

### _Executing program_

- run the program using nodemon

```
npm run dev
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
