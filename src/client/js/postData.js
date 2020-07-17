/* Function to POST data */
const projectData;
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
	.then(data => projectData = data)
}

export { postData,
		 projectData
		};