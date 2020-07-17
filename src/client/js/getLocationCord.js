/* Function to GET Web API Data*/
const getLocationCord = async (baseURL, city, country = 'texas', username) => {
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

export { getLocationCord };