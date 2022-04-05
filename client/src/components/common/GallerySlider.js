import React from "react";
import Slider from "react-slick";

function GallerySlider({ images }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false
	};
	return (
		<Slider {...settings}>
			{images &&
				images.map((image, idx) => (
					<div className="single-tour-item" key={idx}>
						<figure className="feature-image">
							<img src={require(`assets/images/img28.jpg`)} alt="" />
						</figure>
					</div>
				))}
		</Slider>
	);
}

export default GallerySlider;

/*
<div className="single-tour-item">
  <figure className="feature-image">
    <img src="assets/images/img28.jpg" alt="" />
  </figure>
</div>
<div className="single-tour-item">
  <figure className="feature-image">
    <img src="assets/images/img29.jpg" alt="" />
  </figure>
</div>
<div className="single-tour-item">
  <figure className="feature-image">
    <img src="assets/images/img32.jpg" alt="" />
  </figure>
</div>
<div className="single-tour-item">
  <figure className="feature-image">
    <img src="assets/images/img33.jpg" alt="" />
  </figure>
</div>
*/
