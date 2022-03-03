import StepContainer from "components/ui/step/StepContainer";
import React, { Fragment } from "react";

function CheckoutForm({ currentIdx, handleNext }) {
	return (
		<Fragment>
			<StepContainer currentIdx={currentIdx} />
			<h1>Checkout Form</h1>
			<button type="button" onClick={handleNext}>
				Next
			</button>
		</Fragment>
	);
}

export default CheckoutForm;
