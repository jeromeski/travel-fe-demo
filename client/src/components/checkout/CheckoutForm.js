import { Formik } from "formik";
import React, { Fragment } from "react";
import INITIAL_VALUES from "components/form-model/form-initial-values";
import checkoutFormModel from "components/form-model/checkout-form-model";
import validationSchema from "components/form-model/validation-schema";

import useLocalStorageState from "hooks/useLocalStorageState";

import { useDialog } from "context/dialog";

import CustomForm from "./CustomForm";

import { useLogger } from "react-use";
import DialogModal from "components/ui/DialogModal";

const { formId } = checkoutFormModel;
const LOCAL_STORAGE_KEY = `travel:${formId}`;

function CheckoutForm({ onConfirmation, setCurrentIdx }) {
	useLogger("Check Form");
	const [initialValues, handleUpdateForm] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY,
		value: INITIAL_VALUES
	});

	const { showDialog, setShowDialog } = useDialog();

	return (
		<Fragment>
			<h1>Checkout Form</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={() => {
					setShowDialog(true);
				}}
				validationSchema={validationSchema}>
				{(formik) => {
					const { values, resetForm } = formik;
					console.log(formik);
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<CustomForm values={values} handleUpdateForm={handleUpdateForm} />
									<DialogModal
										showDialog={showDialog}
										setShowDialog={setShowDialog}
										values={values}
										resetForm={resetForm}
										onConfirmation={onConfirmation}
										setCurrentIdx={setCurrentIdx}
									/>
								</div>
								<div className="col-md-6">
									<pre>{JSON.stringify(values, null, 4)}</pre>
								</div>
							</div>
						</div>
					);
				}}
			</Formik>
		</Fragment>
	);
}

export default CheckoutForm;
