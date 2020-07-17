/* Function to POST data */

const postData = async (url = '', data = {}) => {
	let projectData = [];
	const res = await fetch(url,{
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(data => {
		projectData.push(data);
	});
	Client.updateUI(projectData);
}

export { postData };