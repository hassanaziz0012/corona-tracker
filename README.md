# Corona Tracker
A very simple React Native app to track Coronavirus cases, recoveries, deaths, etc. around the world. All information comes from the World-O-Meters website.
This is what the app looks like:

![App](https://i.imgur.com/GSuKTtW.jpg)

When you run the app, it will send an HTTP request to the server to get the data. The server is built using Python Flask and is hosted on Heroku. The server will use 
BeautifulSoup for web scraping. It will scrape the required data from the World-O-Meters website and will return a JSONResponse to the app. The app will render the 
information received.

You can also click the "Refresh" button to refresh the data. This will send another request to the server to scrape and return new, updated data.
