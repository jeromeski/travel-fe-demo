import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import Select from "components/ui/Select";
import { monthList, yearList } from "utils";
import Input from "components/ui/Input";
import { CountryDropdown } from "react-country-region-selector";
import checkoutFormModel from "components/form-model/checkout-form-model";
import _ from "lodash";
import cards from "assets/images/cards.png";
import ccv from "assets/images/icon_ccv.gif";

const { formId, formField } = checkoutFormModel;

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
		<Form>
			<div className="booking-content">
				<div className="form-title">
					<span>1</span>
					<h3>Your Details</h3>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Field
							name={formField.firstName.name}
							labelName={formField.firstName.label}
							component={Input}
							// placeHolder="Enter First Name"
							formGroup={true}
						/>
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.lastName.name}
							labelName={formField.lastName.label}
							component={Input}
							// placeHolder="Enter Last Name"
							formGroup={true}
						/>
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.email.name}
							type="email"
							labelName={formField.email.label}
							component={Input}
							// placeHolder="Enter email"
							formGroup={true}
						/>
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.confirmEmail.name}
							labelName={formField.confirmEmail.label}
							component={Input}
							// placeHolder="Confirm Email"
							formGroup={true}
						/>
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.phone.name}
							labelName={formField.phone.label}
							component={Input}
							type="number"
							// placeHolder="Enter Phone Number"
							formGroup={true}
						/>
					</div>
				</div>
			</div>
			<div className="booking-content">
				<div className="form-title">
					<span>2</span>
					<h3>Payment Information</h3>
				</div>
				<div className="row">
					<div className="col-12">
						<Field
							name={formField.nameOnCard.name}
							labelName={formField.nameOnCard.label}
							component={Input}
							// placeHolder="Name on Card"
							formGroup={true}
						/>
					</div>
					<div className="col-12">
						<div className="row align-items-center">
							<div className="col-md-6">
								<Field
									name={formField.cardNumber.name}
									labelName={formField.cardNumber.label}
									component={Input}
									type="number"
									// placeHolder="Enter Card Number"
									formGroup={true}
								/>
							</div>
							<div className="col-md-6">
								<img src={cards} alt="Cards" />
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="row">
							<div className="col-md-6">
								<label>Expiration Date*</label>
								<div className="row">
									<div className="col-md-6">
										<Field name={formField.expiryDate.month.name}>
											{({ form, field, meta }) => {
												return (
													<Select
														initValFn={monthList()}
														form={form}
														field={field}
														// placeHolder="Enter Month"
													/>
												);
											}}
										</Field>
									</div>
									<div className="col-md-6">
										<Field name={formField.expiryDate.year.name}>
											{({ form, field, meta }) => {
												return (
													<Select
														// labelName={formField.expiryDate.year.label}
														initValFn={yearList(3)}
														form={form}
														field={field}
														// placeHolder="Enter Year "
													/>
												);
											}}
										</Field>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Security Code*</label>
									<div className="row">
										<div className="col-md-4">
											<Field name={formField.cvv.name}>
												{({ field }) => (
													<input
														type="number"
														// placeholder="CCV"
														className="form-control"
														{...field}
													/>
												)}
											</Field>
										</div>
										<div className="col-md-8">
											<img src={ccv} alt="Card" />
											<small>Last 3 digits</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="booking-content">
				<div className="form-title">
					<span>3</span>
					<h3>Billing Address</h3>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12">
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
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.street1.name}
							labelName={formField.street1.label}
							component={Input}
							// placeHolder="Enter Street"
						/>
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.street2.name}
							labelName={formField.street2.label}
							component={Input}
							// placeHolder="Add Street Info"
						/>
					</div>
					<div className="col-sm-6">
						<Field
							name={formField.city.name}
							labelName={formField.city.label}
							component={Input}
							// placeHolder="Enter City"
						/>
					</div>

					<div className="col-sm-6">
						<div className="row">
							<div className="col-sm-6">
								<Field
									name={formField.state.name}
									labelName={formField.state.label}
									component={Input}
									// placeHolder="Enter State"
								/>
							</div>
							<div className="col-sm-6">
								<Field
									name={formField.postalCode.name}
									labelName={formField.postalCode.label}
									component={Input}
									type="number"
									// placeHolder="Enter Postal Code"
								/>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<Field name={formField.additionalInfo.name}>
							{({ field }) => {
								return (
									<div className="form-group">
										<label>{formField.additionalInfo.label}</label>
										<textarea
											rows={6}
											{...field}
											placeholder="Notes about your order, e.g. special notes for delivery"
										/>
									</div>
								);
							}}
						</Field>
					</div>
				</div>
			</div>
			<div className="form-policy">
				<h3>Cancellation Policy</h3>
				<Field name={formField.tos.name}>
					{({ field }) => {
						return (
							<div className="form-group">
								<label class="checkbox-list">
									<input type="checkbox" name="s" checked={field.value} {...field} />
									<span class="custom-checkbox"></span>I accept terms and conditions and general
									policy.
									<div className="text-danger">
										<ErrorMessage name={formField.tos.name} />
									</div>
								</label>
							</div>
						);
					}}
				</Field>
			</div>
			<div>
				<button
					type="button"
					className="button-primary mr-4"
					//  onClick={handlePrev}
				>
					Back
				</button>
				<button
					type="button"
					className="button-primary"
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
