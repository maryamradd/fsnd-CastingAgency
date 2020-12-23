# Casting Agency

### [Live Demo](https://cast1ng-agency.herokuapp.com)

Udacity fullstack nanodegree project, The Casting Agency app models a company that is responsible for creating movies and managing and assigning actors to those movies.
The app has 3 types of users:

- Casting Assistant
  - can only view actors and movies
- Casting Director
  - can add or delete an actor from the database
  - can modify actors or movies
- Executive Producer
  - all permissions a Casting Director has and…
  - add or delete a movie from the database

to meet these requirements, the app implements [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control) with the help of [Auth0](https://auth0.com/).

## About the Stack

The [backend](./app) consists of a REST API on a Flask server, backed with a Postgres database. to know more about the API check [api-docs](./api-docs.md).

The [frontend](./frontend) is built with React to consume the data from the Flask server through the API.

### Installation and Usage

this project is deployed on heroku, live here: [Casting Agency](https://cast1ng-agency.herokuapp.com).

however if you want to clone and run locally, the project uses [python3](https://www.python.org/downloads/), [pip](https://pypi.org/project/pip/), [node](https://nodejs.org/) and [npm](https://www.npmjs.com/) so make sure they are installed before proceeding.

#### backend

- after cloning the repo replace the values in `.env.example` with your values and rename the file to `.env`
- install the requirments and start the server:

```sh
$ pip3 install -r requirements.txt
$ flask run
```

#### frontend

for running the fronend check [README.md](./frontend/README.md)

####

> _images currently in the app are from [unsplash](https://unsplash.com/)_
