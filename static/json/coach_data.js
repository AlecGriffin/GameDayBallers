var gregg_popovich = {
    "name": "Gregg Popovich",
    "image_url": "https://i.imgur.com/B1UfYJl.jpg",
    "dob": "January 28, 1949 (Age 68)",
    "current_team": "San Antonio Spurs",
    "country_of_origin": "United States",
    "win_loss_percentage": "69.4",
    "current_roster": ["LaMarcus Aldridge", "Kyle Anderson", "Dāvis Bertāns", "Amida Brimah", "Matt Costello", "Bryn Forbes", "Pau Gasol", "Rudy Gay"," Manu Ginóbili", "Danny Green", "Darrun Hilliard", "Joffery Lauvergne", "Kawhi Leonard", "Patty Mills", "Dejounte Murray", "Tony Parker", "Brandon Paul", "London Perrantes", "Derrick White"],
    "past_teams": ["Air Force (assistant) (1973–1979)",
                   "Pomona-Pitzer (1979–1986)",
                   "Kansas (volunteer asst.) (1986–1987)",
                   "Pomona-Pitzer (1987–1988)",
                   "San Antonio Spurs (assistant) (1988–1992)",
                   "Golden State Warriors (assistant) (1992–1994)"],
    "recognitions": ["NBA champion (1999, 2003, 2005, 2007, 2014)", "NBA Coach of the Year (2003, 2012, 2014)"]
};

var mike_dantoni = {
    "name": "Mike D’Antoni",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mike_D%27Antoni_2010.jpg/440px-Mike_D%27Antoni_2010.jpg",
    "dob": "May 8, 1951 (Age 66)",
    "current_team": "Houston Rockets",
    "country_of_origin": "United States",
    "win_loss_percentage": "53%",
    "current_roster": ["Ryan Anderson", "Trevor Ariza", "Tarik Black", "Bobby Brown", "Clint Capela", "Eric Gordon", "James Harden", "Demetrius Jackson", "Chris Johnson", "Shawn Long", "Luc Mbah a Moute", "Nenê", "Cameron Oliver", "Chunanu Onauku", "Chris Paul", "Tim Quarterman", "Isaiah Taylor", "P.J. Tucker", "Troy Williams", "Zhou Qi"],
    "past_teams": ["Olimpia Milano (1990–1994)",
                   "Benetton Basket (1994–1997)",
                   "Denver Nuggets (assistant) (1997–1998)",
                   "Denver Nuggets (1998–1999)",
                   "Phoenix Suns (assistant) (2002–2003)",
                   "New York Knicks (2008–2012)",
                   "Los Angeles Lakers (2012–2014)",
                   "Philadelphia 76ers (associate HC) (2015–2016)"],
    "recognitions": ["NBA Coach of the Year (2005, 2017)"," NBA All-Star Game head coach (2007)", "LBA champion (1997, 2002)"]
};

var tyronn_lue = {
    "name": "Tyronn Lue",
    "image_url": "http://image.news-herald.com/storyimage/HR/20170530/SPORTS/170539989/AR/0/AR-170539989.jpg&maxh=400&maxw=667",
    "dob": "May 3, 1977 (Age 40)",
    "current_team": "Cleveland Cavaliers",
    "country_of_origin": "United States",
    "win_loss_percentage": "63.4",
    "current_roster": ["José Calderón", "Jae Crowder", "Kay Felder", "Channing Frye", "Jeff Green", "John Holland", "LeBron James", "Richard Jefferson", "Kyle Korver", "Kevin Love", "Cedi Osman", "Kendrick Perkins", "Derrick Rose", "Iman Shumpert", "J.R. Smith", "Walter Tavares"," Isaiah Thomas", "Tristan Thompson", "Ante Žižić"],
    "past_teams": ["Boston Celtics (assistant) (2009-2013)", "Los Angeles Clippers (assistant) (2013-2014)", "Cleveland Cavaliers (associate HC) (2014-2016)"],
    "recognitions": ["NBA champion (2016)", "All-Star Game head coach (2016)"]
};

export function getCoach(coachName) {
  switch (coachName) {
    case "mikedantoni":
      return mike_dantoni;
    case "tyronnlue":
      return tyronn_lue;
    case "greggpopovich":
      return gregg_popovich;
    default:
      return mike_dantoni;
  }
}
