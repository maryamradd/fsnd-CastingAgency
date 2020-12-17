"""Api Blueprints."""

import os
from flask import Blueprint, send_from_directory
from flask_cors import CORS

# client app blueprint to serve client's static files
client_app = Blueprint("client_app", __name__,static_url_path='',  static_folder=os.path.join(os.getcwd(), 'frontend/build/static'), template_folder=os.path.join(os.getcwd(), 'frontend/build'))
CORS(client_app, resources={r"/*": {"origins": "*"}})

# serve the react static files
@client_app.route('/')
def serve():
    return send_from_directory(client_app.template_folder, 'index.html')

# api blueprint
api = Blueprint("api", __name__)
CORS(api, resources={r"/api/*": {"origins": "*"}})

from . import routes  # importing routes