import { Formik } from "formik";
import React, { Fragment } from "react";
import INITIAL_VALUES from "form-model/form-initial-values";
import checkoutFormModel from "form-model/checkout-form-model";
import checkoutValidationSchema from "form-model/checkout-validation-schema";
import useLocalStorageState from "hooks/useLocalStorageState";
import { useDialog } from "context/dialog";
import CustomForm from "./CustomForm";
import { useLogger } from "react-use";
import DialogModal from "components/ui/DialogModal";
import Sidebar from "components/layout/Sidebar";
import Widget from "components/ui/Widget";
import { useCart } from "context/cart/cart.provider";

const { formId } = checkoutFormModel;
const LOCAL_STORAGE_KEY = `travel:${formId}`;

function CheckoutForm({ onConfirmation, setCurrentIdx }) {
	useLogger("Check Form");
	const {
		state: { total }
	} = useCart();

	const [initialValues, handleUpdateForm] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY,
		value: INITIAL_VALUES
	});

	const { showDialog, setShowDialog } = useDialog();

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="booking-form-wrap">
						<Formik
							initialValues={initialValues}
							validationSchema={checkoutValidationSchema}
							onSubmit={() => {
								setShowDialog(true);
							}}>
							{(formik) => {
								const { values, resetForm, ...rest } = formik;
								return (
									<Fragment>
										<CustomForm values={values} handleUpdateForm={handleUpdateForm} {...rest} />
										;
										<DialogModal
											showDialog={showDialog}
											setShowDialog={setShowDialog}
											values={values}
											resetForm={resetForm}
											onConfirmation={onConfirmation}
											setCurrentIdx={setCurrentIdx}
										/>
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