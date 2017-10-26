import db_helper

"""
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| PreNBAID    | varchar(5)    | YES  |     | NULL    |       | 0
| Name        | varchar(60)   | YES  |     | NULL    |       | 1
| PreNBAAPIID | varchar(50)   | YES  |     | NULL    |       | 2
| Location    | varchar(100)  | YES  |     | NULL    |       | 3
| Mascot      | varchar(50)   | YES  |     | NULL    |       | 4
| MascotURL   | varchar(500)  | YES  |     | NULL    |       | 5
| Players     | varchar(2000) | YES  |     | NULL    |       | 6
| Teams       | varchar(2000) | YES  |     | NULL    |       | 7
| ImageURL    | varchar(500)  | YES  |     | NULL    |       | 8
+-------------+---------------+------+-----+---------+-------+
"""
# JSON Format
"""
{
  "name": "San Diego State",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png ",
  "city": "San Diego",
  "state": "California",
  "country": "United States",
  "mascot": "Aztec",
  "players": [
    "Kawhi Leonard"
  ]
}
"""

# Returns brief meta-data for every team in the DB
def list_prenba():
    with db_helper.db_connect() as db:
        prenbas = []
        for row in db.list_table("prenba"):
            prenbas.append(row_to_blurb(row))
        return prenbas

# For a given SQL row, convert into a meta-data "blurb"
def row_to_blurb(row):
    return {
        "name": row[1],
        "url": "/pre-nba/" + row[2],
        "image_url": row[8]
    }

# Get short meta-data for just one team
def get_prenba(prenba_id):
    with db_helper.db_connect() as db:
        rows = db.get_rows("prenba", "PreNBAAPIID", prenba_id)
        if len(rows) == 1:
            return row_to_blurb(rows[0])
        else:
            return None

# Get detailed information about a team
def get_prenba_info(prenba_id):

    with db_helper.db_connect() as db:
        rows = db.get_rows("prenba", "PreNBAAPIID", prenba_id)
        if len(rows) == 1:
            row = rows[0]
            prenba = {
                "name": row[1],
                "logo": row[8],
                "location": row[3],
                "mascot": row[4],
                "players": [] #[players.get_player(player_id) for player_id in row[6].split(",")]
            }
            return prenba
        else:
            return None

if __name__ == '__main__':
    print(list_prenba())
    print(get_prenba_info("sandiegostate"))