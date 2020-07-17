import { getLocationInfo } from './js/getLocationInfo';
import { postData,
		 projectData } from './js/postData';
import { formSubmit } from './js/formSubmit';
import { updateUI } from './js/updateUI';
import { formValidation } from './js/formValidation';

import './styles/style.scss';

/*Global Variables*/
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?'
const username = '&username=anthonycollini';

export {
    getLocationInfo,
	postData,
	formSubmit,
	updateUI,
	formValidation,
	baseURL,
	username,
	projectData
}