james_harden = {
    "name": "James Harden",
    "jersey_number": "13",
    "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png",
    "team": "Houston Rockets",
    "position": "G",
    "dob": "Aug 26, 1989",
    "height": "6” 5’",
    "weight": "220",
    "country": "United States",
    "prenba": "Arizona State",
    "debut": "",
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
    "past_teams": ["Oklahoma City Thunder"],
    "recognitions": []
};

kawhi_leonard = {
    "name": "Kawhi Leonard",
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
    "past_teams": [],
    "recognitions": []
};

lebron_james = {
      "name": "Lebron James",
      "jersey_number": "23",
      "image_url": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png ",
      "team": "Cleveland Cavaliers",
      "position": "F",
      "dob": "June 29, 1991",
      "height": " 6” 8’",
      "weight": "250",
      "country": "United States",
      "prenba": "St. Vincent-St. Mary HS (OH)",
      "debut": "2003",
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
      "past_teams": ["Cleveland Cavaliers", "Miami Heat"],
      "recognitions": []
};

function getPlayer(playerName) {
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

function populatePlayerInfo(player, doc) {
  doc.getElementById("nameAndJerseyNumber").innerHTML = player.name + ", #" + player.jersey_number;
}
