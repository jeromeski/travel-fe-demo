import React, { useEffect, Fragment } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Input from "components/ui/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCart } from "context/cart/cart.provider";
import { useHistory } from "react-router-dom";
import useLocalStorageState from "hooks/use-local-storage-state";
import INITIAL_VALUES from "form-model/form-initial-values";
import checkoutFormModel from "form-model/checkout-form-model";

const { formId, formField } = checkoutFormModel;

const LOCAL_STORAGE_KEY = "travel:checkout";

function CheckoutCardForm({ data }) {
	const today = new Date();
	const days = 1;
	// Date.now() gives the epoch date value (in milliseconds) of current date
	const nextDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

	const { addItemToCart } = useCart();

	const [paymentInfo, setInfoInLocalStorage] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY,
		value: INITIAL_VALUES
	});

	const history = useHistory();
	// useEffect(() => {
	// 	setInfoInLocalStorage(INITIAL_VALUES);
	// }, []);

	console.log("CCF -->", paymentInfo);

	const onSubmit = async (values, formikProps) => {
		addItemToCart(data);
		await setInfoInLocalStorage(values);
		history.push("/checkout-flow");
	};

	return (
		<Formik initialValues={paymentInfo} onSubmit={onSubmit}>
			{(formik) => {
				return (
					<form
						onSubmit={(e) => {
							e.preventDefault();
							formik.handleSubmit();
						}}
						className="booking-form">
						<div className="row">
							<div className="col-sm-12">
								<Field
									name="firstName"
									placeHolder="Enter Firstname*"
									component={Input}
									formGroup={true}
								/>
							</div>
							<div className="col-sm-12">
								<Field
									name="lastName"
									placeHolder="Enter Lastname*"
									component={Input}
									formGroup={true}
								/>
							</div>
							<div className="col-sm-12">
								<Field
									name="email"
									placeHolder="Enter Email*"
									component={Input}
									type="email"
									formGroup={true}
								/>
							</div>
							<div className="col-sm-12">
								<Field
									name="phone"
									placeHolder="Enter Phone Number*"
									component={Input}
									type="text"
									formGroup={true}
								/>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field name="start">
										{({ form, field, meta }) => {
											const handleStartDateChange = (date) => {
												form.setFieldValue(field.name, date);
											};
											return (
												<Fragment>
													<DatePicker
														selected={Date.parse(field.value)}
														onChange={handleStartDateChange}
														minDate={today}
														dateFormat="MMMM dd yyyy"
														placeholderText="Select Start Date"
														className="form-control"
													/>
													<div className="text-danger">
														<small>
															<ErrorMessage name={field.name} />
														</small>
													</div>
												</Fragment>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<Field name="end">
										{({ form, field, meta }) => {
											const handleEndDateChange = (date) => {
												form.setFieldValue("end", date);
											};
											return (
												<Fragment>
													<DatePicker
														selected={Date.parse(field.value)}
														onChange={handleEndDateChange}
														minDate={nextDate}
														dateFormat="MMMM dd yyyy"
														placeholderText="Select End Date*"
														className="form-control"
													/>
													<div className="text-danger">
														<small>
															<ErrorMessage name={field.name} />
														</small>
													</div>
												</Fragment>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-12">
								<h4 className="">Add Options</h4>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<Field name="guide">
										{({ form, field, meta }) => {
											return (
												<label className="checkbox-list">
													<input
														type="checkbox"
														value={45}
														onChange={() => form.setFieldValue("guide", field.value)}
													/>
													<span className="custom-checkbox" />
													Tour guide
												</label>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<Field name="insurance">
										{({ form, field, meta }) => {
											return (
												<label className="checkbox-list">
													<input
														type="checkbox"
														value={100}
														onChange={() => form.setFieldValue("insurance", field.value)}
													/>
													<span className="custom-checkbox" />
													Insurance
												</label>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<Field name="dinner">
										{({ form, field, meta }) => {
											return (
												<label className="checkbox-list">
													<input
														type="checkbox"
														value={150}
														onChange={() => form.setFieldValue("dinner", field.value)}
													/>
													<span className="custom-checkbox" />
													Dinner
												</label>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<Field name="bikeRent">
										{({ form, field, meta }) => {
											return (
												<label className="checkbox-list">
													<input
														type="checkbox"
														value={25}
														onChange={() => form.setFieldValue("bikeRent", field.value)}
													/>
													<span className="custom-checkbox" />
													Bike Rent
												</label>
											);
										}}
									</Field>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group submit-btn">
									<input type="submit" className="" value="Book Now" />
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
