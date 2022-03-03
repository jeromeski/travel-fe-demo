import React, { Fragment } from "react";

function CheckoutConfirmation({ currentIdx, handlePrev }) {
	return (
		<Fragment>
			<h1>Checkout Confirmation</h1>
			<button type="button" onClick={handlePrev}>
				Back
			</button>
		</Fragment>
	);
}

export default CheckoutConfirmation;
