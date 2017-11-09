# coding=utf-8
import db_helper
import teams
from collections import Counter

# SQL schema:
"""
# Players:
+--------------+---------------+------+-----+---------+-------+
| Field        | Type          | Null | Key | Default | Extra |
+--------------+---------------+------+-----+---------+-------+
| PlayerID     | varchar(15)   | YES  |     | NULL    |       | 0
| Name         | varchar(60)   | YES  |     | NULL    |       | 1
| PlayerAPIID  | varchar(50)   | YES  |     | NULL    |       | 2
| TeamID       | varchar(30)   | YES  |     | NULL    |       | 3
| JerseyNumber | int(2)        | YES  |     | NULL    |       | 4
| Position     | varchar(10)   | YES  |     | NULL    |       | 5
| Height       | varchar(10)   | YES  |     | NULL    |       | 6
| Weight       | int(3)        | YES  |     | NULL    |       | 7
| DOB          | varchar(20)   | YES  |     | NULL    |       | 8
| PreNBA       | varchar(30)   | YES  |     | NULL    |       | 9
| Recognitions | varchar(2000) | YES  |     | NULL    |       | 10
| PastTeams    | varchar(2000) | YES  |     | NULL    |       | 11
| CareerStats  | varchar(1000) | YES  |     | NULL    |       | 12
| ImageURL     | varchar(500)  | YES  |     | NULL    |       | 13
+--------------+---------------+------+-----+---------+-------+
# Awards:
+--------+--------------+------+-----+---------+-------+
| Field  | Type         | Null | Key | Default | Extra |
+--------+--------------+------+-----+---------+-------+
| Player | varchar(60)  | YES  |     | NULL    |       |
| Award  | varchar(500) | YES  |     | NULL    |       |
| Year   | varchar(30)  | YES  |     | NULL    |       |
+--------+--------------+------+-----+---------+-------+

"""
# Player JSON example:
"""
{
  "player": "Kawhi Leonard",
  "jersey_number": "2",
  "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202695.png ",
  "team": "San Antonio Spurs",
  "position": "F",
  "dob": "June 29, 1991",
  "height": "6” 7’",
  "weight": "230",
  "country": "United States",
  "prenba": "San Diego State",
  "debut": "",
  "career_stats": {
    "minutes_per_game": "30.6",
    "field_goal_percentage": "49.5",
    "three_point_percentage": "38.8",
    "free_throw_percentage": "84.7",
    "points_per_game": "16.4",
    "rebounds_per_game": "6.2",
    "assists_per_game": "2.6",
    "blocks_per_game": "0.7"
  },
  "recognitions": []
}
"""

def get_career_stats(stats_line):
    if not stats_line:
        return
    stats_list = stats_line.split(",")
    return {
        "minutes_per_game": stats_list[0],
        "field_goal_percentage": stats_list[1],
        "three_point_percentage": stats_list[2],
        "free_throw_percentage": stats_list[3],
        "points_per_game": stats_list[4],
        "rebounds_per_game": stats_list[5],
        "assists_per_game": stats_list[6],
        "blocks_per_game": stats_list[7]
    }

def search_players(keyword):
    with db_helper.db_connect() as db:
        players = []
        search_attrs = ["PlayerAPIID", "Name", "TeamID", "JerseyNumber", "Position",
                        "Height", "Weight", "DOB", "PreNBA", "Recognitions",
                        "PastTeams","CareerStats"]
        for row in db.search_table("players", search_attrs, keyword):
            players.append(row_to_blurb(row))
        return players

# Returns brief meta-data for every player in the DB
def list_players():
    with db_helper.db_connect() as db:
        players = []
        for row in db.list_table("players"):
            players.append(row_to_blurb(row))
        return players

def list_players_full():
    with db_helper.db_connect() as db:
        players = []
        for row in db.list_table("players"):
            players.append(row_to_detailblurb(row))
        return players

# For a given SQL row, convert into a meta-data "blurb"
def row_to_blurb(row):
    return {
        "name": row[1],
        "url": "/players/" + row[2],
        "image_url": row[13]
    }

# For a given SQL row, convert into a more detailed meta-data "blurb"
def row_to_detailblurb(row):
    return {
          "name": row[1],
          "jersey_number": row[4],
          "url": "/players/" + row[2],
          "image_url": row[13],
          "position": row[5],
          "dob": row[8],
          "height": row[6],
          "weight": row[7],
          "team": row[15],
          "career_stats": get_career_stats(row[12])
    }

# Get short meta-data for just one player
def get_player(player_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("players", "PlayerAPIID", player_id)
        if len(rows) == 1:
            return row_to_blurb(rows[0])
        else:
            return None

def get_awards_for_player(player_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("awards", "Player", player_id)
        if len(rows) > 0:
            awards = []
            for k, v in Counter([row[1] for row in rows]).items():
                if v == 1:
                    awards.append(k)
                else:
                    awards.append(k + " x " + str(v))
            return awards
        else:
            return []

# Get detailed information about a player
def get_player_info(player_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("players", "PlayerAPIID", player_id)
        if len(rows) == 1:
            row = rows[0]
            player = {
              "player": row[1],
              "jersey_number": row[4],
              "image_url": row[13],
              "team": teams.get_team(row[3]),
              "position": row[5],
              "dob": row[8],
              "height": row[6],
              "weight": row[7],
              "prenba": row[9],
              "color": row[14] if 14 in row else None,
              "career_stats": get_career_stats(row[12]),
              "recognitions": get_awards_for_player(player_id)
            }
            return player
        else:
            return None


if __name__ == '__main__':
    print(list_players())
    print(search_players("james cav"))
    print(get_player_info("paulgeorge"))
