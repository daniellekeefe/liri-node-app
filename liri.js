require("dotenv").config();
let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);


const moment = require('moment'); //instructions call for bands in twon to use node
moment().format();
const axios = require('axios'); //info for APIs movie and concert-this

const fs = require('fs'); //Node file share needed
// Write statement so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//write function for concert-this

//write function for spotify-this-song

//write function for movie-this

//write function for do-what-it-says