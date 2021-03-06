/* Function to GET Web API Data*/
const getLocationCord = async (baseURL, city, country = 'texas', username) => {
	const url = `${baseURL}q=${encodeURI(city)},${encodeURI(country)}${username}`;
	const res = await fetch(url);
	try{
		const data = await res.json();
		return data;
	}
	catch(error){
		console.log('error', error);
	}
}

export { getLocationCord };