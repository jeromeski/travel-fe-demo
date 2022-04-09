import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetReviews } from "api/get-resources";

import ReviewThread from "./ReviewThread";
import ReviewForm from "./ui/ReviewForm";

function PackageReviews() {
	const [reviews, setReviews] = useState();
	const { data, isLoading } = useGetReviews();
	const { slug } = useParams();

	useEffect(() => {
		if (data) {
			const targetReviews = data.reviews.find((review) => review.slug === slug);
			setReviews(targetReviews);
		}
	}, [data]);

	if (isLoading || !reviews) {
		return <h1>LOADING...</h1>;
	}
	return (
		<Fragment>
			<div className="summary-review">
				<div className="review-score">
					<span>{reviews.summaryScore}</span>
				</div>
				<div className="review-score-content">
					<h3>
						Excellent
						<span>( Based on {reviews.totalReviews} reviews )</span>
					</h3>
					<p>{reviews.summaryLead}</p>
				</div>
			</div>

			<div className="comment-area">
				<h3 className="comment-title">{reviews.posts.length} Reviews</h3>
				<div className="comment-area-inner">
					{reviews.posts && <ReviewThread posts={reviews.posts} setReviews={setReviews} />}
				</div>
				<div className="comment-form-wrap">
					<h3 className="comment-title">Leave a Review</h3>
					<ReviewForm setReviews={setReviews} />
				</div>
			</div>
		</Fragment>
	);
}

export default PackageReviews;

/*

*/
