import { createContext, useContext, useState } from "react";

const checkoutContext = createContext();

checkoutContext.displayName = "CheckoutContext";

export function useCheckout() {
	const context = useContext(checkoutContext);
	if (context === undefined) {
		throw new Error("useCheckout must be within CheckoutProvider");
	}
	return context;
}

const CheckoutProvider = () => {
	const [payInfo, setPayInfo] = useState(0);

	const value = [payInfo, setPayInfo];

	return <checkoutContext.Provider value={value} />;
};

export default CheckoutProvider;
