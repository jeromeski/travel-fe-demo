import React, { Fragment } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import _ from "lodash";
// import CreateRating from "./CreateRating";
import reviewFormModel from "components/form-model/review-form-model";
import reviewValidationSchema from "components/form-model/review-validation-schema";
import { Rating } from "react-simple-star-rating";

const { formId, formField } = reviewFormModel;

const initialValues = {
	rating: "",
	firstName: "",
	lastName: "",
	email: "",
	subject: "",
	review: ""
};

function ReviewForm() {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={reviewValidationSchema}
			onSubmit={handleSubmit}>
			{(formik) => {
				console.log(formik);
				return (
					<Form className="comment-form">
						<div className="full-width rate-wrap">
							<label>Your rating</label>
							<div>
								<Field name={formField.rating.name}>
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
													isHalf={true}
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
								name={formField.firstName.name}
								placeholder={formField.firstName.label}
							/>
							<ErrorMessage name={formField.firstName.name} />
						</p>
						<p className="text-danger">
							<Field
								type="text"
								name={formField.lastName.name}
								placeholder={formField.lastName.label}
							/>
							<ErrorMessage name={formField.lastName.name} />
						</p>
						<p className="text-danger">
							<Field type="email" name={formField.email.name} placeholder={formField.email.label} />
							<ErrorMessage name={formField.email.name} />
						</p>
						<p className="text-danger">
							<Field
								type="text"
								name={formField.subject.name}
								placeholder={formField.subject.label}
							/>
							<ErrorMessage name={formField.subject.name} />
						</p>
						<p className="text-danger">
							<Field
								as="textarea"
								name={formField.review.name}
								rows={6}
								placeholder="Your review"
							/>
							<ErrorMessage name={formField.review.name} />
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
