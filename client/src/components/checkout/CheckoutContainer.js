import React, { Fragment, useState } from "react";
import StepsContainer from "components/ui/step/StepsContainer";

import CheckoutCart from "./CheckoutCart";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CheckoutControlFlow from "./CheckoutControlFlow";
import CheckoutForm from "./CheckoutForm";

function CheckoutContainer() {
	const [currentIdx, setCurrentIdx] = useState(1);

	const handleNext = () => {
		if (currentIdx < 2) {
			setCurrentIdx(currentIdx + 1);
		}
	};

	const handlePrev = () => {
		if (currentIdx !== 0) {
			setCurrentIdx(currentIdx - 1);
		}
	};

	return (
		<Fragment>
			<StepsContainer currentIdx={currentIdx} />
			<CheckoutControlFlow currentIdx={currentIdx}>
				<CheckoutCart handleNext={handleNext} currentIdx={currentIdx} />
				<CheckoutForm handleNext={handleNext} handlePrev={handlePrev} currentIdx={currentIdx} />
				<CheckoutConfirmation handlePrev={handlePrev} currentIdx={currentIdx} />
			</CheckoutControlFlow>
		</Fragment>
	);
}

export default CheckoutContainer;
