/* eslint-disable import/no-anonymous-default-export */
export default {
	formId: "review",
	formField: {
		postRating: {
			name: "postRating",
			label: "Your Rating",
			requiredErrorMsg: "Rating is required"
		},
		author: {
			name: "author",
			label: "Fullname",
			requiredErrorMsg: "Fullname is required"
		},
		email: {
			name: "email",
			label: "Email",
			requiredErrorMsg: "Email is required",
			invalidErrorMsg: "Invalid Email"
		},
		postContent: {
			name: "postContent",
			label: "Review",
			requiredErrorMsg: "Your review is required",
			invalidErrorMsg: "Must be at least 2 characters or more."
		}
	}
};
