import { ErrorMessage } from "formik";
import React from "react";

function Input({ field, labelName, type = "text", cn }) {
	return (
		<div className={`form-group ${cn ? cn : ""}`}>
			<label>{labelName}</label>
			<input type={type} {...field} />
			<div>
				<ErrorMessage name={field.name} />
			</div>
		</div>
	);
}

export default Input;

/*
{ field, meta, labelName, type = "text" }


			<span>{meta.touched && meta.error && meta.errror}</span>
*/
