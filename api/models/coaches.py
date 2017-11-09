# coding=utf-8
import db_helper
import players
import teams
from search_index import coach_index

"""
+----------------+---------------+------+-----+---------+-------+
| Field          | Type          | Null | Key | Default | Extra |
+----------------+---------------+------+-----+---------+-------+
| CoachID        | varchar(5)    | YES  |     | NULL    |       | 0
| Name           | varchar(30)   | YES  |     | NULL    |       | 1
| CoachAPIID     | varchar(50)   | YES  |     | NULL    |       | 2
| TeamID         | varchar(30)   | YES  |     | NULL    |       | 3
| DOB            | varchar(30)   | YES  |     | NULL    |       | 4
| WinLoss        | varchar(10)   | YES  |     | NULL    |       | 5
| Recognitions   | varchar(1000) | YES  |     | NULL    |       | 6
| PastTeams      | varchar(2000) | YES  |     | NULL    |       | 7
| PlayersCoached | varchar(2000) | YES  |     | NULL    |       | 8
| ImageURL       | varchar(500)  | YES  |     | NULL    |       | 9
+----------------+---------------+------+-----+---------+-------+
"""
# JSON format
"""
{
  "name": "Gregg Popovich",
  "image_url": "http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667 ",
  "dob": "",
  "current_team": "San Antonio Spurs",
  "win_loss_percentage": "69.4",
  "current_roster": [
    "LaMarcus Aldridge",
    "Kyle Anderson",
    "Dāvis Bertāns",
    "Amida Brimah",
    "Matt Costello",
    "Bryn Forbes",
    "Pau Gasol",
    "Rudy Gay",
    " Manu Ginóbili",
    "Danny Green",
    "Darrun Hilliard",
    "Joffery Lauvergne",
    "Kawhi Leonard",
    "Patty Mills",
    "Dejounte Murray",
    "Tony Parker",
    "Brandon Paul",
    "London Perrantes",
    "Derrick White"
  ],
  "past_teams": [
    "Air Force",
    "Pomona-Pitzer",
    "Kansas",
    "Golden State Warriors"
  ],
  "recognitions": [
    "NBA champion (1999, 2003, 2005, 2007, 2014)",
    "NBA Coach of the Year (2003, 2012, 2014)"
  ]
}
"""

def search_coaches(query):
    coaches = []
    for id in coach_index.search_coach_index(query):
        with db_helper.db_connect() as db:
            rows = db.get_rows("coaches", "CoachAPIID", id)
            if len(rows) == 1:
                coaches.append(row_to_detailblurb(rows[0]))
    return coaches

# Returns brief meta-data for every coach in the DB
def list_coaches():
    with db_helper.db_connect() as db:
        players = []
        for row in db.list_table("coaches"):
            players.append(row_to_blurb(row))
        return players

def list_coaches_full():
    with db_helper.db_connect() as db:
        players = []
        for row in db.list_table("coaches"):
            players.append(row_to_detailblurb(row))
        return players

# For a given SQL row, convert into a meta-data "blurb"
def row_to_blurb(row):
    return {
        "name": row[1],
        "url": "/coaches/" + row[2],
        "image_url": row[9]
    }

# For a given SQL row, convert into a detailed meta-data "blurb"
def row_to_detailblurb(row):
    return {
        "name": row[1],
        "url": "/coaches/" + row[2],
        "dob": row[4],
        "current_team": row[11],
        "win_loss_percentage": row[5],
        "image_url": row[9]
    }

# Get short meta-data for just one coach
def get_coach(coach_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("coaches", "CoachAPIID", coach_id)
        if len(rows) == 1:
            return row_to_blurb(rows[0])
        else:
            return None

def get_coach_by_number(coach_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("coaches", "CoachID", coach_id)
        if len(rows) == 1:
            return row_to_blurb(rows[0])
        else:
            return None

# Get detailed information about a coach
def get_coach_info(coach_id):

    with db_helper.db_connect() as db:
        rows = db.get_rows("coaches", "CoachAPIID", coach_id)
        if len(rows) == 1:
            row = rows[0]
            coach = {
                "name": row[1],
                "image_url":row[9],
                "dob": row[4],
                "current_team": teams.get_team(row[3]),
                "win_loss_percentage": row[5],
                "color": row[10] if 10 in row else None,
                "current_roster": [players.get_player(player_id) for player_id in row[8].split(",")],
                "past_teams": [team for team in row[7].split(",")],
                "recognitions": [award for award in row[6].split(";")]
            }
            return coach
        else:
            return None



if __name__ == '__main__':
    print(list_coaches())
    print(search_coaches("lebron"))
    print(get_coach_info("bradstevens"))
