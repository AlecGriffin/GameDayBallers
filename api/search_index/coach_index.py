from whoosh.fields import Schema, TEXT, ID
import index_helper

coaches_index_dir = "coaches_index"

coaches_schema = Schema(
    Name=TEXT,
    CoachAPIID=ID(stored=True),
    TeamID=TEXT,
    WinLoss=TEXT,
    DOB=TEXT,
    Recognitions=TEXT,
    PastTeams=TEXT,
    PlayersCoached=TEXT,
)

coaches_attributes = ["Name", "CoachAPIID", "TeamID", "WinLoss", "DOB", "Recognitions",
             "PastTeams", "PlayersCoached"]

coaches_id_name = "CoachAPIID"

def search_coach_index(query):
    return index_helper.search_index(coaches_index_dir, coaches_schema, coaches_attributes, coaches_id_name, query)

if __name__ == '__main__':
    print(search_coach_index("james cavaliers"))
