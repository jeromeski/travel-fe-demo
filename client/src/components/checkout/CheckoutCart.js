import React, { Fragment } from "react";


function CheckoutCart({ currentIdx, handleNext }) {
	return (
		<Fragment>
			<h1>Checkout Cart</h1>
			<button type="button" onClick={handleNext}>
				Next
			</button>
		</Fragment>
	);
}

export default CheckoutCart;
