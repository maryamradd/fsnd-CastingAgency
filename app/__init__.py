import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate

db = SQLAlchemy()


def create_app(config=None):
    # create and configure the app
    app = Flask(__name__)
    migrate = Migrate(app, db)
    if config == "testing":
        app.config.from_object("config.TestConfig")
    else:
        app.config.from_object("config.Config")

    db.init_app(app)

    with app.app_context():
        from .api import api, client_app
        app.register_blueprint(client_app)
        app.register_blueprint(api, url_prefix="/api")
        # db.create_all()  # Create database tables for our data models

    return app
