const weatherInfo = (weatherData, date, dateBack) => {
	
	console.log(weatherData)
	const MS_T0_DAY = 3600000 * 24;
	const weatherCont = document.getElementById('weatherCont');
	const date1 = new Date(date);
	const date2 = new Date(weatherData.data[0].datetime);
	const date3 = new Date (dateBack);
	const date4 = new Date (weatherData.data[15].datetime);
	const startTrip = date1.getTime();
	const startWeather = date2.getTime();
	const endTrip = date3.getTime();
	const endWeather = date4.getTime();
	
	
	const options = {
		month: 'long',
		day: 'numeric' };
	
	//Calculate the time in days between today and date of trip
	const diffTime = startTrip - startWeather;
	let diffTimeDays = diffTime / MS_T0_DAY;
	let endForcast = 16;
	
	if(endTrip < endWeather) {
		endForcast = 17 - ((endWeather - endTrip) / MS_T0_DAY);
	}
	
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
		const docFrag = document.createDocumentFragment();
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
			
			divEl.insertAdjacentElement('afterbegin',h3El);
			divEl.insertAdjacentElement('beforeend',hiTempP);
			divEl.insertAdjacentElement('beforeend',lowTempP);
			divEl.insertAdjacentElement('beforeend',iconImage);
			divEl.insertAdjacentElement('beforeend',precipP);
			
			docFrag.appendChild(divEl);
		}
		
		weatherCont.appendChild(docFrag);
	
}

export { weatherInfo };