const updateUI = (projectData) => {
	
	const locationEl = document.getElementById('location');
	const dateEl = document.getElementById('dateRes');
	const weatherEl = document.getElementById('weather');
	const imageEl = document.getElementById('locationImage');
	
	const city = projectData[0].locationInfo.city;
	const country = projectData[0].locationInfo.country;
	const weatherData = projectData[0].weatherData;
	const imageURL = projectData[0].locationImage;
	const date = projectData[0].date;
	
	locationEl.innerHTML = `You're going to ${city}, ${country}`;
	dateEl.innerHTML = `You're leaving on ${date}`;
	imageEl.src = imageURL;
	
	console.log(weatherData);
	
}

export { updateUI };