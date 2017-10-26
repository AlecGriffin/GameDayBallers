from flask import Flask, Response, jsonify
from datetime import timedelta
from flask import make_response, request, current_app
from functools import update_wrapper
from models import teams, players, coaches, prenba

# mysqldump --databases gamedayballersdb -uroot -p --hex-blob --skip-triggers --set-gtid-purged=OFF --default-character-set=utf8 > ballersexport.sql

app = Flask(__name__)


# Snippet copied from http://flask.pocoo.org/snippets/56/
def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator

@app.route('/', methods=['GET'])
@crossdomain(origin='*')
def home():
    resp = Response("GamedayBallers API is up and running!")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
    
@app.route('/players/', methods=['GET'])
@crossdomain(origin='*')
def list_players():
    return jsonify(players.list_players())

@app.route('/players/<player_id>', methods=['GET'])
@crossdomain(origin='*')
def get_player_by_id(player_id):
    return jsonify(players.get_player_info(player_id))

@app.route('/coaches/', methods=['GET'])
@crossdomain(origin='*')
def list_coaches():
    return jsonify(coaches.list_coaches())

@app.route('/coaches/<coach_id>', methods=['GET'])
@crossdomain(origin='*')
def get_coach_by_id(coach_id):
    return jsonify(coaches.get_coach_info(coach_id))
    
@app.route('/teams/', methods=['GET'])
@crossdomain(origin='*')
def list_teams():
    return jsonify(teams.list_teams())

@app.route('/teams/<team_id>', methods=['GET'])
@crossdomain(origin='*')
def get_team_by_id(team_id):
    return jsonify(teams.get_team_info(team_id))
    
@app.route('/pre-nba/', methods=['GET'])
@crossdomain(origin='*')
def list_prenba():
    return jsonify(prenba.list_prenba())
    
@app.route('/pre-nba/<pre_nba_id>', methods=['GET'])
@crossdomain(origin='*')
def get_prenba_by_id(pre_nba_id):
    return jsonify(prenba.get_prenba_info(pre_nba_id))

