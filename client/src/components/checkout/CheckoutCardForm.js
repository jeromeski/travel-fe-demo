import React, { useState } from "react";
import { Formik, Field } from "formik";
import INITIAL_VALUES from "components/form-model/form-initial-values";
import checkoutFormModel from "components/form-model/checkout-form-model";
import checkoutValidationSchema from "components/form-model/checkout-validation-schema";
import Input from "components/ui/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const { formId, formField } = checkoutFormModel;
const LOCAL_STORAGE_KEY = `travel:${formId}`;

function CheckoutCardForm() {
	return (
		<Formik
			initialValues={INITIAL_VALUES}
			validationSchema={checkoutValidationSchema}
			onSubmit={(values) => console.log(values)}>
			{(formik) => {
				return (
					<form className="booking-form">
						<div className="row">
							<div className="col-sm-12">
								<Field
									name={formField.firstName.name}
									placeHolder={formField.firstName.label}
									component={Input}
									formGroup={true}
								/>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field
										name={formField.lastName.name}
										placeHolder={formField.lastName.label}
										component={Input}
										formGroup={true}
									/>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field
										name={formField.email.name}
										placeHolder={formField.email.label}
										component={Input}
										type="email"
										formGroup={true}
									/>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field
										name={formField.phone.name}
										placeHolder={formField.phone.label}
										component={Input}
										type="number"
										formGroup={true}
									/>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field>
										{(form, field, meta) => {
											return <DatePicker placeholderText={formField.startDate.label} />;
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field>
										{(form, field, meta) => {
											return <DatePicker placeholderText={formField.endDate.label} />;
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-12">
								<h4 className="">Add Options</h4>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="checkbox-list">
										<input type="checkbox" name="s" />
										<span className="custom-checkbox" />
										Tour guide
									</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="checkbox-list">
										<input type="checkbox" name="s" />
										<span className="custom-checkbox" />
										Insurance
									</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="checkbox-list">
										<input type="checkbox" name="s" />
										<span className="custom-checkbox" />
										Dinner
									</label>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="checkbox-list">
										<input type="checkbox" name="s" />
										<span className="custom-checkbox" />
										Bike rent
									</label>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group submit-btn">
									<input type="submit" name="submit" defaultValue="Boook Now" />
								</div>
							</div>
						</div>
					</form>
				);
			}}
		</Formik>
	);
}

export default CheckoutCardForm;
