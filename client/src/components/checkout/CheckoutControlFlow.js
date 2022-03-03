import React from "react";

function CheckoutControlFlow({ children, currentIdx }) {
	const currentChild = React.Children.toArray(children)[currentIdx];

	return React.isValidElement(currentChild) ? React.cloneElement(currentChild) : currentChild;
}

export default CheckoutControlFlow;
