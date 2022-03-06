import { ErrorMessage } from "formik";
import React from "react";

function Input({ field, labelName, type = "text", cn, placeHolder }) {
	return (
		<div className={`form-group ${cn ? cn : ""}`}>
			<label>{labelName}</label>
			<input type={type} {...field} placeholder={placeHolder} />
			<div>
				<div className="text-danger">
					<ErrorMessage name={field.name} />
				</div>
			</div>
		</div>
	);
}

export default Input;

/*
{ field, meta, labelName, type = "text" }


			<span>{meta.touched && meta.error && meta.errror}</span>
*/
