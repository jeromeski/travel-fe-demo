import { useUI } from "context/ui.context";
import React from "react";

function CheckoutControlFlow({ children }) {
	const { currentIdx } = useUI();
	const currentChild = React.Children.toArray(children)[currentIdx];

	return React.isValidElement(currentChild) ? React.cloneElement(currentChild) : currentChild;
}

export default CheckoutControlFlow;
