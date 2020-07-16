/* Function to POST data */
const postData = async (url = '', data = {}) => {
	const res = await fetch(url,{
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(data => console.log(data))
}

export { postData };