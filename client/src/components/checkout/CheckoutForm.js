import Input from "components/ui/Input";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment, useEffect } from "react";
import INITIAL_VALUES from "components/form-model/form-initial-values";
import checkoutFormModel from "components/form-model/checkout-form-model";
import validationSchema from "components/form-model/validation-schema";
import { CountryDropdown } from "react-country-region-selector";
import { useLogger } from "react-use";
import Select from "components/ui/Select";
import { monthList, yearList } from "utils";
import useLocalStorageState from "hooks/useLocalStorageState";
import DialogModal from "components/ui/DialogModal";
import useOnFormikSubmit from "hooks/useOnFormikSubmit";

const { formId, formField } = checkoutFormModel;

const LOCAL_STORAGE_KEY = `travel:${formId}`;

function CheckoutForm({ handlePrev, showDialog, setShowDialog }) {
	// useLogger("Check Form");
	const [initialValues, handleUpdateForm] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY,
		value: INITIAL_VALUES
	});

	const handleSubmit = (values, formikBag) => {
		console.log(values, formikBag);
	};

	return (
		<Fragment>
			<h1>Checkout Form</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
				validationSchema={validationSchema}>
				{({ values, resetForm, validateForm, errors, setSubmitting, handleSubmit, submitForm }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<MyForm
										values={values}
										validateForm={validateForm}
										errors={errors}
										setSubmitting={setSubmitting}
										handleUpdateForm={handleUpdateForm}
										handleSubmit={handleSubmit}
									/>
									<div>
										<button type="button" onClick={handlePrev}>
											Back
										</button>
										<button onClick={submitForm}>Submit</button>
									</div>
									<DialogModal
										showDialog={showDialog}
										setShowDialog={setShowDialog}
										values={values}
										resetForm={resetForm}
									/>
								</div>
								<div className="col-md-6">
									<pre>{JSON.stringify(values, null, 4)}</pre>
								</div>
							</div>
						</div>
					);
				}}
			</Formik>
		</Fragment>
	);
}

export default CheckoutForm;

function MyForm({
	values,
	validateForm,
	errors,
	handlePrev,
	showDialog,
	setShowDialog,
	setSubmitting,
	handleUpdateForm,
	handleSubmit
}) {
	useEffect(() => {
		if (values) {
			handleUpdateForm(values);
		}
	}, [values, handleUpdateForm]);

	return (
		<Form>
			<div className="d-flex flex-wrap">
				<Field
					name={formField.firstName.name}
					labelName={formField.firstName.label}
					component={Input}
					placeHolder="Enter First Name"
					cn="mr-2 d-inline-block"
				/>
				<Field
					name={formField.lastName.name}
					labelName={formField.lastName.label}
					component={Input}
					placeHolder="Enter Last Name"
				/>
				<Field
					name={formField.email.name}
					type="email"
					labelName={formField.email.label}
					component={Input}
					cn="mr-2 d-inline-block"
					placeHolder="Enter email"
				/>
				<Field
					name={formField.confirmEmail.name}
					labelName={formField.confirmEmail.label}
					component={Input}
					placeHolder="Confirm Email"
				/>
				<Field
					name={formField.phone.name}
					labelName={formField.phone.label}
					component={Input}
					cn="w-100 d-inline-block"
					type="number"
					placeHolder="Enter Phone Number"
				/>
				<Field
					name={formField.nameOnCard.name}
					labelName={formField.nameOnCard.label}
					component={Input}
					cn="mr-2 d-inline-block"
					placeHolder="Name on Card"
				/>
				<Field
					name={formField.cardNumber.name}
					labelName={formField.cardNumber.label}
					component={Input}
					type="number"
					placeHolder="Enter Card Number"
				/>

				<Field name={formField.expiryDate.month.name}>
					{({ form, field, meta }) => {
						return (
							<Select
								labelClassName={formField.expiryDate.month.label}
								labelName="Month"
								initValFn={monthList()}
								form={form}
								field={field}
								placeHolder="Enter Month"
							/>
						);
					}}
				</Field>

				<Field name={formField.expiryDate.year.name}>
					{({ form, field, meta }) => {
						return (
							<Select
								labelClassName={formField.expiryDate.year.label}
								labelName="Year"
								initValFn={yearList(3)}
								form={form}
								field={field}
								placeHolder="Enter Year "
							/>
						);
					}}
				</Field>

				<Field
					name={formField.cvv.name}
					labelName={formField.cvv.label}
					type="number"
					component={Input}
					cn="w-100"
					placeHolder="Enter CVV"
				/>
				<Field name={formField.country.name}>
					{({ form, field, meta }) => {
						const handleCountryDropdown = (val) => {
							form.setFieldValue(field.name, val);
						};

						return (
							<div className="form-group">
								<label>{formField.country.label}</label>
								<CountryDropdown
									value={field.value}
									onChange={(val) => {
										handleCountryDropdown(val);
									}}
								/>
								<div className="text-danger">
									<ErrorMessage name={formField.country.name} />
								</div>
							</div>
						);
					}}
				</Field>
				<Field
					name={formField.street1.name}
					labelName={formField.street1.label}
					component={Input}
					cn="mr-2 d-inline-block"
					placeHolder="Enter Street"
				/>
				<Field
					name={formField.street2.name}
					labelName={formField.street2.label}
					component={Input}
					placeHolder="Add Street Info"
				/>
				<Field
					name={formField.city.name}
					labelName={formField.city.label}
					component={Input}
					cn=" mr-2 d-inline-block"
					placeHolder="Enter City"
				/>
				<Field
					name={formField.state.name}
					labelName={formField.state.label}
					component={Input}
					cn="w-25 mr-2 d-inline-block"
					placeHolder="Enter State"
				/>
				<Field
					name={formField.postalCode.name}
					labelName={formField.postalCode.label}
					component={Input}
					type="number"
					cn=" d-inline-block"
					placeHolder="Enter Postal Code"
				/>
				<Field name={formField.additionalInfo.name}>
					{({ field }) => {
						return (
							<div className="form-group w-100">
								<label>{formField.additionalInfo.label}</label>
								<textarea row={4} {...field} placeHolder="Enter Additional Info" />
							</div>
						);
					}}
				</Field>
				<Field name={formField.tos.name}>
					{({ field }) => {
						return (
							<div className="form-group">
								<input type="checkbox" checked={field.value} {...field} />
								<label className="d-inline ml-2">{formField.tos.label}</label>
								<div className="text-danger">
									<ErrorMessage name={formField.tos.name} />
								</div>
							</div>
						);
					}}
				</Field>
			</div>
		</Form>
	);
}