from flask import Flask
from flask import jsonify
from models import teams, players, coaches, prenba

app = Flask(__name__)

@app.route('/', methods=['GET'])
def healthcheck():
    return "GameDayBallers API is up and running!"
    
@app.route('/players/', methods=['GET'])
def list_players():
    return jsonify(players.list_players())

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

@app.route('/teams/<team_id>', methods=['GET'])
def get_team_by_id(team_id):
    return jsonify(teams.get_team_info(team_id))
    
@app.route('/pre-nba/', methods=['GET'])
def list_prenba():
    return jsonify(prenba.list_prenba())
    
@app.route('/pre-nba/<pre_nba_id>', methods=['GET'])
def get_prenba_by_id(pre_nba_id):
    return jsonify(prenba.get_prenba_info(pre_nba_id))

