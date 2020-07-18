import { getLocationCord } from './js/getLocationCord';
import { postData } from './js/postData';
import { formSubmit } from './js/formSubmit';
import { updateUI } from './js/updateUI';
import { formValidation } from './js/formValidation';
import { weatherInfo } from './js/weatherInfo';


import './styles/style.scss';

/*Global Variables*/
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?'
const username = '&username=anthonycollini';

export {
    getLocationCord,
	postData,
	formSubmit,
	updateUI,
	formValidation,
	weatherInfo,
	baseURL,
	username
}