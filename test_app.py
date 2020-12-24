from os import environ
import json
import unittest
from flask_sqlalchemy import SQLAlchemy
from app import create_app, db
from app.models import Actor, Movie, ActorsInMovies


class CastingAgencyTestCase(unittest.TestCase):

    producer_token = "Bearer " + environ.get('PRODUCER_TOKEN')
    director_token = "Bearer " + environ.get('DIRECTOR_TOKEN')
    actor_id = ''
    movie_id = ''

    def setUp(self):
        self.app = create_app("testing")
        self.app_context = self.app.app_context()

        self.app_context.push()
        with self.app.test_client():
            self.client = self.app.test_client()

    def tearDown(self):
        self.app_context.pop()

    def test_00_get_actors(self):
        """
        tests getting all actors
        """

        response = self.client.get("/api/actors")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn("actors", data)

    def test_02_fail_get_actors(self):
        """
        tests getting all actors with wrong url
        """

        response = self.client.get("/api/v1/actors")
        self.assertEqual(
            response.headers['Content-Type'], 'text/html; charset=utf-8')

    def test_03_get_movies(self):
        """
        tests getting all movies
        """

        response = self.client.get("/api/movies")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn("movies", data)

    def test_04_fail_get_movies(self):
        """
        tests getting all movies with wrong url
        """

        response = self.client.get("/api/v1/movies")
        self.assertEqual(
            response.headers['Content-Type'], 'text/html; charset=utf-8')

    def test_05_get_actor_by_id(self):
        """
        tests getting actor by id
        """

        response = self.client.get("/api/actors/14")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn("actor", data)

    def test_06_fail_get_actor_by_id(self):
        """
        tests getting actor by invalid id
        """

        response = self.client.get("/api/actors/900000")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 404)
        self.assertEqual(data['success'], False)

    def test_07_get_movie_by_id(self):
        """
        tests getting movie by id
        """

        response = self.client.get("/api/movies/12")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn("movie", data)

    def test_08_fail_get_movie_by_id(self):
        """
        tests getting movie by invalid id
        """

        response = self.client.get("/api/movies/900000")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 404)
        self.assertEqual(data['success'], False)

    def test_09_add_actor(self):
        """
        tests adding a new actor
        """

        response = self.client.post(
            "/api/actors",
            headers={'Authorization': self.director_token},
            json={
                "first_name": "test",
                "last_name": "QA",
                "age": 21,
                "gender": "Male",
                "image_link": "https://",
                "seeking_role": True,
                "movies": {
                    "movie_ids": [9]
                }
            }
        )
        data = json.loads(response.data)
        CastingAgencyTestCase.actor_id = data['added_actor']

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn('added_actor', data)

    def test_10_fail_add_actor(self):
        """
        tests adding a new actor without autherization headers
        """

        response = self.client.post(
            "/api/actors",
            headers={},
            json={
                "first_name": "test",
                "last_name": "QA",
                "age": 21,
                "gender": "Male",
                "image_link": "https://",
                "seeking_role": True,
                "movies": {
                    "movie_ids": [9]
                }
            }
        )
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 401)
        self.assertEqual(data['success'], False)

    def test_11_add_movie(self):
        """
        tests adding a new movie
        """

        response = self.client.post(
            "/api/movies",
            headers={'Authorization': self.producer_token},
            json={
                "title": "test",
                "genre": "Horror",
                "poster": "https://",
                "release_date": "2022-03-14",
                "seeking_talent": False,
                "actors": {
                    "actor_ids": [
                        14
                    ]
                }
            }
        )
        data = json.loads(response.data)
        CastingAgencyTestCase.movie_id = data['added_movie']

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn('added_movie', data)

    def test_12_fail_add_movie(self):
        """
        tests adding a new movie without correct permissions
        """

        response = self.client.post(
            "/api/movies",
            headers={},
            json={
                "title": "test",
                "genre": "Horror",
                "poster": "https://",
                "release_date": "2022-03-14",
                "seeking_talent": False,
                "actors": {
                    "actor_ids": [
                        14
                    ]
                }
            }
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 401)
        self.assertEqual(data['success'], False)

    def test_13_update_actor(self):
        """
        tests updating actor details
        """

        response = self.client.patch(
            "/api/actors/" + str(self.actor_id),
            headers={'Authorization': self.director_token},
            json={
                "first_name": "test_UPDATED",
                "last_name": "QA",
                "age": 21,
                "gender": "Male",
                "image_link": "https://",
                "seeking_role": True,
                "movies": {
                    "movie_ids": [9]
                }
            }
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn("updated_actor", data)

    def test_14_fail_update_actor(self):
        """
        tests updating actor details
        """

        response = self.client.patch(
            "/api/actors/999999",
            headers={'Authorization': self.director_token},
            json={
                "first_name": "test_UPDATED",
                "last_name": "QA",
                "age": 21,
                "gender": "Male",
                "image_link": "https://",
                "seeking_role": True,
                "movies": {
                    "movie_ids": [9]
                }
            }
        )
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 404)
        self.assertEqual(data['success'], False)

    def test_15_update_movie(self):
        """
        tests updating movie details
        """

        response = self.client.patch(
            "/api/movies/" + str(self.movie_id),
            headers={'Authorization': self.director_token},
            json={
                "title": "test_UPDATED",
                "genre": "Horror",
                "poster": "https://",
                "release_date": "2022-03-14",
                "seeking_talent": False,
                "actors": {
                    "actor_ids": [
                        1
                    ]
                }
            }
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertIn("updated_movie", data)

    def test_16_fail_update_movie(self):
        """
        tests updating movie details
        """

        response = self.client.patch(
            "/api/movies/999999",
            headers={'Authorization': self.director_token},
            json={
                "title": "test_UPDATED",
                "genre": "Horror",
                "poster": "https://",
                "release_date": "2022-03-14",
                "seeking_talent": False,
                "actors": {
                    "actor_ids": [
                        1
                    ]
                }
            }
        )
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 404)
        self.assertEqual(data['success'], False)

    def test_17_delete_actor(self):
        """
        tests deleting actor by id
        """

        response = self.client.delete(
            "/api/actors/" + str(self.actor_id),
            headers={'Authorization': self.director_token},
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_18_fail_delete_actor(self):
        """
        tests deleting actor by invalid id
        """

        response = self.client.delete(
            "/api/actors/999999",
            headers={'Authorization': self.director_token},
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 404)
        self.assertEqual(data['success'], False)

    def test_19_delete_movie(self):
        """
        tests deleting movie by id
        """

        response = self.client.delete(
            "/api/movies/" + str(self.movie_id),
            headers={'Authorization': self.producer_token},
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_20_fail_delete_movie(self):
        """
        tests deleting movie by invalid id
        """

        response = self.client.delete(
            "/api/movies/999999",
            headers={'Authorization': self.producer_token},
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 404)
        self.assertEqual(data['success'], False)

    def test_21_fail_delete_movie_wrong_permission(self):
        """
        tests deleting movie without required permissions in token
        """

        response = self.client.delete(
            "/api/movies/35",
            headers={'Authorization': self.director_token},
        )

        data = json.loads(response.data)

        self.assertEqual(response.status_code, 403)
        self.assertEqual(data['success'], False)

    def test_22_get_user_role(self):
        """
        tests retriving user role from auth token
        """

        response = self.client.get(
            "/api/role", headers={'Authorization': self.producer_token})
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["role"], "Executive Producer")

    def test_23_fail_get_user_role(self):
        """
        tests retriving user role without an auth token
        """

        response = self.client.get("/api/role")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 401)
        self.assertEqual(data['success'], False)


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
