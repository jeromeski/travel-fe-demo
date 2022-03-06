/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
// import moment from "moment";
import checkoutFormModel from "./checkout-form-model";
const {
	formField: {
		firstName,
		lastName,
		email,
		confirmEmail,
		phone,
		nameOnCard,
		cardNumber,
		expiryDate,
		cvv,
		street1,
		city,
		state,
		postalCode,
		country,
		tos
	}
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const emailRegEx =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const validationSchema = Yup.object().shape({
	[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
	[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
	[email.name]: Yup.string()
		.required(`${email.requiredErrorMsg}`)
		.test("format", `${email.invalidErrorMsg}`, (value) => emailRegEx.test(value)),
	[confirmEmail.name]: Yup.string()
		.required(`${confirmEmail.requiredErrorMsg}`)
		.oneOf([Yup.ref("email"), null], "Email must match"),
	[phone.name]: Yup.string()
		.required("Phone number is required")
		.test("len", `${phone.invalidErrorMsg}`, (val) => val && val.length === 9),
	[country.name]: Yup.string().nullable().required(`${country.requiredErrorMsg}`),
	[street1.name]: Yup.string().required(`${street1.requiredErrorMsg}`),
	[city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
	[state.name]: Yup.string().nullable().required(`${state.requiredErrorMsg}`),
	[postalCode.name]: Yup.string()
		.required(`${postalCode.requiredErrorMsg}`)
		.test("len", `${postalCode.invalidErrorMsg}`, (val) => val && val.length === 5),
	[tos.name]: Yup.string().required(`${tos.requiredErrorMsg}`),
	[nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
	[cardNumber.name]: Yup.string()
		.required(`${cardNumber.requiredErrorMsg}`)
		.matches(visaRegEx, cardNumber.invalidErrorMsg),
	[expiryDate.name]: Yup.object().shape({
		month: Yup.string().required(`${expiryDate.month.requiredErrorMsg}`),
		year: Yup.string().required(`${expiryDate.year.requiredErrorMsg}`)
	}),
	// [expiryDate.name]: Yup.string()
	// 	.nullable()
	// 	.required(`${expiryDate.requiredErrorMsg}`)
	// 	.test("expDate", expiryDate.invalidErrorMsg, (val) => {
	// 		if (val) {
	// 			const startDate = new Date();
	// 			const endDate = new Date(2050, 12, 31);
	// 			if (moment(val, moment.ISO_8601).isValid()) {
	// 				return moment(val).isBetween(startDate, endDate);
	// 			}
	// 			return false;
	// 		}
	// 		return false;
	// 	}),
	[cvv.name]: Yup.string()
		.required(`${cvv.requiredErrorMsg}`)
		.test("len", `${cvv.invalidErrorMsg}`, (val) => val && val.length === 3),
	[tos.name]: Yup.boolean().required(`${tos.requiredErrorMsg}`)
});

export default validationSchema;
