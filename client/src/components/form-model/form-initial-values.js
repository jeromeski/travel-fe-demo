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
		guide,
		dinner,
		insurance,
		bikeRent,
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
	[start.name]: "",
	[end.name]: "",
	[guide.name]: false,
	[dinner.name]: false,
	[insurance.name]: false,
	[bikeRent.name]: false,
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
