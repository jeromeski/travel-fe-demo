import React from "react";

function RatingStars({ rating }) {

	const newRating = rating / 10 / 2;
	console.log(newRating);
	const displayedStars = () => {
		if (newRating === 5) return <span style={{ width: "100%" }} />;
		if (newRating >= 4.49 && newRating < 5) return <span style={{ width: "90%" }} />;
		if (newRating >= 3.99 && newRating < 4.5) return <span style={{ width: "80%" }} />;
		if (newRating >= 3.49 && newRating < 4) return <span style={{ width: "70%" }} />;
		if (newRating >= 2.99 && newRating < 3.5) return <span style={{ width: "60%" }} />;
		if (newRating >= 2.49 && newRating < 3) return <span style={{ width: "40%" }} />;
		if (newRating >= 1.99 && newRating < 2.5) return <span style={{ width: "20%" }} />;
	};
	return (
		<div className="rating-start" title={`Rated ${newRating} out of 5`}>
			{newRating && displayedStars()}
		</div>
	);
}

export default RatingStars;

