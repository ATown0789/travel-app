import { getLocationCord } from './js/getLocationCord';
import { postData } from './js/postData';
import { formSubmit } from './js/formSubmit';
import { updateUI } from './js/updateUI';
import { formValidation } from './js/formValidation';
import { weatherInfo } from './js/weatherInfo';
import { config } from '../../config';
import { reload } from './js/reload';

import './styles/style.scss';

/*APP Global Variables*/
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?'
const username = config.GEO_KEY;

export {
    getLocationCord,
	postData,
	formSubmit,
	updateUI,
	formValidation,
	weatherInfo,
	reload,
	baseURL,
	username
}