var james_harden = {
    "name": "James Harden",
    "jersey_number": "13",
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png",
    "team": "Houston Rockets",
    "teamURL": "houstonrockets",
    "position": "G",
    "dob": "Aug 26, 1989",
    "height": "6” 5’",
    "weight": "220",
    "country": "United States",
    "prenba": "Arizona State",
    "prenbaURL": "arizonastate",
    "debut": "",
    "team_color": "red",
    "career_stats": {
      "minutes_per_game": "33.6",
      "field_goal_percentage": "44.2",
      "three_point_percentage": "36.4",
      "free_throw_percentage": "85.4",
      "points_per_game": "22.1",
      "rebounds_per_game": "5",
      "assists_per_game": "5.7",
      "blocks_per_game": "0.4",
    },
    "past_teams": ["Oklahoma City Thunder (2009–2012)"],
    "recognitions": ["5× NBA All-Star (2013–2017)",
                    "3× All-NBA First Team (2014, 2015, 2017)",
                    "All-NBA Third Team (2013)",
                    "NBA Sixth Man of the Year (2012)",
                    "NBA assists leader (2017)",
                    "NBA All-Rookie Second Team (2010)",
                    "Consensus first-team All-American (2009)",
                    "Pac-10 Player of the Year (2009)",
                    "2× First-team All-Pac-10 (2008, 2009)",
                    "No. 13 retired by Arizona State"]
};

var kawhi_leonard = {
    "name": "Kawhi Leonard",
    "jersey_number": "2",
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202695.png ",
    "team": "San Antonio Spurs",
    "teamURL": "sanantoniospurs",
    "position": "F",
    "dob": "June 29, 1991",
    "height": "6” 7’",
    "weight": "230",
    "country": "United States",
    "prenba": "San Diego State",
    "prenbaURL": "sandiegostate",
    "debut": "",
    "team_color": "gray",
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
    "past_teams": [],
    "recognitions": ["NBA champion (2014)",
                    "NBA Finals MVP (2014)",
                    "2× NBA All-Star (2016, 2017)",
                    "2× All-NBA First Team (2016, 2017)",
                    "2× NBA Defensive Player of the Year (2015, 2016)",
                    "3× NBA All-Defensive First Team (2015–2017)",
                    "NBA All-Defensive Second Team (2014)",
                    "NBA All-Rookie First Team (2012)",
                    "NBA steals leader (2015)",
                    "Consensus second-team All-American (2011)",
                    "2× First-team All-MWC (2010, 2011)",
                    "California Mr. Basketball (2009)"]
};

var lebron_james = {
      "name": "Lebron James",
      "jersey_number": "23",
      "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png ",
      "team": "Cleveland Cavaliers",
      "teamURL": "clevelandcavaliers",
      "position": "F",
      "dob": "June 29, 1991",
      "height": " 6” 8’",
      "weight": "250",
      "country": "United States",
      "prenba": "St. Vincent-St. Mary HS (OH)",
      "prenbaURL": "stvincentstmary",
      "debut": "2003",
      "team_color": "wine",
      "career_stats": {
        "minutes_per_game": "38.9",
        "field_goal_percentage": "50.1",
        "three_point_percentage": "34.2",
        "free_throw_percentage": "74",
        "points_per_game": "27.1",
        "rebounds_per_game": "7.3",
        "assists_per_game": "7",
        "blocks_per_game": "0.8"
      },
      "past_teams": ["Cleveland Cavaliers (2003–2010)", "Miami Heat (2010–2014)"],
      "recognitions": ["3× NBA champion (2012, 2013, 2016)",
                      "3× NBA Finals MVP (2012, 2013, 2016)",
                      "4× NBA Most Valuable Player (2009, 2010, 2012, 2013)",
                      "13× NBA All-Star (2005–2017)",
                      "2× NBA All-Star Game MVP (2006, 2008)",
                      "11× All-NBA First Team (2006, 2008–2017)",
                      "2× All-NBA Second Team (2005, 2007)",
                      "5× NBA All-Defensive First Team (2009–2013)",
                      "NBA All-Defensive Second Team (2014)",
                      "NBA Rookie of the Year (2004)",
                      "NBA scoring champion (2008)",
                      "J. Walter Kennedy Citizenship Award (2017)",
                      "2× AP Athlete of the Year (2013, 2016)",
                      "2× Sports Illustrated Sportsperson of the Year (2012, 2016)",
                      "USA Basketball Male Athlete of the Year (2012)",
                      "2× Mr. Basketball USA (2002, 2003)",
                      "Naismith Prep Player of the Year (2003)",
                      "McDonald's All-American Game MVP (2003)",
                      "3× Ohio Mr. Basketball (2001–2003)"]
};

export function getPlayer(playerName) {
  switch (playerName) {
    case "jamesharden":
      return james_harden;
    case "kawhileonard":
      return kawhi_leonard;
    case "lebronjames":
      return lebron_james;
    default:
      return james_harden;
  }
}
