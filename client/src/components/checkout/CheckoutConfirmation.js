import StepContainer from "components/ui/step/StepContainer";
import React, { Fragment } from "react";

function CheckoutConfirmation({ currentIdx }) {
	return (
		<Fragment>
			<StepContainer currentIdx={currentIdx} />
			<h1>Checkout Confirmation</h1>
		</Fragment>
	);
}

export default CheckoutConfirmation;
