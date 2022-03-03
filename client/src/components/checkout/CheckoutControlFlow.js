import { Form, Formik } from "formik";
import React, { Fragment } from "react";

function CheckoutControlFlow({ children, currentIdx }) {
	const currentChild = React.Children.toArray(children)[currentIdx];

	return (
		<Formik>
			<Form>
				{React.isValidElement(currentChild) ? (
					React.cloneElement(currentChild)
				) : (
					<Fragment>{currentChild}</Fragment>
				)}
			</Form>
		</Formik>
	);
}

export default CheckoutControlFlow;
