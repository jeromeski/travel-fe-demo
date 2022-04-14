import { ErrorMessage } from "formik";
import React from "react";
import { Fragment } from "react";

function Input({ field, labelName, type = "text", placeHolder }) {
  if (!labelName) {
		return (
			<div className="form-group">
				<input type={type} {...field} placeholder={placeHolder} className="form-control" />
				<div>
					<div className="text-danger">
						<small>
							<ErrorMessage name={field.name} />
						</small>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="form-group">
			<label>{labelName}</label>
			{/*<input type="hidden" value="pryaer" />*/}
			<input type={type} {...field} placeholder={placeHolder} className="form-control" />
			<div>
				<div className="text-danger">
					<small>
						<ErrorMessage name={field.name} />
					</small>
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
