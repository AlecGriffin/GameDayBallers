from whoosh.fields import Schema, TEXT, ID
import index_helper

divisions_index_dir = "divisions_index"

divisions_schema = Schema(
    Name=TEXT,
    CoachAPIID=ID(stored=True),
    TeamID=TEXT,
    WinLoss=TEXT,
    DOB=TEXT,
    Recognitions=TEXT,
    PastTeams=TEXT,
    PlayersCoached=TEXT,
)

divisions_attributes = ["Division", "DivisionAPIID", "Conference", "InauguralSeason", "Teams", "Players",
             "Rivalries"]

divisions_id_name = "DivisionAPIID"

def search_division_index(query):
    return index_helper.search_index(divisions_index_dir, divisions_schema, divisions_attributes, divisions_id_name, query)

if __name__ == '__main__':
    print(search_division_index("cavaliers"))