import React, { useState } from "react";
import StepsContainer from "components/ui/step/StepsContainer";

import CheckoutCart from "./CheckoutCart";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CheckoutControlFlow from "./CheckoutControlFlow";
import CheckoutForm from "./CheckoutForm";
import Container from "components/ui/Container";

import checkoutFormModel from "components/form-model/checkout-form-model";

import CheckoutCallback from "./CheckoutCallback";

function CheckoutContainer() {
	const [currentIdx, setCurrentIdx] = useState(1);
	const [showDialog, setShowDialog] = React.useState(false);

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

	const handleConfirm = (e, setTouched) => {
		setTouched();
		e.preventDefault();
	};

	const handleSubmit = (values, resetForm) => {
		console.log(values);
		resetForm();
		localStorage.setItem("travel:checkout", "{}");
		setCurrentIdx(currentIdx + 1);
	};

	return (
		<Container>
			<div className="row">
				<div className="col-md-12">
					<StepsContainer currentIdx={currentIdx} />
					<CheckoutControlFlow currentIdx={currentIdx}>
						<CheckoutCart handleNext={handleNext} currentIdx={currentIdx} />
						<CheckoutForm
							handleNext={handleNext}
							handlePrev={handlePrev}
							currentIdx={currentIdx}
							handleConfirm={handleConfirm}
							showDialog={showDialog}
							setShowDialog={setShowDialog}
							handleSubmit={handleSubmit}
						/>
						<CheckoutCallback
							text="Loading..."
							setCurrentIdx={setCurrentIdx}
							currentIdx={currentIdx}
							isActive={true}
						/>
						<CheckoutConfirmation handlePrev={handlePrev} currentIdx={currentIdx} />
					</CheckoutControlFlow>
				</div>
			</div>
		</Container>
	);
}

export default CheckoutContainer;
