import DefaultSeo from "components/layout/DefaultSeo";
import PackageCard from "components/PackageCard";
import PageHeader from "components/ui/PageHeader";
import React, { Fragment, useEffect, useState } from "react";
import { useGetPackages } from "api/get-resources";

function TourPackages() {
  const [packageList, setPackageList] = useState();
	const { data, isLoading } = useGetPackages();

  useEffect(() => {
    if(data) {
      setPackageList(data.packages)
    }
  },[data])

  if(isLoading || !data) {
    return <h1>LOADING...</h1>
  }

	return (
		<Fragment>
			<DefaultSeo />
			<PageHeader pageHeader="" />
			<div className="package-section">
				<div className="container">
					<div className="package-inner">
						<div className="row">
							{packageList &&
								packageList.map((item) => {
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


/*
<Fragment>
			<DefaultSeo />
			<PageHeader pageHeader="" />
			<div className="package-section">
				<div className="container">
					<div className="package-inner">
						<div className="row">
							{packages &&
								packages.map((item) => {
									return <PackageCard key={item._id} {...item} />;
								})}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
*/ 