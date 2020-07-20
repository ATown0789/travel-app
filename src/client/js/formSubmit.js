/* Function called by event listener */
const formSubmit = () => {
	const country = document.getElementById('country').value;
	const city = document.getElementById('city').value;
	const date = document.getElementById('date').value;
	const dateBack = document.getElementById('dateBack').value;
	Client.getLocationCord(Client.baseURL, city, country, Client.username)
		.then((data) => {
			//post data to server side 
			Client.postData('http://localhost:3000/addLocationCord',{
			country: country[0].toUpperCase()+country.slice(1),
			city: city[0].toUpperCase()+city.slice(1),
			lng: data.results[0].geometry.lng,
			lat: data.results[0].geometry.lat,
			date: date,
			dateBack: dateBack
			});
		});
	document.getElementById('travelForm').classList.add('hide');
};

export { formSubmit };