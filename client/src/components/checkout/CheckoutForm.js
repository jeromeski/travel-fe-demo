import { Formik, useFormikContext } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import INITIAL_VALUES from "form-model/form-initial-values";
import checkoutValidationSchema from "form-model/checkout-validation-schema";
import useLocalStorageState from "hooks/use-local-storage-state";

import Sidebar from "components/layout/Sidebar";
import Widget from "components/ui/Widget";
import { useCart } from "context/cart/cart.provider";
import { ErrorMessage, Field, Form } from "formik";
import Select from "components/ui/Select";
import { monthList, yearList } from "utils";
import Input from "components/ui/Input";
import { CountryDropdown } from "react-country-region-selector";
import checkoutFormModel from "form-model/checkout-form-model";
import _ from "lodash";
import cards from "assets/images/cards.png";
import ccv from "assets/images/icon_ccv.gif";
import { useUI } from "context/ui.context";

const { formId, formField } = checkoutFormModel;

const LOCAL_STORAGE_KEY = "travel:checkout";

function CheckoutForm() {
	const {
		state: { total, items }
	} = useCart();

	const [initialValues, setInfoInLocalStorage] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY,
		value: INITIAL_VALUES
	});

	const { openModal, setModalView, setPrevIdx } = useUI();

	const [disabled, setDisabled] = useState(true);

	const handlePrev = () => {
		setPrevIdx((prev) => prev - 1);
	};

	const { bikeRent, dinner, guide, insurance } = initialValues;
	console.log("CHECKOUT FORM -->", initialValues);

	const handleSubmit = async (values) => {
		setModalView("CHECKOUT_VIEW");
		await setInfoInLocalStorage(values);
		openModal(true);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="booking-form-wrap">
						<Formik
							initialValues={initialValues}
							// validationSchema={checkoutValidationSchema}
							onSubmit={(values, formikProps) => {
								handleSubmit(values);
							}}>
							{(formik) => {
								return (
									<Fragment>
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
															type="text"
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
																					<Fragment>
																						<input
																							type="text"
																							// placeholder="CCV"
																							className="form-control"
																							{...field}
																						/>
																						<div className="text-danger">
																							<small>
																								<ErrorMessage name={field.name} />
																							</small>
																						</div>
																					</Fragment>
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
																<label className="checkbox-list">
																	<input
																		type="checkbox"
																		name="s"
																		checked={field.value}
																		{...field}
																	/>
																	<span className="custom-checkbox"></span>I accept terms and
																	conditions and general policy.
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
												<button type="button" className="button-primary mr-4" onClick={handlePrev}>
													Back
												</button>
												<button
													type="submit"
													className="button-primary"
													// disabled={disabled}
													// loading={isSubmitting}
													children="Submit"
												/>
											</div>
										</Form>
									</Fragment>
								);
							}}
						</Formik>
					</div>
				</div>
				<div className="col-lg-4">
					<Sidebar>
						<Widget addStyleClassNames="widget-table-summay">
							<h4 className="bg-title">Summary</h4>
							<table>
								<tbody>
									<tr>
										<td>
											<strong>Packages cost </strong>
										</td>
										<td className="text-right">${total ? total : 12000}</td>
									</tr>
									{guide && (
										<tr>
											<td>
												<strong>Dedicated tour guide</strong>
											</td>
											<td className="text-right">${guide ? items.length * 45 : ""}</td>
										</tr>
									)}
									{dinner && (
										<tr>
											<td>
												<strong>Dinner</strong>
											</td>
											<td className="text-right">${dinner ? items.length * 150 : ""}</td>
										</tr>
									)}
									{insurance && (
										<tr>
											<td>
												<strong>Insurance</strong>
											</td>
											<td className="text-right">${insurance ? items.length * 100 : ""}</td>
										</tr>
									)}
									{bikeRent && (
										<tr>
											<td>
												<strong>Bike Rent</strong>
											</td>
											<td className="text-right">${guide ? items.length * 25 : ""}</td>
										</tr>
									)}

									<tr>
										<td>
											<strong>tax</strong>
										</td>
										<td className="text-right">13%</td>
									</tr>
									<tr className="total">
										<td>
											<strong>Total cost</strong>
										</td>
										<td className="text-right">
											<strong>{total}</strong>
										</td>
									</tr>
								</tbody>
							</table>
						</Widget>
						<Widget addStyleClassNames="widget-support-wrap">
							<div className="icon">
								<i className="fas fa-phone-volume" />
							</div>
							<div className="support-content">
								<h5>HELP AND SUPPORT</h5>
								<a href="telto:12345678" className="phone">
									+11 234 889 00
								</a>
								<small>Monday to Friday 9.00am - 7.30pm</small>
							</div>
						</Widget>
					</Sidebar>
				</div>
			</div>
		</div>
	);
}

export default CheckoutForm;

/*
<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="booking-form-wrap">
										<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={() => {
					setShowDialog(true);
				}}>
				{(formik) => {
					const { values, resetForm, ...rest } = formik;
					return (
						
					);
				}}
			</Formik>
									</div>
								</div>
								<div className="col-lg-4">
									<Sidebar>
										<Widget addStyleClassNames="widget-table-summay">
											<h4 className="bg-title">Summary</h4>
											<table>
												<tbody>
													<tr>
														<td>
															<strong>Packages cost </strong>
														</td>
														<td className="text-right">${total}</td>
													</tr>
													<tr>
														<td>
															<strong>Dedicated tour guide</strong>
														</td>
														<td className="text-right">$34</td>
													</tr>
													<tr>
														<td>
															<strong>Insurance</strong>
														</td>
														<td className="text-right">$34</td>
													</tr>
													<tr>
														<td>
															<strong>tax</strong>
														</td>
														<td className="text-right">13%</td>
													</tr>
													<tr className="total">
														<td>
															<strong>Total cost</strong>
														</td>
														<td className="text-right">
															<strong>$368</strong>
														</td>
													</tr>
												</tbody>
											</table>
										</Widget>
										<Widget addStyleClassNames="widget-support-wrap">
											<div className="icon">
												<i className="fas fa-phone-volume" />
											</div>
											<div className="support-content">
												<h5>HELP AND SUPPORT</h5>
												<a href="telto:12345678" className="phone">
													+11 234 889 00
												</a>
												<small>Monday to Friday 9.00am - 7.30pm</small>
											</div>
										</Widget>
									</Sidebar>
								</div>
							</div>
							<DialogModal
								showDialog={showDialog}
								setShowDialog={setShowDialog}
								values={values}
								resetForm={resetForm}
								onConfirmation={onConfirmation}
								setCurrentIdx={setCurrentIdx}
							/>
						</div>

            <CustomForm values={values} handleUpdateForm={handleUpdateForm} {...rest} />

*/

// useEffect(() => {
// 	if (values) {
// 		handleUpdateForm(values);
// 	}
// }, [values, handleUpdateForm]);

// useEffect(() => {
// 	if (_.isEmpty(errors)) {
// 		setDisabled(true);
// 	}
// 	if (!_.isEmpty(errors)) {
// 		setDisabled(true);
// 	}
// 	if (_.isEmpty(errors) && !_.isEmpty(touched)) {
// 		setDisabled(false);
// 	}
// }, [errors]);

// useEffect(() => {
// 	// true
// 	if (
// 		_.isEmpty(errors)
// 		// && touched && submitCount > 1
// 	) {
// 		setDisabled(true);
// 	}
// }, []);
