import DefaultSeo from "components/layout/DefaultSeo";
import PackageCard from "components/PackageCard";
import PageHeader from "components/ui/PageHeader";
import React, { Fragment } from "react";
import packageItems from "data/package-items";

function TourPackages() {
	return (
		<Fragment>
			<DefaultSeo />
			<PageHeader pageHeader="" />
			<div className="package-section">
				<div className="container">
					<div className="package-inner">
						<div className="row">
							{packageItems &&
								packageItems.map((item) => {
									return <PackageCard key={item._id} {...item} />;
								})}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default TourPackages;
