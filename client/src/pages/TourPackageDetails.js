import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PackageTabs from "components/PackageTabs";
import packageItems from "data/package-items";
import GallerySlider from "components/common/GallerySlider";

function TourPackageDetails() {
	const [packageData, setPackageData] = useState({});
	const { slug } = useParams();
	useEffect(() => {
		if (packageItems) {
			const packageItem = packageItems.find((item) => item.slug === slug);
			setPackageData(packageItem);
		}
	}, [slug]);

	return (
		<div className="single-tour-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="single-tour-inner">
							<h2>{packageData.name && packageData.name.toUpperCase()}</h2>
							<figure className="feature-image">
								<img src={require(`assets/images/img27.jpg`)} alt="" />
								<div className="package-meta text-center">
									<ul>
										<li>
											<i className="far fa-clock" />
											{packageData.days} days / {packageData.nights} night
										</li>
										<li>
											<i className="fas fa-user-friends" />
											People: {packageData.maxCount}
										</li>
										<li>
											<i className="fas fa-map-marked-alt" />
											{packageData.destination}
										</li>
									</ul>
								</div>
							</figure>
							<div className="tab-container">
								<PackageTabs data={packageData} />
							</div>
							<div className="single-tour-gallery">
								<h3>GALLERY / PHOTOS</h3>
								<GallerySlider images={packageData.images} />
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="sidebar">
							<div className="package-price">
								<h5 className="price">
									<span>$649</span> / per person
								</h5>
								<div className="start-wrap">
									<div className="rating-start" title="Rated 5 out of 5">
										<span style={{ width: "60%" }} />
									</div>
								</div>
							</div>
							<div className="widget-bg booking-form-wrap">
								<h4 className="bg-title">Booking</h4>
								<form className="booking-form">
									<div className="row">
										<div className="col-sm-12">
											<div className="form-group">
												<input name="name_booking" type="text" placeholder="Full Name" />
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-group">
												<input name="email_booking" type="text" placeholder="Email" />
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-group">
												<input name="phone_booking" type="text" placeholder="Number" />
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-group">
												<input
													className="input-date-picker"
													type="text"
													name="s"
													autoComplete="off"
													readOnly="readonly"
													placeholder="Date"
												/>
											</div>
										</div>
										<div className="col-sm-12">
											<h4 className="">Add Options</h4>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="checkbox-list">
													<input type="checkbox" name="s" />
													<span className="custom-checkbox" />
													Tour guide
												</label>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="checkbox-list">
													<input type="checkbox" name="s" />
													<span className="custom-checkbox" />
													Insurance
												</label>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="checkbox-list">
													<input type="checkbox" name="s" />
													<span className="custom-checkbox" />
													Dinner
												</label>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="checkbox-list">
													<input type="checkbox" name="s" />
													<span className="custom-checkbox" />
													Bike rent
												</label>
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-group submit-btn">
												<input type="submit" name="submit" defaultValue="Boook Now" />
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="widget-bg information-content text-center">
								<h5>TRAVEL TIPS</h5>
								<h3>NEED TRAVEL RELATED TIPS &amp; INFORMATION</h3>
								<p>
									Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid
									blandit, blandit torquent, odit placeat.{" "}
								</p>
								<a href="#" className="button-primary">
									GET A QUOTE
								</a>
							</div>
							<div
								className="travel-package-content text-center"
								style={{ backgroundImage: "url(assets/images/img11.jpg)" }}>
								<h5>MORE PACKAGES</h5>
								<h3>OTHER TRAVEL PACKAGES</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.
								</p>
								<ul>
									<li>
										<a href="#">
											<i className="far fa-arrow-alt-circle-right" />
											Vacation packages
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-arrow-alt-circle-right" />
											Honeymoon packages
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-arrow-alt-circle-right" />
											New year packages
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-arrow-alt-circle-right" />
											Weekend packages
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TourPackageDetails;

/*
const itemReviews = {
	totalReviews: 24,
	summaryScore: 4.9,
	summaryRating: "Excellent",
	summaryLead:
		"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum.",
	totalComments: 3,
	posts: [
		{
			author: "Tom Sawyer",
			authorThumb: "img20",
			postedOn: "Jan 10 2020",
			postRating: 4.5,
			postContent:
				"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
			comments: [
				{
					commentAuthor: "John Doe",
					commentAuthorRating: 4,
					commentContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					commentPostedOn: "Jan 10 2020"
				}
			]
		},
		{
			author: "Jana Smith",
			authorThumb: "img20",
			postedOn: "Jan 10 2020",
			postRating: 3.5,
			postContent:
				"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
			comments: []
		}
	]
};

const itemLocation = () => (
	<div className="mapouter">
		<div className="gmap_canvas">
			<iframe
				title="Map"
				width={600}
				height={500}
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
				frameBorder={0}
				scrolling="no"
				marginHeight={0}
				marginWidth={0}
			/>
		</div>
	</div>
);

const itemData = {
	_id: 0,
	name: "Experience the natural beauty of island",
	price: 1900.0,
	qty: 0,
	images: ["img5", "img6", "img7", "img8", "img9"],
	days: 7,
	nights: 6,
	maxCount: 5,
	destination: "Italy",
	description1:
		"Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultriciespraesent aute blandit beatae nisl aut, totam mauris rhoncus Tellus netus fringilla auctor dui. Dolores excepteur, doloribus, blanditiis aliquip nisl. Occaecat iusto? Provident sociis rerum. Amet, asperiores molestie varius eos! Libero, fermentum fermentum totam! Sunt praesentium, totam. Excepteur platea nisl. Convallis aliquam? Iaculis erat ipsa molestie, quod, vestibulum reiciendis, maxime nostra, integer unde officiis quo integer unde officiis quo.",
	description2:
		"Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultricies praesent aute blandit beatae nisl aut, totam mauris rhoncus? Tellus netus fringilla class auctor dui. Dolores excepteur, doloribus, blanditiis aliquip nisl..",
	rules: [
		"- Travel cancellation insurance",
		"- Breakfast and dinner included",
		"- Health care included",
		"- Transfer to the airport and return to the agency",
		"- Lorem ipsum dolor sit amet, consectetur adipiscing"
	],
	itineraryDescription:
		"Dolores maiores dicta dolore. Natoque placeat libero sunt sagittis debitis?Egestas non non qui quos, semper aperiam lacinia eum nam! Pede beatae.Soluta, convallis irure accusamus voluptatum ornare saepe cupidatat.",
	itineraryTimeline: [
		{
			id: 0,
			dayCount: 1,
			title: "Ancient Rome Visit",
			desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
		},
		{
			id: 1,
			dayCount: 2,
			title: "Classic Rome Sightseeing",
			desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
		},
		{
			id: 2,
			dayCount: 3,
			title: "Vatican City Visit",
			desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
		},
		{
			id: 3,
			dayCount: 4,
			title: "Italian Food Tour",
			desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
		}
	],
	inStock: true,
	sold: 25,
	reviews: itemReviews,
	location: itemLocation,
	rating: 3.5
};

*/
