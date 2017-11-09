from whoosh.fields import Schema, TEXT, ID
import index_helper

teams_index_dir = "teams_index"

teams_schema = Schema(
    TeamCity=TEXT,
    TeamName=TEXT,
    Team=TEXT,
    TeamAPIID=ID(stored=True),
    Conference=TEXT,
    Division=TEXT,
    CoachID=TEXT,
    Roster=TEXT,
    Arena=TEXT,
    Titles=TEXT
)

teams_attributes = ["TeamCity", "TeamName", "Team","TeamAPIID","Conference","Division",
            "CoachID", "Roster", "Arena", "Titles"]

teams_id_name = "TeamAPIID"

def search_team_index(query):
    return index_helper.search_index(teams_index_dir, teams_schema, teams_attributes, teams_id_name, query)

if __name__ == '__main__':
    print(search_team_index("lebron"))