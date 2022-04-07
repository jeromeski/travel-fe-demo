import React from "react";

function PackageMap({ location }) {
	return (
		<div className="map-area">
			<iframe
				title="Rome"
				src={location}
				frameBorder={0}
				scrolling="no"
				marginHeight={0}
				marginWidth={0}
				height="450"
				allowFullScreen=""
			/>
		</div>
	);
}

export default PackageMap;
