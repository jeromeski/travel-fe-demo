import React, { Fragment } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import _ from "lodash";
// import CreateRating from "./CreateRating";
import reviewFormModel from "components/form-model/review-form-model";
import reviewValidationSchema from "components/form-model/review-validation-schema";
import { Rating } from "react-simple-star-rating";
import { format } from "date-fns";

const { formField } = reviewFormModel;

const initialValues = {
	id: "",
	postRating: "",
	author: "",
	authorThumb: "img20",
	email: "",
	postContent: "",
	postedOn: ""
};

function ReviewForm({ setReviews }) {
	const uuid = _.uniqueId("post_");
	const date = format(Date.now(), "MMMM dd yyyy");
	const handleSubmit = (values, { resetForm }) => {
		const newValues = { ...values, id: uuid, postedOn: date };
		setReviews((prev) => ({ ...prev, posts: [...prev.posts, newValues] }));
		resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={reviewValidationSchema}
			onSubmit={handleSubmit}>
			{(formik) => {
				return (
					<Form className="comment-form">
						<div className="full-width rate-wrap">
							<label>Your rating</label>
							<div>
								<Field name={formField.postRating.name}>
									{({ form, field, meta }) => {
										const handleRating = (rate) => {
											form.setFieldValue(field.name, rate);
										};
										return (
											<Fragment>
												<Rating
													count={5}
													onClick={handleRating}
													ratingValue={field.value}
													size={24}
													allowHover={false}
													emptyIcon={<i className="far fa-star"></i>}
													halfIcon={<i className="fa fa-star-half-alt"></i>}
													fullIcon={<i className="fa fa-star"></i>}
													activeColor="#ffd700"
													a11y={true}
													allowHalfIcon={true}
												/>
												<span className="text-danger">
													{meta.error && meta.touched && meta.error}
												</span>
											</Fragment>
										);
									}}
								</Field>
							</div>
						</div>
						<p className="text-danger">
							<Field
								type="text"
								name={formField.author.name}
								placeholder={formField.author.label}
							/>
							<ErrorMessage name={formField.author.name} />
						</p>
						<p className="text-danger">
							<Field type="email" name={formField.email.name} placeholder={formField.email.label} />
							<ErrorMessage name={formField.email.name} />
						</p>
						<p className="text-danger">
							<Field
								as="textarea"
								name={formField.postContent.name}
								rows={6}
								placeholder="Your review"
							/>
							<ErrorMessage name={formField.postContent.name} />
						</p>
						<p>
							<input type="submit" disabled={!_.isEmpty(formik.errors)} />
						</p>
					</Form>
				);
			}}
		</Formik>
	);
}

export default ReviewForm;
