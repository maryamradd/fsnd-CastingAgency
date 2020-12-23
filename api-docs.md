# Casting Agency API

## TOC

- [TOC](#toc)
- [API Reference](#api-reference)
  - [Setup](#setup)
  - [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [GET /actors](#get--actors)
  - [GET /movies](#get--movies)
  - [GET /actors/<int:actor_id>](#get--actors--int-actor-id-)
  - [GET /movies/<int:movie_id>](#get--movies--int-movie-id-)
  - [POST /actors](#post--actors)
  - [POST /movies](#post--movies)
  - [DELETE /actors/<int:actor_id>](#delete--actors--int-actor-id-)
  - [DELETE /movies/<int:movie_id>](#delete--movies--int-movie-id-)
  - [PATCH /actors/<int:actor_id>](#patch--actors--int-actor-id-)
  - [PATCH /movies/<int:movie_id>](#patch--movies--int-movie-id-)
  - [GET /role](#get--role)
- [Error Handling](#error-handling)
- [Testing](#testing)

## API Reference

### Setup

_Base URL_: the api is hosted on heroku at https://cast1ng-agency.herokuapp.com/api

### Authentication

the app implements RBAC, most of the API endpoints require authentication by passing a jwt token.
`Authorization: Bearer *token*`

the auth token contains an array of user permissions based on their role:

Example token of Executive Producer role:

```
{
  "iss": ".......",
  "sub": "auth0|1234",
  "iat": 1608575387,
  "exp": 1609761930,
  "azp": "...........",
  "permissions": [
    "add:actor",
    "add:movie",
    "delete:actor",
    "delete:movie",
    "update:actor",
    "update:movie"
  ]
}
```

## Endpoints

### GET /actors

- returns the list of actors stored in the database

Parameters: none.

Authentication: not required.

Example: `curl https://cast1ng-agency.herokuapp.com/api/actors`

Response:

```
{
    "actors": [
        {
            "age": 21,
            "first_name": "Maneki",
            "last_name": "Neko",
            "gender": "Male",
            "id": 15,
            "image_link": ".........",
            "seeking_role": false
        },
        {
            .......
        }
    ],
    "success": true
}
```

### GET /movies

- returns the list of movies stored in the database

Parameters: none.

Authentication: not required.

Example: `curl https://cast1ng-agency.herokuapp.com/api/movies`

Response:

```
{
    "movies": [
        {
            "title": "Setting Sun",
            "genre": "Action",
            "id": 12,
            "poster": ".........",
            "release_date": "Wed, 05 Apr 2023",
            "seeking_talent": true,
        },
        {
                .......
        }
    ],
    "success": true
}
```

### GET /actors/<int:actor_id>

- returns the details of the actor by id

Parameters: actor_id: a required url path parameter for specifing the id of the actor, id should be an integer

Authentication: not required.

Example: `curl https://cast1ng-agency.herokuapp.com/api/actors/14`

Response:

```
{
    "actor": {
        "age": 8,
        "first_name": "Dina",
        "gender": "Female",
        "id": 14,
        "image_link": ".......",
        "last_name": "Gangrene",
        "seeking_role": true,
        "movies": [
            {
                        ......
            }
        ],
    },
    "success": true
}
```

### GET /movies/<int:movie_id>

- returns the details of the movie by id

Parameters: movie_id: a required url path parameter for specifing the id of the movie, id should be an integer

Authentication: not required.

Example: `curl https://cast1ng-agency.herokuapp.com/api/movies/12`

Response:

```
{
    "movie": {
        "title": "Setting Sun",
        "genre": "Action",
        "id": 12,
        "poster": ".........",
        "release_date": "Wed, 05 Apr 2023",
        "seeking_talent": true,
        "actors": [
            {
                        ......
            }
        ],
    },
    "success": true
}
```

### POST /actors

- add a new actor to the database

Request body: a json object with the actor details

Authentication: requires authentication token with permissoin "add:actor".

### POST /movies

- add a new movie to the database

Request body: a json object with the movie details

Authentication: requires authentication token with permissoin "add:movie".

### DELETE /actors/<int:actor_id>

Parameters: actor_id: a required url path parameter for specifing the id of the actor, id should be an integer

Authentication: requires authentication token with permissoin "delete:actor".

### DELETE /movies/<int:movie_id>

Parameters: movie_id: a required url path parameter for specifing the id of the movie, id should be an integer

Authentication: requires authentication token with permissoin "delete:movie".

### PATCH /actors/<int:actor_id>

- updates the details of an actor

Request body: a json object with the actor details

Parameters: actor_id: a required url path parameter for specifing the id of the actor, id should be an integer

Authentication: requires authentication token with permissoin "update:actor".

### PATCH /movies/<int:movie_id>

- updates the details of a movie

Request body: a json object with the movie details

Parameters: movie_id: a required url path parameter for specifing the id of the movie, id should be an integer

Authentication: requires authentication token with permissoin "update:movie".

### GET /role

- returns the role of the user based on the permissions in the token

Authentication: requires an authentication token with user permissoins array.

Example response:

```
{
    "role": "Casting Director",
    "success": true
}
```

## Error Handling

Errors are returned as json objects in the following format:

The error types that the API returns:

- 400: `Bad Request`
- 404: `Not Found`
- 422: `Unprocessable Entity`
- 405: `Method Not Allowed`
- 500: `Internal Server Error`

Authentication errors:

- 400: `Invalid claims`
- 401: `Authorization header missing`
- 401: `Invalid header`
- 401: `Token expired`
- 403: `Unauthorized`

Example response:

```
{
    "error": 404,
    "message": "Not Found",
    "success": false
}
```

## Testing

to test the api endpoints:

- download the collection `CastingAgency.postman_collection.json`
- import it into [postman](https://www.postman.com/).
- update the TOKEN enviroment variable with a valid token if neccesary.
- run the tests using the collection runner.
