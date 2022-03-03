import StepContainer from "components/ui/step/StepContainer";
import React, { Fragment } from "react";

function CheckoutConfirmation({ currentIdx, handlePrev }) {
	return (
		<Fragment>
			<StepContainer currentIdx={currentIdx} />
			<h1>Checkout Confirmation</h1>
			<button type="button" onClick={handlePrev}>
				Back
			</button>
		</Fragment>
	);
}

export default CheckoutConfirmation;
