import React, { useState, useEffect } from "react";

function RatingStars({ rating }) {
	const [newRating, setNewRating] = useState();

	useEffect(() => {
		if (rating) {
			if (rating > 5) {
				const val = rating / 10 / 2;
				setNewRating(val);
			}
			if (rating <= 5) {
				setNewRating(rating);
			}
		}
	}, [rating]);

	if (!newRating) return <React.Fragment></React.Fragment>;
	if (newRating === 5)
		return <div className="rating-start" title={`Rated ${newRating} out of 5`}></div>;
	if (newRating >= 4.49 && newRating < 5)
		return (
			<div className="rating-start" title={`Rated ${newRating} out of 5`}>
				<span style={{ width: "90%" }} />
			</div>
		);
	if (newRating >= 3.99 && newRating < 4.5)
		return (
			<div className="rating-start" title={`Rated ${newRating} out of 5`}>
				<span style={{ width: "80%" }} />
			</div>
		);
	if (newRating >= 3.49 && newRating < 4)
		return (
			<div className="rating-start" title={`Rated ${newRating} out of 5`}>
				<span style={{ width: "70%" }} />
			</div>
		);
	if (newRating >= 2.99 && newRating < 3.5)
		return (
			<div className="rating-start" title={`Rated ${newRating} out of 5`}>
				<span style={{ width: "60%" }} />
			</div>
		);
	if (newRating >= 2.49 && newRating < 3)
		return (
			<div className="rating-start" title={`Rated ${newRating} out of 5`}>
				<span style={{ width: "40%" }} />
			</div>
		);
	if (newRating >= 1.99 && newRating < 2.5)
		return (
			<div className="rating-start" title={`Rated ${newRating} out of 5`}>
				<span style={{ width: "20%" }} />
			</div>
		);
}

export default RatingStars;
