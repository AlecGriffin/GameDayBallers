# coding=utf-8
import db_helper
import players, coaches

"""
# SQL Schema
+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| TeamID     | varchar(15)   | YES  |     | NULL    |       | 0
| TeamCity   | varchar(25)   | YES  |     | NULL    |       | 1
| TeamName   | varchar(25)   | YES  |     | NULL    |       | 2
| Team       | varchar(50)   | YES  |     | NULL    |       | 3
| TeamAPIID  | varchar(50)   | YES  |     | NULL    |       | 4
| Conference | varchar(10)   | YES  |     | NULL    |       | 5
| Division   | varchar(20)   | YES  |     | NULL    |       | 6
| CoachID    | varchar(5)    | YES  |     | NULL    |       | 7
| Roster     | varchar(2000) | YES  |     | NULL    |       | 8
| Arena      | varchar(30)   | YES  |     | NULL    |       | 9
| Titles     | varchar(1000) | YES  |     | NULL    |       | 10
| ImageURL   | varchar(500)  | YES  |     | NULL    |       | 11
| TeamColor  | varchar(30)   | YES  |     | NULL    |       | 12
+------------+---------------+------+-----+---------+-------+ 
"""
# JSON Format
"""
{
  "name": "San Antonio Spurs",
  "logo_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png ",
  "city": "San Antonio",
  "state": "Texas",
  "country": "United States",
  "arena:": "AT&T Center",
  "head_coach": "Gregg Popovich",
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
  ]
}
"""

# Returns brief meta-data for every team in the DB
def list_teams():
    with db_helper.db_connect() as db:
        teams = []
        for row in db.list_table("teams"):
            teams.append(row_to_blurb(row))
        return teams

# For a given SQL row, convert into a meta-data "blurb"
def row_to_blurb(row):
    return {
        "name": row[3],
        "url": "/teams/" + row[4],
        "image_url": row[11]
    }


# Get short meta-data for just one team
def get_team(team_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("teams", "TeamAPIID", team_id)
        if len(rows) == 1:
            return row_to_blurb(rows[0])
        else:
            return None



# Get detailed information about a team
def get_team_info(team_id):

    def get_titles(row):
        titles = row.split(";")
        return {
            "championships": [i.strip() for i in titles[0].split(",")] if titles[0] else [],
            "conference_champs": [i.strip() for i in titles[1].split(",")] if titles[1] else [],
            "division_champs": [i.strip() for i in titles[2].split(",")] if titles[2] else [],
        }

    with db_helper.db_connect() as db:
        rows = db.get_rows("teams", "TeamAPIID", team_id)
        if len(rows) == 1:
            row = rows[0]
            team = {
                "name": row[3],
                "logo_url": row[11],
                "city": row[1],
                "arena": row[9],
                "head_coach": coaches.get_coach_by_number(row[7]),
                "color": row[12],
                "titles": get_titles(row[10]),
                "current_roster": [players.get_player(player_id) for player_id in row[8].split(",")],
            }
            return team
        else:
            return None

if __name__ == '__main__':
    print(list_teams())
    print(get_team_info("laclippers"))