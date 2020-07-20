const weatherInfo = (weatherData, date, dateBack) => {
	/***
	*function scope variables
	*/
	const MS_T0_DAY = 3600000 * 24;
	const weatherCont = document.getElementById('weatherCont');
	
	//variables for date calculations
	const startTrip = new Date(date).getTime();
	const startWeather = new Date(weatherData.data[0].datetime).getTime();
	const endTrip = new Date (dateBack).getTime();
	const endWeather = new Date (weatherData.data[15].datetime).getTime();	
	
	//Calculate the time in days between today and date of trip
	const diffTime = startTrip - startWeather;
	let diffTimeDays = diffTime / MS_T0_DAY;
	let endForcast = 16;
	
	//options for date display in weather cards
	const options = {
		month: 'long',
		day: 'numeric' };
	const docFrag = document.createDocumentFragment();
	/*End of function scope variables*/
	
	//set end of forcast if return date is in range
	if(endTrip < endWeather) {
		endForcast = 17 - ((endWeather - endTrip) / MS_T0_DAY);
	}
	
	//if trip is out of range display full forcast
	if(diffTimeDays > 16) {
		const h3El = document.createElement('h3');
		const h4El = document.createElement('h4');
		h3El.innerHTML = 'Weather forcast not available more than 16 days ahead';
		h4El.innerHTML = 'Here is what the weather is like now';
		weatherCont.insertAdjacentElement('afterbegin',h3El);
		weatherCont.insertAdjacentElement('beforeend',h4El);
		diffTimeDays = 0;
		endForcast = 16;
	}
		
	//for loop to create weather cards
	for(let i = diffTimeDays + 1; i < endForcast; i++) {
		const dailyData = weatherData.data[i];
		const datetime = new Date(dailyData.datetime);
		const icon = dailyData.weather.icon;
		
		//Create Elements for weather cards
		const divEl = document.createElement('div');
		const h3El = document.createElement('h3');
		const hiTempP = document.createElement('p');
		const lowTempP = document.createElement('p');
		const precipP = document.createElement('p');
		const iconImage = document.createElement('img');
		
		//Assign attributes to weather card elements
		divEl.setAttribute('class','weatherCard');
		h3El.setAttribute('class','weatherHeader');
		iconImage.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`
		
		//Assign values to weather card elements
		h3El.innerHTML = `${datetime.toLocaleDateString(undefined, options)}`;
		hiTempP.innerHTML = `${dailyData.high_temp}&deg`;
		lowTempP.innerHTML = `${dailyData.low_temp}&deg`;
		precipP.innerHTML = `${dailyData.pop}%`;
		
		//insert elements into container div
		divEl.insertAdjacentElement('afterbegin',h3El);
		divEl.insertAdjacentElement('beforeend',hiTempP);
		divEl.insertAdjacentElement('beforeend',lowTempP);
		divEl.insertAdjacentElement('beforeend',iconImage);
		divEl.insertAdjacentElement('beforeend',precipP);
		
		//insert container div into docFrag to avoid multiple rerenders
		docFrag.appendChild(divEl);
	}
	
	//insert docFrag to DOM
	weatherCont.appendChild(docFrag);
	
}

export { weatherInfo };