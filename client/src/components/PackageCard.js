import { useCart } from "contexts/cart/cart.provider";
import React from "react";
import RatingStars from "./common/RatingStars";

function PackageCard(item) {
	const { image, price, days, nights, maxCount, destination, name, reviews, rating } = item;
	const { addItem } = useCart();
	const handleBook = () => {
		addItem(item);
	};
	return (
		<div className="col-lg-4 col-md-6">
			<div className="package-wrap">
				<figure className="feature-image">
					<a href="#">
						<img src={require(`assets/images/${image}.jpg`)} alt="" />
					</a>
				</figure>
				<div className="package-price">
					<h6>
						<span>${price}</span> / per person
					</h6>
				</div>
				<div className="package-content-wrap">
					<div className="package-meta text-center">
						<ul>
							<li>
								<i className="far fa-clock" />
								{days}D/{nights}N
							</li>
							<li>
								<i className="fas fa-user-friends" />
								People: {maxCount}
							</li>
							<li>
								<i className="fas fa-map-marker-alt" />
								{destination}
							</li>
						</ul>
					</div>
					<div className="package-content">
						<h3>
							<a href="#">{name}</a>
						</h3>
						<div className="review-area">
							<span className="review-text">({reviews} reviews)</span>
							<RatingStars rating={rating} />
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit
							tellus, luctus nec ullam elit tellpus.
						</p>
						<div className="btn-wrap">
							<a href="#" className="button-text width-6" onClick={handleBook}>
								Book Now
								<i className="fas fa-arrow-right" />
							</a>
							<a href="#" className="button-text width-6">
								Wish List
								<i className="far fa-heart" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PackageCard;
