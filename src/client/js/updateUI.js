const updateUI = async () => {
	
	const projectData = await Client.getInfo()
		.then(data => console.log('update ui data',data))
	
	console.log('updating ui', projectData);
	
	
}

export { updateUI };