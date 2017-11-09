import db_helper
import players, teams

"""
+-----------------+---------------+------+-----+---------+-------+
| Field           | Type          | Null | Key | Default | Extra |
+-----------------+---------------+------+-----+---------+-------+
| Division        | varchar(20)   | YES  |     | NULL    |       | 0
| Conference      | varchar(20)   | YES  |     | NULL    |       | 1
| InauguralSeason | varchar(30)   | YES  |     | NULL    |       | 2
| Teams           | varchar(500)  | YES  |     | NULL    |       | 3
| Players         | varchar(2000) | YES  |     | NULL    |       | 4
| DivChamp        | varchar(60)   | YES  |     | NULL    |       | 5
| MostDivTitles   | varchar(60)   | YES  |     | NULL    |       | 6
| Rivalries       | varchar(2000) | YES  |     | NULL    |       | 7
| ImageURL        | varchar(500)  | YES  |     | NULL    |       | 8
| DivisionAPIID   | varchar(15)   | YES  |     | NULL    |       | 9
+-----------------+---------------+------+-----+---------+-------+
"""
# JSON Format
"""
{
  "name": "Atlantic",
  "conference": "Eastern",
  "teams": [
    "Boston Celtics",
    "Brooklyn Nets",
    "New York Knicks",
    "Philadelphia 76ers",
    "Toronto Raptors"
  ],
  "inauguralSeason": "1970-71 Season",
  "divChamp": "Boston Celtics",
  "mostDivTitles": "Boston Celtics",
  "rivalries": [
    "Boston Celtics vs. New York Knicks",
    "Boston Celtics vs. Philadelphia 76ers",
    "New York Knicks vs. Brooklyn Nets",
    "New York Knicks vs Philadelphia 76ers"
  ],
  "imageURL": "https://imgur.com/CWOmrZE"
}
"""

def search_divisions(keyword):
    with db_helper.db_connect() as db:
        divisions = []
        search_attrs = ["Division", "Conference", "InauguralSeason", "Teams",
                        "Players", "DivChamp", "MostDivTitles", "Rivalries",
                        "DivisionAPIID"]
        for row in db.search_table("divisions", search_attrs, keyword):
            divisions.append(row_to_detailblurb(row))
        return divisions

# Returns brief meta-data for every team in the DB
def list_divisions():
    with db_helper.db_connect() as db:
        divisions = []
        for row in db.list_table("divisions"):
            divisions.append(row_to_blurb(row))
        return divisions

# Returns brief meta-data for every team in the DB
def list_divisions_full():
    with db_helper.db_connect() as db:
        divisions = []
        for row in db.list_table("divisions"):
            divisions.append(row_to_detailblurb(row))
        return divisions

# For a given SQL row, convert into a meta-data "blurb"
def row_to_blurb(row):
    return {
        "name": row[0],
        "url": "/divisions/" + row[9],
        "image_url": row[8]
    }

def row_to_detailblurb(row):
    return {
        "name": row[0],
        "url": "/divisions/" + row[9],
        "conference": row[1],
        "inaugural_season": row[2].replace("Season", ""),
        "div_champ": row[11],
        "most_div_titles": row[10],
        "image_url": row[8]
    }

# Get short meta-data for just one team
def get_division(prenba_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("divisions", "DivisionAPIID", prenba_id)
        if len(rows) == 1:
            return row_to_blurb(rows[0])
        else:
            return None

# Get detailed information about a team
def get_division_info(prenba_id):

    with db_helper.db_connect() as db:
        rows = db.get_rows("divisions", "DivisionAPIID", prenba_id)
        if len(rows) == 1:
            row = rows[0]
            division = {
              "name": row[0],
              "conference": row[1],
              "teams": [teams.get_team(team_id) for team_id in row[3].split(",")],
              "inauguralSeason": row[2],
              "divChamp": row[5],
              "mostDivTitles": row[6],
              "rivalries": [rivalry for rivalry in row[7].split(",")],
              "imageURL": row[8]
            }
            return division
        else:
            return None

if __name__ == '__main__':
    print(list_divisions())
    print(search_divisions("west"))
    print(get_division_info("atlantic"))
