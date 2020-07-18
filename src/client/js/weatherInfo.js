const weatherInfo = (weatherData, date) => {
	
	const city = weatherData.city_name;
	const country = weatherData.country_code;
	const date1 = new Date(date);
	const date2 = new Date(weatherData.data[0].datetime);
	const options = { 
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric' };
	
	//Calculate the time in days between today and date of trip
	const diffTime = date1.getTime() - date2.getTime();
	const diffTimeDays = diffTime / (3600000 * 24);
	
	if(diffTimeDays > 16)
		console.log('Weather forcast not available more than 16 days ahead');
	else {
		const docFrag = document.createDocumentFragment();
		let dayCount = 1;
		for(let i = diffTimeDays + 1; i < 16; i++) {
			const dailyData = weatherData.data[i];
			const datetime = new Date(dailyData.datetime);
			
			//Create Elements for weather cards
			const divEl = document.createElement('div');
			const h3El = document.createElement('h3');
			const dateP = document.createElement('p');
			const hiTempP = document.createElement('p');
			const lowTempP = document.createElement('p');
			const precipP = document.createElement('p');
			//Assign classes to weather card elements
			divEl.setAttribute('class','weatherCont');
			h3El.setAttribute('class','weatherHeader');
			//Assign values to weather card elements
			
			h3El.innerHTML = `Weather on Day ${dayCount}`;
			dateP.innerHTML = `${datetime.toLocaleDateString(undefined, options)}`;
			hiTempP.innerHTML = `High Temp: ${dailyData.high_temp}&deg`;
			lowTempP.innerHTML = `Low Temp: ${dailyData.low_temp}&deg`;
			precipP.innerHTML = `Chance of Rain: ${dailyData.pop}%`;
			
			divEl.insertAdjacentElement('afterbegin',h3El);
			divEl.insertAdjacentElement('beforeend',dateP);
			divEl.insertAdjacentElement('beforeend',hiTempP);
			divEl.insertAdjacentElement('beforeend',lowTempP);
			divEl.insertAdjacentElement('beforeend',precipP);
			
			docFrag.appendChild(divEl);
			dayCount++;
		}
		document.body.appendChild(docFrag);
	}
	
	//insert docfrag into dom element
	
}

export { weatherInfo };