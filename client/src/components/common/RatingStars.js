import React from "react";

function RatingStars({ rating }) {
	return (
		<div className="rating-start" title="Rated 5 out of 5">
			{rating === 5 && <span style={{ width: "100%" }} />}
			{rating === 4.5 && <span style={{ width: "90%" }} />}
			{rating === 4 && <span style={{ width: "80%" }} />}
			{rating === 3.5 && <span style={{ width: "70%" }} />}
			{rating === 3 && <span style={{ width: "60%" }} />}
			{rating === 2 && <span style={{ width: "40%" }} />}
			{rating === 1 && <span style={{ width: "20%" }} />}
		</div>
	);
}

export default RatingStars;

/*
<div className="rating-start" title="Rated 5 out of 5">
			<span style={{ width: "60%" }} />
		</div>
*/
