const formValidation = (event) => {
	event.preventDefault();

	const testReg = /[\!\@\#\$\%\^\&\*\(\)\_\=\+\{\[\}\]\\\"\|\;\:\/\.\>\,\<\?]/;

	const country = document.getElementById('country').value;
	const city = document.getElementById('city').value;
	const date = document.getElementById('date').value;

	const today = new Date()
	const todayDate = today.toLocaleDateString();
	const todayTime = Math.floor(new Date(todayDate).getTime() / (1000*3600*24));
	const trip = Math.floor(new Date(date).getTime() / (1000*3600*24));

	if(country === '' || city === '' || date === '')
		alert('Please enter all form fields');
	else if(testReg.test(country) || testReg.test(city) || testReg.test(date))
		alert('Please enter only alphanumeric characters');
	else if(todayTime > trip)
		alert(`Please enter a date on or after ${todayDate}`)
	else
		Client.formSubmit();
}

export { formValidation };