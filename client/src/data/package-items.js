const packageItems = [
	{
		_id: 0,
		name: "Experience the natural beauty of island",
		slug: "experience-the-natural-beauty-of-island",
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
		reviews: {
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
		},
		location:
			"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
		rating: 3.5
	},
	{
		_id: 1,
		name: "Sunset view of beautiful lakeside resident",
		price: 1330.0,
		qty: 0,
		images: ["img5", "img6", "img7", "img8", "img9"],
		inStock: true,
		sold: 17,
		reviews: 14,
		days: 5,
		nights: 4,
		maxCount: 8,
		destination: "Canada",
		rating: 4
	},
	{
		_id: 2,
		name: "Vacation to the water city of Portugal",
		price: 2000.0,
		qty: 0,
		images: ["img5", "img6", "img7", "img8", "img9"],
		inStock: true,
		sold: 22,
		reviews: 19,
		days: 5,
		nights: 4,
		maxCount: 8,
		destination: "Portugal",
		rating: 3
	},
	{
		_id: 4,
		name: "Beautiful season of the rural village",
		price: 1400.0,
		qty: 1,
		images: ["img5", "img6", "img7", "img8", "img9"],
		inStock: true,
		sold: 22,
		reviews: 14,
		days: 6,
		nights: 5,
		maxCount: 6,
		destination: "Mexico",
		rating: 5
	},
	{
		_id: 5,
		name: "Trekking to the base camp of mountain",
		price: 1400.0,
		qty: 1,
		images: ["img5", "img6", "img7", "img8", "img9"],
		inStock: true,
		sold: 22,
		reviews: 16,
		days: 6,
		nights: 5,
		maxCount: 6,
		destination: "Peru",
		rating: 4
	},
	{
		_id: 6,
		name: "Summer holiday to the Oxolotan River",
		price: 1600.0,
		qty: 0,
		images: ["img5", "img6", "img7", "img8", "img9"],
		inStock: true,
		sold: 22,
		reviews: 20,
		days: 6,
		nights: 5,
		maxCount: 4,
		destination: "Philippines",
		rating: 5
	}
];

export default packageItems;

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