"""Api Blueprints."""

import os
from os import environ
from flask import Blueprint, send_from_directory
from flask_cors import CORS

# client app blueprint to serve client's static files
client_app = Blueprint("client_app", __name__,static_url_path='',  static_folder=os.path.join(os.getcwd(), 'frontend/build/static'), template_folder=os.path.join(os.getcwd(), 'frontend/build'))
CORS(client_app, resources={r"/*": {"origins": [environ.get("AUTH0_ISSUER"), environ.get("APP_URL")]}})

# serve the react static files
@client_app.route('/')
def serve():
    return send_from_directory(client_app.template_folder, 'index.html')
    
# on any 404 return the index.html for client-side routing
@client_app.errorhandler(404)
def not_found(e):
    return send_from_directory(client_app.template_folder, 'index.html')

# api blueprint
api = Blueprint("api", __name__)
CORS(api, resources={r"/api/*": {"origins": [environ.get("AUTH0_ISSUER"), environ.get("APP_URL")]}})

from . import routes  # importing routes