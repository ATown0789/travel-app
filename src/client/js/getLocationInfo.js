/*Global Variables*/
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?'
const username = '&maxRows=5&username=anthonycollini';

/* Function called by event listener */
const makeStuffHappen = () => {
const country = document.getElementById('country').value;
const city = document.getElementById('city').value;
	getLocationInfo(baseURL, city, country, username)
		.then((data) => {
			//Validate the information is for the correct location
			const isCityName = (obj) => 
				obj.adminName2.toLowerCase() === city.toLowerCase();
			const index = data.postalCodes.findIndex(isCityName);
			postData('/addLocationInfo',{
			country: country,
			city: city,
			lng: data.postalCodes[index].lng,
			lat: data.postalCodes[index].lat
			});
		});
};

/* Function to GET Web API Data*/
const getLocationInfo = async (baseURL, city, country, username) => {
	const url = `${baseURL}placename=${city}&countrybias=${country}${username}`;
	const res = await fetch(url);
	try{
		const data = await res.json();
		console.log('fetch data', data);
		return data;
	}
	catch(error){
		console.log('error', error);
	}
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
	const res = await fetch(url,{
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
		try {
			const newData = await res.json();
			return newData;
		}
		catch(error){
			console.log('error', error);
		}
}

/* Event listener to add function to existing HTML DOM element */
const getInfo = document.getElementById('getInfo');
getInfo.addEventListener('click', makeStuffHappen);
