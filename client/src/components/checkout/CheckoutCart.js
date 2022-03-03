import React, { Fragment } from "react";
import StepContainer from "components/ui/step/StepContainer";

function CheckoutCart({ currentIdx, handleNext }) {
	return (
		<Fragment>
			<StepContainer currentIdx={currentIdx} />
			<h1>Checkout Cart</h1>;
			<button type="button" onClick={handleNext}>
				Next
			</button>
		</Fragment>
	);
}

export default CheckoutCart;
