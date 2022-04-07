import React, { useState } from "react";
// import ReactStars from "react-rating-stars-component";
import { Rating } from "react-simple-star-rating";

function CreateRating() {
	const [rating, setRating] = useState(0); // initial rating value

	// Catch Rating value
	const handleRating = (rate) => {
		setRating(rate);
		// other logic
	};
	return (
		<Rating
			count={5}
			onClick={handleRating}
			ratingValue={rating}
			size={24}
			isHalf={true}
			emptyIcon={<i className="far fa-star"></i>}
			halfIcon={<i className="fa fa-star-half-alt"></i>}
			fullIcon={<i className="fa fa-star"></i>}
			activeColor="#ffd700"
			a11y={true}
			allowHalfIcon={true}
			transition={true}
		/>
	);
}

export default CreateRating;
