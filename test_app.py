from os import environ
import json
import unittest
from flask_sqlalchemy import SQLAlchemy
from app import create_app, db
from app.models import Actor, Movie, ActorsInMovies


class CastingAgencyTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app("testing")
        self.app_context = self.app.app_context()

        self.app_context.push()
        with self.app.test_client():
            self.client = self.app.test_client()

    def tearDown(self):
        self.app_context.pop()

    def test_get_actors(self):
        """
        tests getting all actors 
        """

        response = self.client.get("/api/actors")
        data = json.loads(response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["success"], True)
        self.assertIn("actors", data)


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
