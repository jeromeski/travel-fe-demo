import { LoadingOutlined } from "@ant-design/icons";
import LoadingOverlay from "components/common/LoadingOverlay";
import { useUI } from "context/ui.context";
import React from "react";
import { useLogger } from "react-use";
import { useEffect } from "react/cjs/react.development";

function CheckoutCallback() {
	useLogger("CheckoutCallback -->");
	const { closeModal, setNextIdx } = useUI();
	useEffect(() => {
		let current = true;
		if (current) {
			const timer = setTimeout(() => {
				closeModal();
				clearTimeout(timer);
				setNextIdx();
			}, [3000]);
		}
		return () => {
			current = false;
		};
	}, []);
	return (
		<div className="text-center">
			<LoadingOutlined style={{ fontSize: "2.5rem", color: "white", marginBottom: "10px" }} />
			<p style={{ color: "white", fontSize: "18px" }}>Please Wait...</p>
		</div>
	);
}

export default CheckoutCallback;
