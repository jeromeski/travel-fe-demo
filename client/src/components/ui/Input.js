import { ErrorMessage } from "formik";
import React from "react";

function Input({ field, labelName, type }) {
	return (
		<div className="form-group">
			<label>{labelName}</label>
			<input type={type} {...field} />
			<ErrorMessage name={field.name} />
		</div>
	);
}

export default Input;

/*
{ field, meta, labelName, type = "text" }


			<span>{meta.touched && meta.error && meta.errror}</span>
*/
