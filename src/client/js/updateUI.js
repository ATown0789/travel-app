const updateUI = (projectData) => {
	//name element constants
	const responseCont = document.getElementById('responseCont');
	const locationEl = document.getElementById('location');
	const dateEl = document.getElementById('dateRes');
	const weatherEl = document.getElementById('weather');
	const imageEl = document.getElementById('locationImage');

	//get values from projectData
	const city = projectData[0].locationInfo.city;
	const country = projectData[0].locationInfo.country;
	const weatherData = projectData[0].weatherData;
	const imageURL = projectData[0].locationImage;
	const date = projectData[0].date;
	const leaveDate = new Date(date);
	const dateBack = projectData[0].dateBack;

	//make date display nicely
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	const changeDate = new Date(`${leaveDate.getMonth() + 1}-${leaveDate.getDate()+1}-${leaveDate.getFullYear()}`);
	const displayDate = changeDate.toLocaleString(undefined, options);
	//Update UI
	responseCont.classList.remove('hide');
	locationEl.innerHTML = `You're going to ${city}, ${country}`;
	dateEl.innerHTML = `You're leaving on ${displayDate}`;
	imageEl.src = imageURL;
	Client.weatherInfo(weatherData, date, dateBack);
}

export { updateUI };