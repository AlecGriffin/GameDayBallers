var arizona_state={
    "name": "Arizona State",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Arizona_State_Athletics_wordmark.svg/500px-Arizona_State_Athletics_wordmark.svg.png ",
    "city": "Tempe",
    "state": "Arizona",
    "country": "United States",
    "mascot": "Sun Devil",
    "players": []
};


var san_diego_state = {
    "name": "San Diego State",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png ",
    "city": "San Diego",
    "state": "California",
    "country": "United States",
    "mascot": "Aztec",
    "players": ["Kawhi Leonard"]
};


var st_vincent = {
    "name": "St. Vincent-St. Mary HS (OH)",
    "logo": "http://www.stvm.com/sites/default/files/logo-header-new_0.png ",
    "city": "Akron",
    "state": "Ohio",
    "country": "United States",
    "mascot": "The Fighting Irish",
    "players": ["LeBron James"]
};


export function getPreNba(schoolName) {
  switch (schoolName) {
    case "arizonastate":
      return arizona_state;
    case "sandiegostate":
      return san_diego_state;
    case "stvincentstmary":
      return st_vincent;
    default:
      return arizona_state;
  }
}