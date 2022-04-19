import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import _ from "lodash";
// import CreateRating from "./CreateRating";
import reviewFormModel from "form-model/review-form-model";
import reviewValidationSchema from "form-model/review-validation-schema";
import { format } from "date-fns";
import Button from "../ui/Button";
import { useUI } from "context/ui.context";

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

function CommentForm() {
	const { closeModal } = useUI();
	const uuid = _.uniqueId("post_");
	const date = format(Date.now(), "MMMM dd yyyy");
	console.log(uuid, date);
	const handleSubmit = (values, { resetForm }) => {
		const newValues = { ...values, id: uuid, postedOn: date };
		console.log(newValues);
		resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={reviewValidationSchema}
			onSubmit={handleSubmit}>
			{(formik) => {
				return (
					<div className="comment-form">
						<div className="card" style={{ width: "30rem" }}>
							<div className="card-header text-center">
								<div className="card-title">
									<h3>Comment Form</h3>
								</div>
							</div>
							<div className="card-body p-5">
								<Form className="comment-form">
									<p className="text-danger">
										<Field
											type="text"
											name={formField.author.name}
											placeholder={formField.author.label}
											style={{ width: "100%" }}
										/>
										<ErrorMessage name={formField.author.name} />
									</p>
									<p className="text-danger">
										<Field
											type="email"
											name={formField.email.name}
											placeholder={formField.email.label}
											style={{ width: "100%" }}
										/>
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
										<Button
											styleClassNames="btn-small"
											disabled={!_.isEmpty(formik.errors)}
											onClick={() => closeModal()}>
											Submit
										</Button>
									</p>
								</Form>
							</div>
							<button className="btn-circle btn-sm" onClick={() => closeModal()}>
								X
							</button>
						</div>
					</div>
				);
			}}
		</Formik>
	);
}

export default CommentForm;
