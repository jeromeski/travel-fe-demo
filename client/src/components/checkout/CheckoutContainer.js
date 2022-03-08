import React, { useState } from "react";
import StepsContainer from "components/ui/step/StepsContainer";

import CheckoutCart from "./CheckoutCart";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CheckoutControlFlow from "./CheckoutControlFlow";
import CheckoutForm from "./CheckoutForm";
import Container from "components/ui/Container";


import CheckoutCallback from "./CheckoutCallback";
import { DialogProvider } from "context/dialog";

function CheckoutContainer() {
	const [currentIdx, setCurrentIdx] = useState(0);

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

	const onConfirmation = (values, resetForm) => {
		console.log(values);
		resetForm();
		localStorage.setItem("travel:checkout", "{}");
		setCurrentIdx(currentIdx + 1);
	};

	// TODOS --> Checkout container context para sa showDialog

	return (
		<Container>
			<div className="row">
				<div className="col-md-12">
					<StepsContainer currentIdx={currentIdx} />
					<CheckoutControlFlow currentIdx={currentIdx}>
						<CheckoutCart handleNext={handleNext} currentIdx={currentIdx} />
						<DialogProvider>
							<CheckoutForm
								handleNext={handleNext}
								handlePrev={handlePrev}
								currentIdx={currentIdx}
								setCurrentIdx={setCurrentIdx}
								onConfirmation={onConfirmation}
							/>
						</DialogProvider>
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
