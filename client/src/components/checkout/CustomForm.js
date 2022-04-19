import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import Select from "components/ui/Select";
import { monthList, yearList } from "utils";
import Input from "components/ui/Input";
import { CountryDropdown } from "react-country-region-selector";
import checkoutFormModel from "form-model/checkout-form-model";
import _ from "lodash";
import cards from "assets/images/cards.png";
import ccv from "assets/images/icon_ccv.gif";
import Button from "components/ui/Button";
import { Fragment } from "react/cjs/react.development";

const { formId, formField } = checkoutFormModel;

function CustomForm({ handleUpdateForm, handlePrev }) {
	//
}
export default CustomForm;

/*
<button
					type="button"
					className="button-primary"
					onClick={
						// () => handleSubmit()
						submitForm
					}
					// disabled={!_.isEmpty(errors) && _.isEmpty(touched)}
					disabled={disabled}>
					Continue
				</button>
*/ 