/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";
// import moment from "moment";
import reviewFormModel from "./review-form-model";

const {
	formField: { rating, firstName, lastName, email, subject, review }
} = reviewFormModel;

const emailRegEx =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const reviewValidationSchema = Yup.object().shape({
	[rating.name]: Yup.string().required(`${rating.requiredErrorMsg}`),
	[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
	[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
	[email.name]: Yup.string()
		.required(`${email.requiredErrorMsg}`)
		.test("format", `${email.invalidErrorMsg}`, (value) => emailRegEx.test(value)),
	[subject.name]: Yup.string()
		.required(`${subject.requiredErrorMsg}`)
		.min(2, `${subject.invalidErrorMsg}`)
		.max(100, `${subject.invalidErrorMsg}`),
	[review.name]: Yup.string()
		.required(`${review.requiredErrorMsg}`)
		.min(5, `${review.invalidErrorMsg}`)
		.max(200, `${subject.invalidErrorMsg}`)
});

export default reviewValidationSchema;
