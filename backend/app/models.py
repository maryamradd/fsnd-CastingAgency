"""Data models."""
from . import db

"""
Actor

"""


class Actor(db.Model):
    __tablename__ = "Actors"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    age = db.Column(db.Integer)
    gender = db.Column(db.String)
    image_link = db.Column(db.String)
    seeking_role = db.Column(db.Boolean)
    movies = db.relationship(
        "Movie", cascade="all,delete", secondary="actors_in_movies")

    def __init__(self, name, age, gender, image_link, seeking_role, movies):
        self.name = name
        self.age = age
        self.gender = gender
        self.image_link = image_link
        self.seeking_role = seeking_role
        self.movies = movies

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "image_link": self.image_link,
            "seeking_role": self.seeking_role,
            "movies": self.movies
        }


"""
Movie

"""


class Movie(db.Model):
    __tablename__ = "Movies"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    genre = db.Column(db.String)
    release_date = db.Column(db.Date)
    poster = db.Column(db.String)
    seeking_talent = db.Column(db.Boolean)
    actors = db.relationship(
        "Actor", cascade="all,delete",  secondary="actors_in_movies")

    def __init__(self, title, genre, release_date, poster, seeking_talent, actors):
        self.title = title
        self.genre = genre
        self.release_date = release_date
        self.poster = poster
        self.seeking_talent = seeking_talent
        self.actors = actors

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            "id": self.id,
            "title": self.title,
            "genre": self.genre,
            "release_date": self.release_date,
            "poster": self.poster,
            "seeking_talent": self.seeking_talent,
            "actors": self.actors
        }


class ActorsInMovies(db.Model):
    __tablename__ = "actors_in_movies"

    id = db.Column(db.Integer, primary_key=True)
    actor_id = db.Column(db.Integer, db.ForeignKey(
        "Actors.id"))
    movie_id = db.Column(db.Integer, db.ForeignKey(
        "Movies.id"))

    def __init__(self, actor_id, movie_id):
        self.actor_id = actor_id
        self.movie_id = movie_id

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
