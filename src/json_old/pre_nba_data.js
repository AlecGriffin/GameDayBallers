var arizona_state={
    "name": "Arizona State",
    "logo": "http://foxsportsuniversity.com/wp-content/uploads/2012/08/ASU-pitchfork_4-dk-bkgd.png",
    "city": "Tempe",
    "state": "Arizona",
    "country": "United States",
    "mascot": "Sun Devil",
    "mascot_img": "http://cdn.fbschedules.com/blog/wp-content/uploads/2016/10/arizona-state-sun-devils.jpg",
    "players": ["James Harden"]
};


var san_diego_state = {
    "name": "San Diego State",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/San_Diego_State_Aztecs_logo.svg/400px-San_Diego_State_Aztecs_logo.svg.png ",
    "city": "San Diego",
    "state": "California",
    "country": "United States",
    "mascot": "Aztec Warrior",
    "mascot_img": "http://darkroom.baltimoresun.com/wp-content/uploads/2013/03/00220721_H31298599.jpg",
    "players": ["Kawhi Leonard"]
};


var st_vincent = {
    "name": "St. Vincent-St. Mary HS (OH)",
    "logo": "https://usathss.files.wordpress.com/2014/08/2013-stvm-leprechaun-logo.jpg?w=640",
    "city": "Akron",
    "state": "Ohio",
    "country": "United States",
    "mascot": "The Fighting Irish",
    "mascot_img": "",
    "players": ["LeBron James"]
};


export function getDivision(schoolName) {
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
