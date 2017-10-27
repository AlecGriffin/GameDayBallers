from unittest import main, TestCase
from requests import get
import MySQLdb

db = MySQLdb.connect(host="localhost",
                     user="root",
                     passwd="password",
                     db="nbadb")

def get_json(url):
    response = get(url)
    return response.json()

class MyUnitTests (TestCase) :
    def test_1 (self) :
        url = "https://api-dot-game-day-ballers-181000.appspot.com/players/jamesharden"
        info = get_json(url)
        self.assertEqual(info['position'], 'G')

    def test_2 (self) :
        url = "https://api-dot-game-day-ballers-181000.appspot.com/coaches/stevekerr"
        info = get_json(url)
        self.assertEqual(info['win_loss_percentage'], '84.1')

    def test_3 (self) :
        url = "https://api-dot-game-day-ballers-181000.appspot.com/teams/washingtonwizards"
        info = get_json(url)
        self.assertEqual(info['arena'], 'Capital One Arena')

    def test_4 (self) :
        url = "https://api-dot-game-day-ballers-181000.appspot.com/divisions/southwest"
        info = get_json(url)
        self.assertEqual(info['conference'], 'Western')

    def test_5 (self) :
        url = "https://api-dot-game-day-ballers-181000.appspot.com/coaches/"
        info = get_json(url)
        self.assertEqual(len(info), 30)

    def test_6 (self) :
        cur = db.cursor()
        cur.execute("SELECT Position FROM players WHERE Name = 'LeBron James'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'F')

    def test_7 (self) :
        cur = db.cursor()
        cur.execute("SELECT TeamID FROM players WHERE Name = 'James Harden'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'houstonrockets')

    def test_8 (self) :
        cur = db.cursor()
        cur.execute("SELECT Arena FROM teams WHERE Team = 'Washington Wizards'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'Capital One Arena')

    def test_9 (self) :
        cur = db.cursor()
        cur.execute("SELECT prenba.Name FROM prenba INNER JOIN players ON \
                    prenba.PreNBAID = players.PreNBA \
                    WHERE players.Name = 'Kevin Durant'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'Texas')

    def test_10 (self) :
        cur = db.cursor()
        cur.execute("SELECT prenba.Name FROM prenba INNER JOIN players ON \
                    prenba.PreNBAID = players.PreNBA \
                    WHERE players.Name = 'DeAndre Jordan'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'Texas A&M')

    def test_11 (self) :
        cur = db.cursor()
        cur.execute("SELECT Conference FROM divisions WHERE Division = 'Southwest'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'Western')

    def test_12 (self) :
        cur = db.cursor()
        cur.execute("SELECT teams.TeamCity FROM teams INNER JOIN coaches ON \
                    coaches.TeamID = teams.TeamAPIID \
                    WHERE coaches.Name = 'Gregg Popovich'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'San Antonio, Texas')

    def test_13 (self) :
        cur = db.cursor()
        cur.execute("SELECT teams.TeamCity FROM teams INNER JOIN coaches ON \
                    coaches.TeamID = teams.TeamAPIID \
                    WHERE coaches.Name = 'Gregg Popovich'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'San Antonio, Texas')

    def test_14 (self) :
        cur = db.cursor()
        cur.execute("SELECT MostDivTitles FROM divisions WHERE Division = 'Pacific'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'losangeleslakers')

    def test_15 (self) :
        cur = db.cursor()
        cur.execute("SELECT WinLoss FROM coaches WHERE Name = 'Steve Kerr'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], '84.1')

    def test_16 (self) :
        cur = db.cursor()
        cur.execute("SELECT DOB FROM coaches WHERE Name = 'Brad Stevens'")
        data = cur.fetchall()
        self.assertEqual(data[0][0], 'October 22, 1976')


if __name__ == "__main__" : # pragma: no cover
    main()
