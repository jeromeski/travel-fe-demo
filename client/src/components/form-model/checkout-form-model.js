/* eslint-disable import/no-anonymous-default-export */
export default {
	formId: "checkout",
	formField: {
		firstName: {
			name: "firstName",
			label: "First name*",
			requiredErrorMsg: "First name is required"
		},
		lastName: {
			name: "lastName",
			label: "Last name*",
			requiredErrorMsg: "Last name is required"
		},
		email: {
			name: "email",
			label: "Email*",
			requiredErrorMsg: "Email is required",
			invalidErrorMsg: "Invalid Email"
		},
		confirmEmail: {
			name: "confirmEmail",
			label: "Confirm Email*",
			requiredErrorMsg: "Confirm Email is required",
			differentErrorMsg: "Email doesn't match"
		},
		phone: {
			name: "phone",
			label: "Phone*",
			requiredErrorMsg: "Phone is required",
			invalidErrorMsg: "Invalid Phone Number"
		},
		start: {
			name: "start",
			label: "Select Start Date*",
			requiredErrorMsg: "Start Date is required"
		},
		end: {
			name: "end",
			label: "Select End Date*",
			requiredErrorMsg: "Start Date is required"
		},
		guide: {
			name: "guide",
			value: false
		},
		dinner: {
			name: "dinner",
			value: false
		},
		insurance: {
			name: "insurance",
			value: false
		},
		bikeRent: {
			name: "bikeRent",
			value: false
		},
		nameOnCard: {
			name: "nameOnCard",
			label: "Name on card*",
			requiredErrorMsg: "Name on card is required"
		},
		cardNumber: {
			name: "cardNumber",
			label: "Card number*",
			requiredErrorMsg: "Card number is required",
			invalidErrorMsg: "Card number is not valid (e.g. 4111111111111)"
		},
		expiryDate: {
			name: "expiryDate",
			month: {
				name: "expiryDate.month",
				label: "Month*",
				requiredErrorMsg: "Required",
				invalidErrorMsg: "Month is not valid"
			},
			year: {
				name: "expiryDate.year",
				label: "Year*",
				requiredErrorMsg: "Required",
				invalidErrorMsg: "Year is not valid"
			},
			invalidErrorMsg: "Invalid Expiry Date"
		},
		cvv: {
			name: "cvv",
			label: "CVV*",
			requiredErrorMsg: "Required",
			invalidErrorMsg: "CVV is invalid (e.g. 357)"
		},
		country: {
			name: "country",
			label: "Country*",
			requiredErrorMsg: "Country is required"
		},
		street1: {
			name: "street1",
			label: "Street Line 1*",
			requiredErrorMsg: "Street is required"
		},
		street2: {
			name: "street2",
			label: "Street Line 2"
		},
		city: {
			name: "city",
			label: "City*",
			requiredErrorMsg: "City is required"
		},
		state: {
			name: "state",
			label: "State*",
			requiredErrorMsg: "State is required"
		},
		postalCode: {
			name: "postalCode",
			label: "Postal Code*",
			requiredErrorMsg: "Postal Code is required",
			invalidErrorMsg: "Postal Code is not valid (e.g. 70000)"
		},
		additionalInfo: {
			name: "additionalInfo",
			label: "Additional Information"
		},
		tos: {
			name: "tos",
			label: "I accept terms and conditions and general policy.",
			requiredErrorMsg: "Please accept Terms and Conditions to continue"
		}
	}
};
