"""Application routes."""
import os
import sys
import re
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from app.models import Actor, Movie, ActorsInMovies
from . import api
from ..auth.auth import requires_auth, AuthError


@api.after_request
def after_request(response):
    response.headers.add(
        "Access-Control-Allow-Headers", "Content-Type,Authorization,true"
    )
    response.headers.add(
        "Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE,OPTIONS"
    )
    response.headers.add("Content-Type", "application/json")
    return response


@api.route("/actors", methods=["GET"])
def get_actors():

    data = []
    all_actors = Actor.query.all()
    if all_actors is None:
        abort(404)

    try:
        for actor in all_actors:
            actor = {
                "id": actor.id,
                "first_name": actor.first_name,
                "last_name": actor.last_name,
                "age": actor.age,
                "gender": actor.gender,
                "image_link": actor.image_link,
                "seeking_role": actor.seeking_role,
            }
            data.append(actor)

        return jsonify({"success": True, "actors": data})

    except:
        abort(422)


@api.route("/actors/<int:actor_id>", methods=["GET"])
def get_actor_by_id(actor_id):
    try:
        actor = Actor.query.get(actor_id)
    except:
        abort(404)

    movies_data = []
    try:
        for movie in actor.movies:
            movie = {
                "id": movie.id,
                "title": movie.title,
                "genre": movie.genre,
                "release_date": movie.release_date,
                "poster": movie.poster,
                "seeking_talent": movie.seeking_talent
            }
            movies_data.append(movie)

        data = {
            "id": actor.id,
            "first_name": actor.first_name,
            "last_name": actor.last_name,
            "age": actor.age,
            "gender": actor.gender,
            "image_link": actor.image_link,
            "seeking_role": actor.seeking_role,
            "movies": movies_data
        }

        return jsonify({"success": True, "actor": data})

    except:
        abort(404)


@api.route("/actors", methods=["POST"])
@requires_auth('add:actor')
def add_actor(jwt):
    body = request.get_json()

    try:
        first_name = body.get("first_name", None)
        last_name = body.get("last_name", None)
        age = body.get("age", None)
        gender = body.get("gender", None)
        image_link = body.get("image_link", None)
        seeking_role = body.get("seeking_role", None)
        movies = body.get("movies", None)
        movie_ids = movies['movie_ids']
        actor_movies = Movie.query.filter(Movie.id.in_(movie_ids)).all()

        actor = Actor(
            first_name=first_name,
            last_name=last_name,
            age=age,
            gender=gender,
            image_link=image_link,
            seeking_role=seeking_role,
            movies=actor_movies
        )

        actor.insert()

        return jsonify({"success": True, "added_actor": actor.id})

    except:
        abort(422)


@api.route("/actors/<int:actor_id>", methods=["PATCH"])
@requires_auth('update:actor')
def edit_actor(jwt, actor_id):
    body = request.get_json()
    try:
        actor = Actor.query.get(actor_id)
    except:
        abort(404)
    try:
        actor.first_name = body.get("first_name", None)
        actor.last_name = body.get("last_name", None)
        actor.age = body.get("age", None)
        actor.gender = body.get("gender", None)
        actor.image_link = body.get("image_link", None)
        actor.seeking_role = body.get("seeking_role", None)

        movie_ids = body.get("movies")['movie_ids']
        actor_movies = Movie.query.filter(Movie.id.in_(movie_ids)).all()
        actor.movies = actor_movies

        actor.update()
        return jsonify({"success": True, "updated_actor": actor.id})
    except:
        abort(422)


@api.route("/actors/<int:actor_id>", methods=["DELETE"])
@requires_auth('delete:actor')
def delete_actor(jwt, actor_id):

    try:
        actor = Actor.query.get(actor_id)
    except:
        abort(404)

    try:
        actor.delete()
        return jsonify({"success": True})

    except:
        abort(500)


@api.route("/movies", methods=["GET"])
def get_movies():

    data = []
    all_movies = Movie.query.all()

    try:
        for movie in all_movies:
            actors_data = []
            for actor in movie.actors:
                actor = {
                    "id": actor.id,
                    "first_name": actor.first_name,
                    "last_name": actor.last_name,
                }
                actors_data.append(actor)

            movie = {
                "id": movie.id,
                "title": movie.title,
                "genre": movie.genre,
                "release_date": movie.release_date,
                "poster": movie.poster,
                "seeking_talent": movie.seeking_talent,
                "actors": actors_data
            }
            data.append(movie)

        if len(data) == 0:
            abort(404)

        return jsonify({"success": True, "movies": data})

    except:
        abort(422)


@api.route("/movies/<int:movie_id>", methods=["GET"])
def get_movie_by_id(movie_id):
    try:
        movie = Movie.query.get(movie_id)
    except:
        abort(404)

    actors_data = []
    try:
        for actor in movie.actors:
            actor = {
                "id": actor.id,
                "first_name": actor.first_name,
                "last_name": actor.last_name,
                "age": actor.age,
                "gender": actor.gender,
                "image_link": actor.image_link,
                "seeking_role": actor.seeking_role
            }
            actors_data.append(actor)

        data = {
            "id": movie.id,
            "title": movie.title,
            "genre": movie.genre,
            "release_date": movie.release_date,
            "poster": movie.poster,
            "seeking_talent": movie.seeking_talent,
            "actors": actors_data
        }

        return jsonify({"success": True, "movie": data})

    except:
        abort(404)


@api.route("/movies", methods=["POST"])
@requires_auth('add:movie')
def add_movie(jwt):
    body = request.get_json()
    try:
        title = body.get("title", None)
        genre = body.get("genre", None)
        release_date = body.get("release_date", None)
        poster = body.get("poster", None)
        seeking_talent = body.get("seeking_talent", None)
        actors = body.get("actors", None)
        actor_ids = actors['actor_ids']
        movie_actors = Actor.query.filter(Actor.id.in_(actor_ids)).all()

        movie = Movie(
            title=title,
            genre=genre,
            release_date=release_date,
            poster=poster,
            seeking_talent=seeking_talent,
            actors=movie_actors
        )

        movie.insert()
        return jsonify({"success": True, "added_movie": movie.id})
    except:
        abort(422)


@api.route("/movies/<int:movie_id>", methods=["PATCH"])
@requires_auth('update:movie')
def edit_movie(jwt, movie_id):
    body = request.get_json()
    try:
        movie = Movie.query.get(movie_id)
    except:
        abort(404)
    try:
        movie.title = body.get("title")
        movie.genre = body.get("genre")
        movie.release_date = body.get("release_date")
        movie.poster = body.get("poster")
        movie.seeking_talent = body.get("seeking_talent")

        actor_ids = body.get("actors")['actor_ids']
        movie_actors = Actor.query.filter(Actor.id.in_(actor_ids)).all()
        movie.actors = movie_actors

        movie.update()
        return jsonify({"success": True, "updated_movie": movie.id})
    except:
        abort(422)


@api.route("/movies/<int:movie_id>", methods=["DELETE"])
@requires_auth('delete:movie')
def delete_movie(jwt, movie_id):

    try:
        movie = Movie.query.get(movie_id)
    except:
        abort(404)

    try:
        movie.delete()
        return jsonify({"success": True})
    except:
        abort(500)


"""Error handlers."""


@api.errorhandler(400)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 400,
        "message": "Bad Request"
    }), 400


@api.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "Not Found"
    }), 404


@api.errorhandler(422)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 422,
        "message": "Unprocessable Entity"
    }), 422


@api.errorhandler(405)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 405,
        "message": "Method Not Allowed"
    }), 405


@api.errorhandler(500)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 500,
        "message": "Internal Server Error"
    }), 500


@api.errorhandler(AuthError)
def authError(error):
    return jsonify({
        "success": False,
        "error": error.status_code,
        "message": error.error['description']
    }), error.status_code
