/* Function called by event listener */
const formSubmit = () => {
	const country = document.getElementById('country').value;
	const city = document.getElementById('city').value;
	const date = document.getElementById('date').value;
	const dateBack = document.getElementById('dateBack').value;
	Client.getLocationCord(Client.baseURL, city, country, Client.username)
		.then((data) => {
			console.log(data);
			//post data to server side
			let useCity = false;				//post data to server side 
			/***	
			*Validate the information is for the correct location	
			*/	
			const isCityName = (obj) => {	
				if(obj.adminName2 == undefined) //checks to make sure the adminName2 is defined	
					return false;	
				else	
				 return obj.adminName2.toLowerCase() === city.toLowerCase(); //return index if match found	
			}	

			const isPlaceName = (obj) => {	
				useCity = true;	 //if no adminName2 is found us the City name for UI	
				return obj.placeName.toLowerCase() === city.toLowerCase(); //return index of placeName match	
			}	
			let index = data.postalCodes.findIndex(isCityName);	
			if(index < 0)	
				index = data.postalCodes.findIndex(isPlaceName); // if no match found in adminName2 check in placeName	
			if(index < 0){ // if still no match is found throw an alert to check for spelling.	
				alert(`Unfortunately we cannot find any information on
${city}, ${country} please check your spelling,
ensure you're entering a city and not a country/state
and try again.`)
				Client.reload();
			}
			Client.postData('http://localhost:3000/addLocationCord',{
			country: country,				
			city: useCity ? city[0].toUpperCase()+city.slice(1) : data.postalCodes[index].adminName2,				city: city[0].toUpperCase()+city.slice(1),
			lng: data.postalCodes[index].lng,
			lat: data.postalCodes[index].lat,
			placeName: data.postalCodes[index].placeName,	
			date: date,
			dateBack: dateBack
			});
		});
	document.getElementById('travelForm').classList.add('hide');
};

export { formSubmit };