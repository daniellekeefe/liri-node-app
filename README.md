# liri-node-app
# LIRI-Node-Bot
 
Through this assignment I created LIRI. LIRI is similar to the iPhone's SIRI. SIRI is a Speech Interpretation and Recognition Interface, LIRI was designed to be a Language Interpretation and Recognition Interface. 
 
**LIRI** is a command line node app that takes in parameters for each search criteria, song, concerts, movie or random text file search. 
 
**LIRI** harnesses the power of JS and node packages to return robust information to the user via the command line. 
 
 
Packages & APIs Leveraged:
* Packages
    * Moment: Date & Time
    * Axios: Bands in Town, Spotify and OMDB APIs
 
* API
    * Bands in Town (T&C state only Band of Managers use)
    * Spotify
    * OMDB
 
**Project is organized into** two JS files. 

* **keys.js**: placeholder for the private .env file that contains the private credentials to the spotify API. 
* **liri.js**: Where the magic happens. This JS file contains all: 
Variables for supporting packages & APIs. 
* **Switch statement**: allowing the switch statement to be evaluated once, the value of the expression is compared for each case. If a match the block of code will be executed. 
* **Functions** each search, concert-this, spotify-this-song, movie-this and do-what-it-says. When calling through the command line, defined information from each search will be displayed via the console.log.
 
App Use: 
Open New Terminal ensure you are in the correct folder. 
**Call on the functions**: There are four possible scenarios, outlined below. 
* Functions
    * node liri.js concert-this ex. Florence & The Machine
    * node liri.js spotify-this-song ex. The Scientist
    * node liri.js movie-this Name of ex. BIG
    * node liri.js do-what-it-says  simply hit enter, the text in the random.txt file will be executed. 
 
 
* **GitHub Repo**: https://github.com/daniellekeefe/liri-node-app 
[GitHub](https://github.com/daniellekeefe/liri-node-app)
* **Liri-Node-Bot Video Link**: https://youtu.be/bnZWQlI76KU 


* **Various Screen Shots**: https://docs.google.com/document/d/17EHcM7sYLOfI3Qb6H7Xy8r0ZMx34zSL6Ygp2LAHOSko/edit?usp=sharing 

 
*Danielle Keef was lead developer in this project, receiving guidance from Jim Dhima, Dan Levinson, Justin Rice, Nick Groesh and Irving Angulo.*
