import React, { Fragment } from "react";
import useLocalStorageState from "hooks/use-local-storage-state";
import checkoutFormModel from "form-model/checkout-form-model";
import INITIAL_VALUES from "form-model/form-initial-values";

function CheckoutConfirmation() {
	const { formId } = checkoutFormModel;

	const LOCAL_STORAGE_KEY1 = `travel:${formId}`;
	const LOCAL_STORAGE_KEY2 = "travel:cart";

	const [localStorageState1, setInfoInLocalStorage1] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY1,
		value: INITIAL_VALUES
	});

	const [localStorageState2, setInfoInLocalStorage2] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY2,
		value: { items: [], isEmpty: true, totalItems: 0, totalUniqueItems: 0, total: 0, meta: null }
	});

	const { cardNumber, country, email, firstName, lastName, phone, postalCode, street1, street2 } =
		localStorageState1;

	const { total } = localStorageState2;
	console.log(localStorageState1, localStorageState2);
	return (
		<Fragment>
			{localStorageState1 && localStorageState2 && (
				<div className="confirmation-outer">
					<div className="success-notify">
						<div className="success-icon">
							<i className="fas fa-check" />
						</div>
						<div className="success-content">
							<h3>PAYMENT CONFIRMED</h3>
							<p>
								Thank you, your payment has been successful and your booking is now confirmed.A
								confirmation email has been sent to {email}.
							</p>
						</div>
					</div>
					<div className="confirmation-inner">
						<div className="row">
							<div className="col-lg-8 right-sidebar">
								<div className="confirmation-details">
									<h3>BOOKING DETAILS</h3>
									<table className="table">
										<tbody>
											<tr>
												<td>Booking id:</td>
												<td>999-QSDE-55</td>
											</tr>
											<tr>
												<td>First Name:</td>
												<td>{firstName}</td>
											</tr>
											<tr>
												<td>Last Name:</td>
												<td>{lastName}</td>
											</tr>
											<tr>
												<td>Email:</td>
												<td>{email}</td>
											</tr>
											<tr>
												<td>Phone</td>
												<td>{phone}</td>
											</tr>
											<tr>
												<td>Card number</td>
												<td>{`XXX-XXXX-XXX-${cardNumber
													.toString()
													.split("")
													.slice(-2)
													.join("")}`}</td>
											</tr>
											<tr>
												<td>Country:</td>
												<td>{country}</td>
											</tr>
											<tr>
												<td>Zip Code</td>
												<td>{postalCode}</td>
											</tr>
											<tr>
												<td>Address</td>
												<td>
													{street1} {street2}
												</td>
											</tr>
										</tbody>
									</table>
									<div className="details payment-details">
										<h3>PAYMENT</h3>
										<div className="details-desc">
											<p>Payment is successful via Master card</p>
										</div>
									</div>
									<div className="details">
										<h3>VIEW BOOKING DETAILS</h3>
										<div className="details-desc">
											<p>
												<a href="#">https://www.travele.com/sadsd-f646556</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<aside className="sidebar">
									<div className="widget-bg widget-table-summary">
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
									</div>
									<div className="widget-bg widget-support-wrap">
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
									</div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default CheckoutConfirmation;
