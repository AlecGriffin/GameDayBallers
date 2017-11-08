from datetime import timedelta
from flask import make_response, request, current_app, Flask, Response, jsonify
from functools import update_wrapper
import os
import MySQLdb
from models import teams, players, coaches, divisions

# To get the sql dump in appropriate format
# mysqldump --databases gamedayballersdb -uroot -p --hex-blob --skip-triggers --set-gtid-purged=OFF --default-character-set=utf8 > ballersexport_v2.sql

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    resp = Response("GamedayBallers API is up and running!")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/players/', methods=['GET'])
def list_players():
    return jsonify(players.list_players())

@app.route('/players_full/', methods=['GET'])
def list_players_full():
    return jsonify(players.list_players_full())

@app.route('/players/<player_id>', methods=['GET'])
def get_player_by_id(player_id):
    return jsonify(players.get_player_info(player_id))

@app.route('/coaches/', methods=['GET'])
def list_coaches():
    return jsonify(coaches.list_coaches())

@app.route('/coaches/<coach_id>', methods=['GET'])
def get_coach_by_id(coach_id):
    return jsonify(coaches.get_coach_info(coach_id))

@app.route('/teams/', methods=['GET'])
def list_teams():
    return jsonify(teams.list_teams())

@app.route('/teams_full/', methods=['GET'])
def list_teams_full():
    return jsonify(teams.list_teams_full())

@app.route('/teams/<team_id>', methods=['GET'])
def get_team_by_id(team_id):
    return jsonify(teams.get_team_info(team_id))

@app.route('/divisions/', methods=['GET'])
def list_divisions():
    return jsonify(divisions.list_divisions())

@app.route('/divisions/<division_id>', methods=['GET'])
def get_division_by_id(division_id):
    return jsonify(divisions.get_division_info(division_id))
