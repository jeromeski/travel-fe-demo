import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import Select from "components/ui/Select";
import { monthList, yearList } from "utils";
import Input from "components/ui/Input";
import { CountryDropdown } from "react-country-region-selector";
import checkoutFormModel from "components/form-model/checkout-form-model";
import _ from "lodash";

const { formField } = checkoutFormModel;

function CustomForm({ handleUpdateForm }) {
	const { values, errors, submitForm, touched } = useFormikContext();
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (values) {
			handleUpdateForm(values);
		}
	}, [values, handleUpdateForm]);

	useEffect(() => {
		if (_.isEmpty(errors)) {
			setDisabled(true);
		}
		if (!_.isEmpty(errors)) {
			setDisabled(true);
		}
		if (_.isEmpty(errors) && !_.isEmpty(touched)) {
			setDisabled(false);
		}
	}, [errors]);

	useEffect(() => {
		// true
		if (
			_.isEmpty(errors)
			// && touched && submitCount > 1
		) {
			setDisabled(true);
		}
	}, []);

	return (
		<Form autoComplete="hello">
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
								<textarea row={4} {...field} placeholder="Enter Additional Info" />
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
			<div>
				<button
					type="button"
					//  onClick={handlePrev}
				>
					Back
				</button>
				<button
					type="button"
					onClick={
						// () => handleSubmit()
						submitForm
					}
					// disabled={!_.isEmpty(errors) && _.isEmpty(touched)}
					disabled={disabled}>
					Continue
				</button>
			</div>
		</Form>
	);
}

export default CustomForm;
