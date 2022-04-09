/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
// import moment from "moment";
import reviewFormModel from "./review-form-model";

const {
	formField: { postRating, author, email, postContent }
} = reviewFormModel;

const emailRegEx =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const reviewValidationSchema = Yup.object().shape({
	[postRating.name]: Yup.string().required(`${postRating.requiredErrorMsg}`),
	[author.name]: Yup.string().required(`${author.requiredErrorMsg}`),
	[email.name]: Yup.string()
		.required(`${email.requiredErrorMsg}`)
		.test("format", `${email.invalidErrorMsg}`, (value) => emailRegEx.test(value)),
	[postContent.name]: Yup.string()
		.required(`${postContent.requiredErrorMsg}`)
		.min(5, `${postContent.invalidErrorMsg}`)
		.max(200, `${postContent.invalidErrorMsg}`)
});

export default reviewValidationSchema;
