import _ from "lodash";

import { getMonthList } from "month-list";

export function monthList() {
	const list = getMonthList("en");
	return list;
}

export function yearList(years) {
	const start = new Date().getFullYear();
	const yearsToShow = start + years;
	return _.range(start, yearsToShow);
}

export function getFormikProps(data) {
	function getFormProps(props) {
		return props;
	}

	function getValuesProps(props) {
		return props;
	}

	return {
		getFormProps,
		getValuesProps
	};
}


