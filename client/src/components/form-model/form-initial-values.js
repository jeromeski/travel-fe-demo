/* eslint-disable import/no-anonymous-default-export */
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
		country,
		street1,
		street2,
		city,
		state,
		postalCode,
		additionalInfo,
		tos
	}
} = checkoutFormModel;

const checkout = {
	[firstName.name]: "",
	[lastName.name]: "",
	[email.name]: "",
	[confirmEmail.name]: "",
	[phone.name]: "",
	[nameOnCard.name]: "",
	[cardNumber.name]: "",
	[expiryDate.name]: { month: "", year: "" },

	[cvv.name]: "",
	[country.name]: "",
	[street1.name]: "",
	[street2.name]: "",
	[city.name]: "",
	[state.name]: "",
	[postalCode.name]: "",
	[additionalInfo.name]: "",
	[tos.name]: ""
};

export default checkout;