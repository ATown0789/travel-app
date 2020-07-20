//import file to test
import { formValidation } from '../src/client/js/formValidation.js'

//test if the formValidation function is defined
describe("Testing formValidation", () => {
			test("Testing the formValidation() function is defined", () => {
				expect(formValidation).toBeDefined();
			})
	});