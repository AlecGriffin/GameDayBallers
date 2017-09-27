"""`main` is the top level module for your Flask application."""
# Note: You don't need to call app.run() when running `dev_appserver.py .` or deploying to App Engine,
# since the application is embedded within the App Engine WSGI application server.

from flask import Flask, render_template
app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def application_error(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/players')
def players():
    return render_template("players.html")

@app.route('/teams')
def teams():
    return render_template("teams.html")

@app.route('/coaches')
def coaches():
    return render_template("coaches.html")

@app.route('/pre-nba')
def pre_nba():
    return render_template("pre-nba-list.html")

@app.route('/players/<name>')
def player_profile(name):
    return render_template("player.html")

@app.route('/teams/<name>')
def team_profile(name):
    return render_template("team.html")

@app.route('/coaches/<name>')
def coach_profile(name):
    return render_template("coach.html")

@app.route('/pre-nba/<name>')
def prenba_profile(name):
    return render_template("pre-nba.html")

if __name__ == "__main__":
    app.run(debug=True)
