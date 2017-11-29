---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

  <img src="https://i.imgur.com/ptTJXyw.png" style="width: 60%; height: auto; margin: auto; border: none; box-shadow: none; background-color: transparent;"/>

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

# INTRODUCTIONS

|  **Andrew Duna**  |   **Regan Brickman**  | **Nihal Dhamani** |
|:---------------:|:------------------:|:-------------------:|
&nbsp;&nbsp; **Alec Griffin** &nbsp;&nbsp; **Vikram Idury**

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

# SCRAPING

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

# DEMONSTRATION
http://gamedayballers.me/

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

## SELF CRITIQUE

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What did we do well?
  - Team
    - Communication
  - Website
    - Design
    - Usability
    - Data Organization

Note:
  Communication: We communicated well regarding each group member’s job and what needed to be accomplished during each project iteration. This allowed us to work effectively, even when our group was unable to meet together. We met regularly before project deadlines to ensure each person had a job to do and that we had a clear vision on what we were trying to achieve.

  Design: The overall website design is appealing. There were parts that needed work, but it communicates the information clearly and effectively.

  Usability: The design allows users confidence in finding the information they need. The site is usable and useful.

  Data Organization: Our data is organized in a logical and understandable way.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What did we learn?
  - Full-Stack Development
  - React, RESTful API
  - If you scrape too much data from the NBA, they'll block your IP
  - LeBron James is like really good at basketball

Note:
  Full-Stack Development: We worked with both front and back-end, obviously. Those of us who were more experienced in front-end got to learn about back-end work, and vice versa.

  React: React’s use of a Virtual Dom, the Regular Dom, and a very fast diffing algorithm to determine what has changed and what needs to be updated leads to faster loading times. This is because the entire Dom doesn’t need to be rebuilt, only the parts that have changed. We also learned how to implement reusable components, and gained knowledge of the power of JSX when used properly.

  RESTful API: We learned how to use this architectural style in order to interact with our data sources using GET, POST, DELETE, and PUT requests. This was new to most of us at the beginning of the project, so we learned quite a bit about it along the way.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What can we do better?
  - Design
  - Loading Times
  - Accessibility
  - Project Organization
  - Front-End vs. Back-End Knowledge

Note:
  Design: While focusing on the functionality of our site, there was not a lot of time to experiment with unique design concepts. We feel like we did a pretty good job for what we had time for, but there is definitely room for improvement.

  Loading Times: Many of our data models take quite some time to load. We could have done more to optimize this loading time, like caching data.

  Accessibility: While we did some things, like adding alt tags to images, we could do more to make our site more accessible to screen-readers. We could also provide alternate color schemes for those with visual impairments.

  Project Organization: We do many things in similar ways, and could have redefined parts of the code to remove duplicates. There are also many other ways we could have divided our React Components for reusability.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What puzzles us?
  - About Page Github Error

Note:
  We would sometimes get an error on our about page, and we could not figure out where it came from.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

## OTHER CRITIQUE: PLAYLISTR
http://www.hackappellas.me/

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What did they do well?
  - Sorting
  - Relevant Links to Spotify Songs
  - Design

Note:
  Sorting: The design of the sidebar made it easy to see what we were sorting and filtering by, and easy to modify those queries.

  Relevant Links: Including the Spotify links made the site something far more than just informational. The relevancy of these links allows users to perform a search on this site, and then hit the link to actually listen to what they are reading about.

  Design: Their use of material design and "cards" to display their information helped organize the grid pages, and looked pretty good.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What did we learn from their website?
  - Scraping starting at playlists
  - Code styling tool: Prettier

Note:
  Scraping: The concept of starting by scraping playlists and following the chain can lead to a wide variety of information. That was a very quick solution to gathering a large amount of data without having to scrape for every song ever, and then match it to albums and playlists.

  Tool: Looking at the tools used, Prettier is something that we had not heard of and would be interested in using in the future.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What can they do better?
  - Organizing Data
  - Search
  - Pagination
  - Filtering
  - Variety

Note:
  Organizing Data: The display of any text data is usually just a chunk or a long
  list, making it hard to read. One could utilize spacing, boldness, and
  alignment to provide greater readability. Furthermore, some data models are
  not accurate. For example: Kanye West and Taylor Swift are listed as
  “Pop Christmas” artists and the New Music Friday Playlist displays 0 tracks.

  Search: Few results appear per page, even when many results are
  returned. We believe that this is because of pagination. Also, when you search
  Pop Christmas, nothing shows up!

  Pagination: It appears that they handle pagination on the backend, which is most
  likely leading to the search results appearing on the page they would have
  appeared on when all the results are displayed.

  Filtering: We would like to see more filtering options. Right now, all we can
  do is filter OUT items based on the words that appear in their body, which is
  not entirely useful and pretty unclear. If I were to want to find country
  songs, I would have to enter every genre other than country. We would like to
  see more filtering options, such as genre and release date.

  Variety: On their about page, they talk about wanting their site to offer broad
  musical discovery, but we found that there were not that various of genre's
  on there. For example, there are no country songs.

  API: The API was difficult to understand. When visualizing their data, we did
  not have a way to acquire all of the datas for Artists, Tracks, Playlists, and
  Albums in one API call per model.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

### What puzzles us about their website?
  - Where did inaccuracies come from?
  - Duplicate Artists

Note:
  Many artists, including Taylor Swift and Kanye West are listed as Pop Christmas.
  We are not sure where that comes from, since you were pulling data from Spotify.
  When we search "pop christmas" nothing shows up though! WHAT IS POP CHRISTMAS?

  On the "Artists" page, some artists appear multiple times, including Post Malone,
  Travis Scott. This may come if they appear in multiple playlists from the way
  that they are scraping, but I would assume one could easily filter out duplicates.

---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

# VISUALIZATION

Note:
  Exercise the API of another group in an interesting and useful way.
  Use D3.
  The page must have a clear English description and be rendered attractively.


---?image=https://i.imgur.com/CvADPLo.jpg&size=cover

  <img src="https://i.imgur.com/ptTJXyw.png" style="width: 60%; height: auto; margin: auto; border: none; box-shadow: none; background-color: transparent;"/>
