var rockets = {
    "name": "Houston Rockets",
    "logo_url": "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/400px-Houston_Rockets.svg.png ",
    "city": "Houston",
    "state": "Texas",
    "country": "United States",
    "arena": "Toyota Center",
    "head_coach": "Mike D’Antoni",
    "coach_img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mike_D%27Antoni_2010.jpg/440px-Mike_D%27Antoni_2010.jpg",
    "coachURL": "mikedantoni",
    "color": "red",
    "current_roster": ["Ryan Anderson", "Trevor Ariza", "Tarik Black", "Bobby Brown", "Clint Capela", "Eric Gordon", "James Harden", "Demetrius Jackson", "Chris Johnson", "Shawn Long", "Luc Mbah a Moute", "Nenê", "Cameron Oliver", "Chunanu Onauku", "Chris Paul", "Tim Quarterman", "Isaiah Taylor", "P.J. Tucker", "Troy Williams", "Zhou Qi"],
    "titles": {
      "championships": ["1994", "1995"],
      "conference_champs": ["1981", "1986", "1994", "1995"],
      "division_champs": ["1977", "1986", "2010", "1993", "1994", "2017"]
    }
};


var spurs = {
    "name": "San Antonio Spurs",
    "logo_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/400px-San_Antonio_Spurs.svg.png ",
    "city": "San Antonio",
    "state": "Texas",
    "country": "United States",
    "arena": "AT&T Center",
    "head_coach": "Gregg Popovich",
    "coach_img":"https://i.imgur.com/B1UfYJl.jpg",
    "coachURL": "greggpopovich",
    "color": "gray",
    "current_roster": ["LaMarcus Aldridge", "Kyle Anderson", "Dāvis Bertāns", "Amida Brimah", "Matt Costello", "Bryn Forbes", "Pau Gasol", "Rudy Gay"," Manu Ginóbili", "Danny Green", "Darrun Hilliard", "Joffery Lauvergne", "Kawhi Leonard", "Patty Mills", "Dejounte Murray", "Tony Parker", "Brandon Paul", "London Perrantes", "Derrick White"],
    "titles": {
      "championships": ["1999", "2003", "2005", "2007", "2014"],
      "conference_champs": ["1999", "2003", "2005", "2007", "2013", "2014"],
      "division_champs": ["2001", "2002", "2003", "2005", "2006", "2009", "2011", "2012", "2013", "2014", "2016", "2017"]
    }
};

var cavs = {
    "name": "Cleveland Cavaliers",
    "logo_url": "http://logos-download.com/wp-content/uploads/2016/04/Cleveland_Cavaliers_logo_logotype_emblem.png ",
    "city": "Cleveland",
    "state": "Ohio",
    "country": "United States",
    "arena": "Quicken Loans Arena",
    "head_coach": "Tyronn Lue",
    "coach_img":"http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667",
    "coachURL": "tyronnlue",
    "color": "wine",
    "current_roster": ["José Calderón", "Jae Crowder", "Kay Felder", "Channing Frye", "Jeff Green", "John Holland", "LeBron James", "Richard Jefferson", "Kyle Korver", "Kevin Love", "Cedi Osman", "Kendrick Perkins", "Derrick Rose", "Iman Shumpert", "J.R. Smith", "Walter Tavares"," Isaiah Thomas", "Tristan Thompson", "Ante Žižić"],
    "titles": {
      "championships": ["2016"],
      "conference_champs": ["2007", "2015", "2016", "2017"],
      "division_champs": ["1976", "2009", "2010", "2015", "2016", "2017"]
    }
};

export function getTeam(teamName) {
  switch (teamName) {
    case "houstonrockets":
      return rockets;
    case "sanantoniospurs":
      return spurs;
    case "clevelandcavaliers":
      return cavs;
    default:
      return rockets;
  }
}
