import React, { Fragment } from "react";

function ProgramContent({ itineraryDescription, itineraryTimeline, days }) {
	return (
		<Fragment>
			<div className="itinerary-content">
				<h3>
					Program <span>( {days} days )</span>
				</h3>
				<p>{itineraryDescription}</p>
			</div>
			<div className="itinerary-timeline-wrap">
				<ul>
					{itineraryTimeline &&
						itineraryTimeline.map(({ id, dayCount, title, desc, ...rest }) => (
							<li key={id} {...rest}>
								<div className="timeline-content">
									<div className="day-count">
										Day <span>{dayCount}</span>
									</div>
									<h4>{title}</h4>
									<p>{desc}</p>
								</div>
							</li>
						))}
				</ul>
			</div>
		</Fragment>
	);
}

export default ProgramContent;

/*
<li>
  <div className="timeline-content">
    <div className="day-count">
      Day <span>1</span>
    </div>
    <h4>Ancient Rome Visit</h4>
    <p>
      Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum
      assumenda, qui aliquip ipsa! Dictum natus potenti pretium.
    </p>
  </div>
  </li>
<li>
  <div className="timeline-content">
    <div className="day-count">
      Day <span>2</span>
    </div>
    <h4>Classic Rome Sightseeing</h4>
    <p>
      Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum
      assumenda, qui aliquip ipsa! Dictum natus potenti pretium.
    </p>
  </div>
  </li>
<li>
  <div className="timeline-content">
    <div className="day-count">
      Day <span>3</span>
    </div>
    <h4>Vatican City Visit</h4>
    <p>
      Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum
      assumenda, qui aliquip ipsa! Dictum natus potenti pretium.
    </p>
  </div>
  </li>
<li>
  <div className="timeline-content">
    <div className="day-count">
      Day <span>4</span>
    </div>
    <h4>Italian Food Tour</h4>
    <p>
      Nostra semper ultricies eu leo eros orci porta provident, fugit? Pariatur interdum
      assumenda, qui aliquip ipsa! Dictum natus potenti pretium.
    </p>
  </div>
</li>
*/
