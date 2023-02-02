import os
from flask import Flask, send_file, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, Game, Team, League
import json
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
jwt = JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db)


@app.get('/')
def home():
    return send_file('welcome.html')

@app.route('/leagues')
def get_all_leagues():
    leagues = League.query.all()
    if len(leagues):
        for league in leagues:
            return jsonify([league.toJSON() for league in leagues])
    else:
        return {}, 404


# @app.get('/leagues')
# def get_all_leagues():
#     leagues = League.query.all()
#     if len(leagues):
#         for league in leagues:
#             return jsonify([league.toJSON() for league in leagues])
#     else:
#         return {}, 404


@app.route("/hi")
def hello():
    return "<p>Hiiii!</p>"


# if __name__ == '__main__':
#     app.run(host='127.0.0.1', port=os.environ.get('PORT', 3001))