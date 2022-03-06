import React from "react";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption
} from "@reach/combobox";

import { ErrorMessage } from "formik";

function Select({ initValFn: values, labelName, field, form, placeHolder }) {
	const handleSelect = (val) => {
		form.setFieldValue(field.name, val);
	};

	return (
		<div className="form-group mb-2 mr-2">
			<label>{labelName}</label>
			<Combobox aria-labelledby="select" onSelect={handleSelect} name={field.name}>
				<ComboboxInput
					name={field.name}
					placeholder={placeHolder}
					className="months-search-input"
					onBlur={() => {
						form.setFieldTouched(field.name, true);
					}}
				/>
				<ComboboxPopover>
					<ComboboxList>
						{values &&
							values.length &&
							values.map((v) => <ComboboxOption key={`select:${v}`} value={v.toString()} />)}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
			<div className="text-danger">
				<ErrorMessage name={field.name} />
			</div>
		</div>
	);
}

export default Select;

/*
<ComboboxOption value="01" />
					<ComboboxOption value="02" />
					<ComboboxOption value="O3" />
					<ComboboxOption value="04" />
					<ComboboxOption value="05" />
					<ComboboxOption value="06" />
					<ComboboxOption value="07" />
					<ComboboxOption value="08" />
					<ComboboxOption value="09" />
					<ComboboxOption value="10" />
					<ComboboxOption value="11" />
					<ComboboxOption value="12" />
*/
