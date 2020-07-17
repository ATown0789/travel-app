/* Function called by event listener */
const formSubmit = (event) => {
	event.preventDefault();
	Client.formValidation();
	const country = document.getElementById('country').value;
	const city = document.getElementById('city').value;
	const date = document.getElementById('date').value;
	Client.getLocationCord(Client.baseURL, city, country, Client.username)
		.then((data) => {
			//Validate the information is for the correct location
			const isCityName = (obj) => 
				obj.adminName2.toLowerCase() === city.toLowerCase();
			const index = data.postalCodes.findIndex(isCityName);
			Client.postData('http://localhost:3000/addLocationCord',{
			country: country,
			city: data.postalCodes[index].adminName2,
			lng: data.postalCodes[index].lng,
			lat: data.postalCodes[index].lat,
			placeName: data.postalCodes[index].placeName,
			date: date
			});
		});
	
};

export { formSubmit };