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
		slug: "sunset-view-of-beautiful-lakeside-resident",
		price: 1330.0,
		qty: 0,
		images: ["img5", "img6", "img7", "img8", "img9"],
		days: 5,
		nights: 4,
		maxCount: 8,
		destination: "Canada",
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
				title: "Canadian Rockies & Vancouver Island Road Trip",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 1,
				dayCount: 2,
				title: "Discover Whistler and the Canadian Rockies Road Trip",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 2,
				dayCount: 3,
				title: "Jurassic Adventure in Southern Alberta Road Trip",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 3,
				dayCount: 4,
				title: "Edmonton to the Rockies",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			}
		],
		inStock: true,
		sold: 17,
		reviews: {
			totalReviews: 20,
			summaryScore: 4.5,
			summaryRating: "Excellent",
			summaryLead:
				"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum.",
			totalComments: 3,
			posts: [
				{
					author: "King Mathers",
					authorThumb: "img20",
					postedOn: "Jan 10 2020",
					postRating: 4,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: [
						{
							commentAuthor: "Laney Bermúdez",
							commentAuthorRating: 3.5,
							commentContent:
								"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
							commentPostedOn: "Jan 10 2020"
						}
					]
				},
				{
					author: "Sonja Noguera",
					authorThumb: "img20",
					postedOn: "Jan 10 2020",
					postRating: 4.5,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: []
				}
			]
		},
		location:
			"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
		rating: 4.5
	},
	{
		_id: 2,
		name: "Vacation to the water city of Portugal",
		slug: "vacation-to-the-water-city-of-portugal",
		price: 2000.0,
		qty: 0,
		images: ["img5", "img6", "img7", "img8", "img9"],
		days: 6,
		nights: 5,
		maxCount: 8,
		destination: "Portugal",
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
				title: "Introduction to Lisbon",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 1,
				dayCount: 2,
				title: "Start your morning at Parque Eduardo VII",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 2,
				dayCount: 3,
				title: "Day trip to Sintra",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 3,
				dayCount: 4,
				title: "Lisbon and Belem",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			}
		],
		inStock: true,
		sold: 17,
		reviews: {
			totalReviews: 22,
			summaryScore: 4.9,
			summaryRating: "Very Good",
			summaryLead:
				"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum.",
			totalComments: 3,
			posts: [
				{
					author: "Barry Amador",
					authorThumb: "img20",
					postedOn: "Feb 20 2020",
					postRating: 4.5,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: [
						{
							commentAuthor: "Shauna Hawking",
							commentAuthorRating: 4.5,
							commentContent:
								"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
							commentPostedOn: "Jan 10 2020"
						}
					]
				},
				{
					author: "Tatianna Vargas",
					authorThumb: "img20",
					postedOn: "Jan 10 2020",
					postRating: 3.75,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: []
				}
			]
		},
		location:
			"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
		rating: 4.5
	},
	{
		_id: 3,
		name: "Beautiful season of the rural village",
		slug: "beautiful-season-of-the-rural-village",
		price: 1600.0,
		qty: 1,
		images: ["img25", "img26", "img27", "img28", "img29"],
		days: 5,
		nights: 4,
		maxCount: 6,
		destination: "Mexico",
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
				title: "Classic Mexico City & Riviera Maya",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 1,
				dayCount: 2,
				title: "Teotihuacan Archaeological Site & Basilica of Guadalupe",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 2,
				dayCount: 3,
				title: "Fly to Cancún - Drive to Valladolid",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 3,
				dayCount: 4,
				title: "Chichén Itzá & Yokdzonot Cenote",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			}
		],
		inStock: true,
		sold: 30,
		reviews: {
			totalReviews: 22,
			summaryScore: 4.9,
			summaryRating: "Excellent",
			summaryLead:
				"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum.",
			totalComments: 3,
			posts: [
				{
					author: "Stefan Van der Hout",
					authorThumb: "img20",
					postedOn: "Feb 20 2020",
					postRating: 4.5,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: [
						{
							commentAuthor: "Laurens Willey",
							commentAuthorRating: 4.5,
							commentContent:
								"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
							commentPostedOn: "Jan 10 2020"
						}
					]
				},
				{
					author: "Ruby Rake",
					authorThumb: "img20",
					postedOn: "June 06 2020",
					postRating: 3.75,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: []
				}
			]
		},
		location:
			"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
		rating: 4.0
	},
	{
		_id: 4,
		name: "Trekking to the base camp of mountain",
		slug: "trekking-to-the-base-camp-of-mountain",
		price: 1700.0,
		qty: 1,
		images: ["img5", "img6", "img7", "img8", "img9"],
		days: 5,
		nights: 4,
		maxCount: 6,
		destination: "Mexico",
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
				title: "Ek Balam Archaeological site, Xcanche Cenote & Community Tour",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 1,
				dayCount: 2,
				title: "Uxmal & Kabah Archaeological Sites - Transfer to Uxmal",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 2,
				dayCount: 3,
				title: "Muná Viewpoint - Transfer to Mérida",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 3,
				dayCount: 4,
				title: "Free Day in Tulum",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			}
		],
		inStock: true,
		sold: 30,
		reviews: {
			totalReviews: 19,
			summaryScore: 4.5,
			summaryRating: "Excellent",
			summaryLead:
				"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum.",
			totalComments: 3,
			posts: [
				{
					author: "Wioletta Haines",
					authorThumb: "img20",
					postedOn: "Feb 20 2020",
					postRating: 4.5,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: [
						{
							commentAuthor: "Merideth Brooke",
							commentAuthorRating: 4.5,
							commentContent:
								"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
							commentPostedOn: "Jan 10 2020"
						}
					]
				},
				{
					author: "Dyson Prieto",
					authorThumb: "img20",
					postedOn: "May 10 2021",
					postRating: 4.0,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: []
				}
			]
		},
		location:
			"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
		rating: 3.75
	},
	{
		_id: 5,
		name: "Summer holiday to the Davao River",
		slug: "summer-holiday-to-the-davao-river",
		price: 1800.0,
		qty: 0,
		images: ["img5", "img6", "img7", "img8", "img9"],
		days: 5,
		nights: 4,
		maxCount: 6,
		destination: "Philippines",
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
				title: "Fly into Puerto Princesa",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 1,
				dayCount: 2,
				title: "Settle in El Nido",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 2,
				dayCount: 3,
				title: "Explore El Nido Independently",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			},
			{
				id: 3,
				dayCount: 4,
				title: "Island hopping yet again",
				desc: "Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum natus potenti pretium."
			}
		],
		inStock: true,
		sold: 30,
		reviews: {
			totalReviews: 19,
			summaryScore: 4.5,
			summaryRating: "Excellent",
			summaryLead:
				"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum.",
			totalComments: 3,
			posts: [
				{
					author: "Wallace Antúnez",
					authorThumb: "img20",
					postedOn: "Feb 20 2020",
					postRating: 4.5,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: [
						{
							commentAuthor: "Maitland Sharp",
							commentAuthorRating: 4.5,
							commentContent:
								"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
							commentPostedOn: "Jan 10 2020"
						}
					]
				},
				{
					author: "Virgilio Jackson",
					authorThumb: "img20",
					postedOn: "April 09 2021",
					postRating: 4.0,
					postContent:
						"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
					comments: []
				}
			]
		},
		location:
			"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",
		rating: 5.0
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