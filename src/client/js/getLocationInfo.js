/*Global Variables*/
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?'
const username = '&maxRows=5&username=anthonycollini';

/* Function called by event listener */
const makeStuffHappen = () => {
const country = `&countryBias=${document.getElementById('country').value}`;
const city = `placename=${document.getElementById('city').value}`;
	getLocationInfo(baseURL, city, country, username)
		.then((data) => {
			console.log('.then data',data);
			postData('/addLocation',{
			country: country,
			city: city,
			lng: data.postalCodes[0].lng,
			lat: data.postalCodes[0].lat
			});
		});
};

/* Function to GET Web API Data*/
const getLocationInfo = async (baseURL, city, country, username) => {
	const url = baseURL+city+country+username;
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
