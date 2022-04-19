import React from "react";
import { useUI } from "context/ui.context";

function CheckoutDialog() {
	const { openModal, closeModal, setModalView } = useUI();

	const handleContinue = async () => {
		closeModal();
		setModalView("CALLBACK_VIEW");
		openModal();
	};

	return (
		<div className="dialog-box-wrap">
			{" "}
			<font size="8" className="dialog-box-icon">
				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
			</font>
			<p>Are you sure you want to continue?</p>
			<button className="button-primary mr-2" onClick={handleContinue}>
				Book Now
			</button>
			<button className="button-secondary" onClick={() => closeModal()}>
				Cancel
			</button>
		</div>
	);
}

export default CheckoutDialog;
