import LoadingOverlay from "components/common/LoadingOverlay";
import React from "react";
import { useLogger } from "react-use";
import { useEffect } from "react/cjs/react.development";

function CheckoutCallback({ currentIdx, setCurrentIdx, text, isActive }) {
	useLogger("CheckoutCallback -->");
	useEffect(() => {
		let current = true;
		if (current) {
			const timer = setTimeout(() => {
				setCurrentIdx(currentIdx + 1);
				clearTimeout(timer);
			}, [5000]);
		}
		return () => {
			current = false;
		};
	}, []);
	return (
		<div>
			<LoadingOverlay text={text} isActive={isActive} />
		</div>
	);
}

export default CheckoutCallback;
