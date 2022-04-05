import React from "react";

function RatingStars({ rating }) {
  
	const displayedStars = () => {
		if (rating === 5) return <span style={{ width: "100%" }} />;
		if (rating > 4.49 && rating < 5) return <span style={{ width: "90%" }} />;
		if (rating > 3.99 && rating < 4.5) return <span style={{ width: "80%" }} />;
		if (rating > 3.49 && rating < 4) return <span style={{ width: "70%" }} />;
		if (rating > 2.99 && rating < 3.5) return <span style={{ width: "60%" }} />;
		if (rating > 2.49 && rating < 3) return <span style={{ width: "40%" }} />;
		if (rating > 1.99 && rating < 2.5) return <span style={{ width: "20%" }} />;
	};
	return (
		<div className="rating-start" title="Rated 5 out of 5">
			{rating && displayedStars()}
		</div>
	);
}

export default RatingStars;

