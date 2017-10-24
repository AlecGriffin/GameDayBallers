from flask import Flask
from flask import jsonify
from models import teams

app = Flask(__name__)

@app.route('/healthcheck', methods=['GET'])
def healthcheck():
    return "GameDayBallers API is up and running!"
    
@app.route('/players/', methods=['GET'])
def list_players():
    return "GameDayBallers API is up and running!"

@app.route('/players/<player_id>', methods=['GET'])
def get_player_by_id(player_id):
    return "GameDayBallers API is up and running!"

@app.route('/coaches/', methods=['GET'])
def list_coaches():
    return "GameDayBallers API is up and running!"

@app.route('/coaches/<coach_id>', methods=['GET'])
def get_coach_by_id(coach_id):
    return "GameDayBallers API is up and running!"
    
@app.route('/teams/', methods=['GET'])
def list_teams():
    return jsonify(teams.list_teams())

@app.route('/teams/<team_id>', methods=['GET'])
def get_team_by_id(team_id):
    return jsonify(teams.get_team_info(team_id))
    
@app.route('/pre-nba/', methods=['GET'])
def list_prenba():
    return "GameDayBallers API is up and running!"
    
@app.route('/pre-nba/<pre_nba_id>', methods=['GET'])
def get_prenba_by_id(pre_nba_id):
    return "GameDayBallers API is up and running!"

