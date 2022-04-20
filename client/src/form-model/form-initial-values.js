/* eslint-disable import/no-anonymous-default-export */
import checkoutFormModel from "./checkout-form-model";
const {
	formField: {
		firstName,
		lastName,
		email,
		confirmEmail,
		phone,
		start,
		end,
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
		tos,
		bikeRent,
		insurance,
		dinner,
		guide
	}
} = checkoutFormModel;

const CHECKOUT_INITIAL_VALUES = {
	[bikeRent.name]: 0,
	[insurance.name]: 0,
	[dinner.name]: 0,
	[guide.name]: 0,
	[firstName.name]: "",
	[lastName.name]: "",
	[email.name]: "",
	[confirmEmail.name]: "",
	[phone.name]: "",
	[start.name]: "",
	[end.name]: "",
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

export default CHECKOUT_INITIAL_VALUES;
