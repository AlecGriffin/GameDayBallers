import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
import time

class GameDayBallersTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome('./chromedriver')
        self.driver.get("http://gamedayballers.me")
        self.assertIn("Game Day Ballers", self.driver.title)

    def test_search(self):
        driver = self.driver

        inputElem = driver.find_element_by_class_name("form-control")

        # Search for Lebron James
        inputElem.clear()
        inputElem.send_keys("Lebron James")
        inputElem.send_keys(Keys.RETURN)
        # Click the Submit button
        driver.find_element_by_css_selector("a.btn.btn-default").click()

        self.assertNotIn("Sorry, there are no", driver.page_source)

        pillsElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".nav-pills li a"))
        pillsElems[2].click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("full-image"))
        self.assertIn("Mike D'Antoni", driver.page_source)

        coachesElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".row a .card.thumbnail-card"))
        coachesElems[0].click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("roster-wrapper"))
        self.assertIn("Trevor Ariza", driver.page_source)
        self.assertIn("2 NBA Coach of the Year (2005, 2017)", driver.page_source)

    def test_players(self):
        driver = self.driver

        navElem = driver.find_element_by_link_text("Players")
        navElem.click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("card"))
        self.assertIn("Tyler Dorsey", driver.page_source)

        sortElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter div.dropdown.btn-group"))
        sortElems[2].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[3].click()
        self.assertIn("Jamel Artis", driver.page_source)

        sortElems[3].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[1].click()
        self.assertIn("LeBron James", driver.page_source)

        sortElems[1].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[2].click()
        self.assertIn("LaMarcus Aldridge", driver.page_source)

        sortElems[0].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[11].click()
        self.assertIn("Trevor Ariza", driver.page_source)

        sortElems[1].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[3].click()
        self.assertIn("Chris Paul", driver.page_source)

        playerElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".row a .card.thumbnail-card"))
        playerElems[1].click()

        cardElem = WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_css_selector(".youtube-card .card-title"))
        self.assertIn("James Harden", driver.page_source)
        assert cardElem.value_of_css_property("background-color") == "rgba(186, 12, 47, 1)"
        self.assertIn("NBA Player of the Week x 13", driver.page_source)

    def test_coaches(self):
        driver = self.driver

        navElem = driver.find_element_by_link_text("Coaches")
        navElem.click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("card"))
        self.assertIn("Brad Stevens", driver.page_source)

        sortElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter div.dropdown.btn-group"))
        sortElems[1].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[1].click()
        self.assertIn("Jason Kidd", driver.page_source)

        coachElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".row a .card.thumbnail-card"))
        coachElems[2].click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("roster-wrapper"))
        self.assertIn("Devin Booker", driver.page_source)
        self.assertIn("Phoenix Suns", driver.page_source)

    def test_teams(self):
        driver = self.driver

        navElem = driver.find_element_by_link_text("Teams")
        navElem.click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("card"))
        self.assertIn("Boston Celtics", driver.page_source)

        sortElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter div.dropdown.btn-group"))
        sortElems[0].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[2].click()
        self.assertIn("Dallas Mavericks", driver.page_source)

        driver.find_element_by_link_text("2").click()
        WebDriverWait(driver, 10).until(lambda driver: len(driver.find_elements_by_css_selector(".row a .card.thumbnail-card")) == 3)
        self.assertIn("San Antonio Spurs", driver.page_source)

        teamElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".row a .card.thumbnail-card"))
        teamElems[1].click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("roster"))
        self.assertIn("Gregg Popovich", driver.page_source)
        self.assertIn("Arena", driver.page_source)

    def test_divisions(self):
        driver = self.driver

        navElem = driver.find_element_by_link_text("Divisions")
        navElem.click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("card"))
        self.assertIn("Central", driver.page_source)

        sortElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter div.dropdown.btn-group"))
        sortElems[3].click()

        dropdownElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".sort-and-filter .open .dropdown-menu li a"))
        dropdownElems[1].click()

        divisionElems = WebDriverWait(driver, 10).until(lambda driver: driver.find_elements_by_css_selector(".row a .card.thumbnail-card"))
        divisionElems[0].click()

        WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_class_name("grid-card"))
        self.assertIn("Southwest", driver.page_source)
        self.assertIn("2004-05 Season", driver.page_source)

    def test_about(self):
        driver = self.driver

        navElem = driver.find_element_by_link_text("About")
        navElem.click()

        self.assertIn("Project Details", driver.page_source)

    def test_home_nav(self):
        driver = self.driver

        navElem = driver.find_element_by_link_text("About")
        navElem.click()

        self.assertIn("Project Details", driver.page_source)

        navElem = driver.find_element_by_link_text("Game Day Ballers")
        navElem.click()

        self.assertIn("Today's Games", driver.page_source)

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
