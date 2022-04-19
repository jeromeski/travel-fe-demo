import React, { useState } from "react";

import CheckoutCart from "./CheckoutCart";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CheckoutControlFlow from "./CheckoutControlFlow";
import CheckoutForm from "./CheckoutForm";
import Container from "components/ui/Container";

import Steps from "components/multi-step/Steps";

function CheckoutContainer() {
	return (
		<Container>
			<div className="row">
				<div className="col-md-12">
					<Steps />
					<CheckoutControlFlow>
						<CheckoutCart />
						<CheckoutForm />
						<CheckoutConfirmation />
					</CheckoutControlFlow>
				</div>
			</div>
		</Container>
	);
}

export default CheckoutContainer;
