from whoosh.fields import Schema, TEXT, ID
import index_helper

players_index_dir = "player_index"

players_schema = Schema(
    Name=TEXT,
    PlayerAPIID=ID(stored=True),
    TeamID=TEXT,
    JerseyNumber=TEXT,
    Position=TEXT,
    Height=TEXT,
    Weight=TEXT,
    DOB=TEXT,
    PreNBA=TEXT,
    Recognitions=TEXT,
    PastTeams=TEXT,
    CareerStats=TEXT,
)

players_attributes = ["Name", "TeamID", "PlayerAPIID", "TeamID", "JerseyNumber", "Position", "Height", "Weight", "DOB",
                      "PreNBA", "Recognitions", "PastTeams", "CareerStats"]

players_id_name = "PlayerAPIID"

def search_player_index(query):
    return index_helper.search_index(players_index_dir, players_schema, players_attributes, players_id_name, query)

if __name__ == '__main__':
    print(search_player_index("james cavaliers"))
