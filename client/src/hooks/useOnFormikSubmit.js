import { useState } from "react";

export default function useOnFormikSubmit(
	values,
	validateForm,
	errors,
	LOCAL_STORAGE_KEY,
	showDialog,
	setShowDialog,
	isSubmitting
) {
	const handleSubmit = (formData) => {
		console.log(formData);
		validateForm().then((props) => console.log(props));
		isSubmitting(true);
	};
	// if error is there don't show dialog

	return handleSubmit;
}
