/***
*Server setup
*/

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */

//dotenv for .env files to hide api keys
const dotenv = require('dotenv')
dotenv.config();

const bodyParser = require('body-parser');
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Use fetch to make serverside API calls
const fetch = require('node-fetch');

// Initialize the main project folder
app.use(express.static('wj-app'));

// Callback to debug
const listening = () => {
	console.log('server running');
	console.log(`running on localhost: ${port}`);
};

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

//API Keys
const weatherbit_key = process.env.weatherbit_key;

/*End Server Setup*/

/***
* Post routes for receiving information
* from client side
*/

// Callback function to complete POST '/addJournal'
const addLocationInfo = (req, res) => {
	const reqBody = req.body;
	const locationData = {
		country: reqBody.country,
		city: reqBody.city,
		lng: reqBody.lng.toFixed(3),
		lat: reqBody.lat.toFixed(3),
		placeName: reqBody.placeName,
	}
	projectData.locationInfo = locationData;
	projectData.date = reqBody.date
	console.log(projectData);
	const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily/?&lat=${projectData.locationInfo.lat}&lon=${projectData.locationInfo.lng}&key=${weatherbit_key}`;
	fetch(weatherURL)
		.then(res => res.json())
		.then(json => projectData.weatherData = json);
	res.send(projectData);
}

// Initialize '/addLocationInfo' Post Route
app.post('/addLocationInfo', addLocationInfo);

/*End Post Routes*/

/***
* Get Routes to send information 
* back to client side
*/



/*End Get Routes*/




