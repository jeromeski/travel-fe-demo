/* eslint-disable import/no-anonymous-default-export */
export default {
	formId: "review",
	formField: {
		rating: {
			name: "rating",
			label: "Your Rating",
			requiredErrorMsg: "Rating is required"
		},
		firstName: {
			name: "firstName",
			label: "First name",
			requiredErrorMsg: "First name is required"
		},
		lastName: {
			name: "lastName",
			label: "Last name",
			requiredErrorMsg: "Last name is required"
		},
		email: {
			name: "email",
			label: "Email",
			requiredErrorMsg: "Email is required",
			invalidErrorMsg: "Invalid Email"
		},
		subject: {
			name: "subject",
			label: "Subject",
			requiredErrorMsg: "Subject is required",
			invalidErrorMsg: "Must be at least 2 characters or more."
		},
		review: {
			name: "review",
			label: "Review",
			requiredErrorMsg: "Your review is required",
			invalidErrorMsg: "Must be at least 2 characters or more."
		}
	}
};
