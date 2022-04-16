import React, { Fragment } from "react";

function PackageDescription({ description1, description2, rules }) {
	return (
		<Fragment>
			<p>{description1}</p>
			<p>{description2}</p>
			{rules && rules.map((rule, idx) => <p key={idx}>{rule}</p>)}
		</Fragment>
	);
}

export default PackageDescription;
