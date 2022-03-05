import React, { useState } from "react";
import StepsContainer from "components/ui/step/StepsContainer";

import CheckoutCart from "./CheckoutCart";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CheckoutControlFlow from "./CheckoutControlFlow";
import CheckoutForm from "./CheckoutForm";
import Container from "components/ui/Container";

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
		<Container>
			<div className="row">
				<div className="col-md-12">
					<StepsContainer currentIdx={currentIdx} />
					<CheckoutControlFlow currentIdx={currentIdx}>
						<CheckoutCart handleNext={handleNext} currentIdx={currentIdx} />
						<CheckoutForm handleNext={handleNext} handlePrev={handlePrev} currentIdx={currentIdx} />
						<CheckoutConfirmation handlePrev={handlePrev} currentIdx={currentIdx} />
					</CheckoutControlFlow>
				</div>
			</div>
		</Container>
	);
}

export default CheckoutContainer;
