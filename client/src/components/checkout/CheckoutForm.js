import Input from "components/ui/Input";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import formInitialValues from "components/form-model/form-initial-values";
import checkoutFormModel from "components/form-model/checkout-form-model";
import validationSchema from "components/form-model/validation-schema";
import { CountryDropdown } from "react-country-region-selector";
import { useLogger } from 'react-use';
import Select from 'components/ui/Select';
import { monthList, yearList } from 'utils';

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";




const {formId, formField} = checkoutFormModel;





function CheckoutForm({ currentIdx, handleNext, handlePrev }) {
  useLogger("Check Form");

  
  
	return (
		<Fragment>
			<h1>Checkout Form</h1>
			<Formik initialValues={formInitialValues} validationSchema={validationSchema}>
				{({ values, ...formik }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<Form className="d-flex flex-wrap">
										<Field
											name={formField.firstName.name}
											labelName={formField.firstName.label}
											component={Input}
											cn="mr-2 d-inline-block"
										/>
										<Field
											name={formField.lastName.name}
											labelName={formField.lastName.label}
											component={Input}
										/>
										<Field
											name={formField.email.name}
											labelName={formField.email.label}
											component={Input}
											cn="mr-2 d-inline-block"
										/>
										<Field
											name={formField.confirmEmail.name}
											labelName={formField.confirmEmail.label}
											component={Input}
										/>
										<Field
											name={formField.phone.name}
											labelName={formField.phone.label}
											component={Input}
											cn="w-100 d-inline-block"
											type="number"
										/>
										<Field
											name={formField.nameOnCard.name}
											labelName={formField.nameOnCard.label}
											component={Input}
											cn="mr-2 d-inline-block"
										/>
										<Field
											name={formField.cardNumber.name}
											labelName={formField.cardNumber.label}
											component={Input}
											type="number"
										/>

										<Field name={formField.expiryDate.month.name}>
											{({ form, field, meta }) => {
												return (
													<Select
														labelClassName={formField.expiryDate.month.label}
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
														<ErrorMessage name={formField.country.name} />
													</div>
												);
											}}
										</Field>
										<Field
											name={formField.street1.name}
											labelName={formField.street1.label}
											component={Input}
											cn="mr-2 d-inline-block"
										/>
										<Field
											name={formField.street2.name}
											labelName={formField.street2.label}
											component={Input}
										/>
										<Field
											name={formField.city.name}
											labelName={formField.city.label}
											component={Input}
											cn=" mr-2 d-inline-block"
										/>
										<Field
											name={formField.state.name}
											labelName={formField.state.label}
											component={Input}
											cn="w-25 mr-2 d-inline-block"
										/>
										<Field
											name={formField.postalCode.name}
											labelName={formField.postalCode.label}
											component={Input}
											type="number"
											cn=" d-inline-block"
										/>
										<Field name={formField.additionalInfo.name}>
											{({ field }) => {
												return (
													<div className="form-group w-100">
														<label>{formField.additionalInfo.label}</label>
														<textarea row={4} {...field} />
														<ErrorMessage name={formField.additionalInfo.name} />
													</div>
												);
											}}
										</Field>
										<Field name={formField.tos.name}>
											{({ field }) => {
												return (
													<div className="form-group">
														<input type="checkbox" {...field} />
														<label className="d-inline ml-2">{formField.tos.label}</label>
														<ErrorMessage name={formField.tos.name} />
													</div>
												);
											}}
										</Field>
									</Form>
								</div>
								<div className="col-md-6">
									<pre>{JSON.stringify(values, null, 4)}</pre>
								</div>
							</div>
						</div>
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
};

export default CheckoutForm;

/*
<label>{formField.expiryDate.month.label}</label>
    <input type="number" name={formField.expiryDate.month.name} onChange={handleChange} />
    <span>{meta.touched && meta.error && meta.error}</span>

    <div className="form-group">
															<label>{formField.expiryDate.year.label}</label>
															<input type="number" name={formField.expiryDate.year.name} />
															<span>{meta.touched && meta.error && meta.error}</span>
														</div>

                            <Field
											name={formField.expiryDate.month.name}
											labelName={formField.expiryDate.month.label}
											component={Input}
											type="number"
										/>


                    <Field name={formField.expiryDate.year.name}>
											{({ form, field, meta }) => {
												const handleChange = (e) => {
													form.setFieldValue(field.name, e.target.value);
												};
												return (
													<Fragment>
														<Select
															initValFn={yearList(3)}
															labelName={formField.expiryDate.year.label}
															handleChange={handleChange}
															field={field}
                              name={field.name}
															setFieldValue={form.setFieldValue}
														/>
													</Fragment>
												);
											}}
										</Field>
*/ 