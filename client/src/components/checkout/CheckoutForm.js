import Input from "components/ui/Input";
import { Field, Form, Formik } from "formik";
import React, { Fragment } from "react";

function CheckoutForm({ currentIdx, handleNext, handlePrev }) {
	return (
		<Fragment>
			<h1>Checkout Form</h1>
			<Formik>
				{(formik) => {
					//
					return (
						<Form>
							<Field name="firstName" labelName="First Name*" component={Input} />
						</Form>
					);
				}}
			</Formik>
			<button type="button" onClick={handlePrev}>
				Back
			</button>
			<button type="button" onClick={handleNext}>
				Next
			</button>
		</Fragment>
	);
}

export default CheckoutForm;
