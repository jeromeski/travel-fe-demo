import React, { useState } from "react";
import CheckoutCart from "./CheckoutCart";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CheckoutControlFlow from "./CheckoutControlFlow";
import CheckoutForm from "./CheckoutForm";

function CheckoutContainer() {
	const [currentIdx, setCurrentIdx] = useState(0);

	const handleNext = () => {
		if (currentIdx < 2) {
			setCurrentIdx(currentIdx + 1);
		}
	};

	return (
		<CheckoutControlFlow currentIdx={currentIdx}>
			<CheckoutCart handleNext={handleNext} currentIdx={currentIdx} />
			<CheckoutForm handleNext={handleNext} currentIdx={currentIdx} />
			<CheckoutConfirmation currentIdx={currentIdx} />
		</CheckoutControlFlow>
	);
}

export default CheckoutContainer;
