"""Api Blueprints."""

from flask import Blueprint, send_from_directory
from flask_cors import CORS

# client app blueprint to serve client's static files
client_app = Blueprint("client_app", __name__, static_folder='../frontend/build', static_url_path='')
CORS(client_app, resources={r"/*": {"origins": "*"}})

# serve the react static files
@client_app.route('/')
def serve():
    return send_from_directory(client_app.static_folder, 'index.html')

# api blueprint
api = Blueprint("api", __name__)
CORS(api, resources={r"/api/*": {"origins": "*"}})

from . import routes  # importing routes