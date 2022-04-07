import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import ProgramContent from "./ProgramContent";
import PackageReviews from "./PackageReviews";
import PackageMap from "./PackageMap";
import PackageDescription from "./PackageDescription";

function PackageTabs({ data }) {
	const {
		description1,
		description2,
		rules,
		itineraryDescription,
		itineraryTimeline,
		days,
		location
	} = data;
	return (
		<Tabs className="tab-container">
			<TabList>
				<Tab className="tab-wrapper">
					<span className="tab-item">Description</span>
				</Tab>
				<Tab className="tab-wrapper">
					<span className="tab-item">Program</span>
				</Tab>
				<Tab className="tab-wrapper">
					<span className="tab-item">Review</span>
				</Tab>
				<Tab className="tab-wrapper">
					<span className="tab-item">Map</span>
				</Tab>
			</TabList>
			<TabPanels className="tab-content">
				<TabPanel className="overview-content">
					<PackageDescription
						description1={description1}
						description2={description2}
						rules={rules}
					/>
				</TabPanel>
				<TabPanel>
					<ProgramContent
						itineraryDescription={itineraryDescription}
						itineraryTimeline={itineraryTimeline}
						days={days}
					/>
				</TabPanel>
				<TabPanel>
					<PackageReviews />
				</TabPanel>
				<TabPanel>
					<PackageMap location={location} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default PackageTabs;

/*
<TabList className="nav-tabs">
  <Tab className="nav-item">
    <span className="nav-link">Description</span>
  </Tab>
  <Tab className="nav-item">
    <span className="nav-link">Program</span>
  </Tab>
  <Tab className="nav-item">
    <span className="nav-link">Review</span>
  </Tab>
  <Tab className="nav-item">
    <span className="nav-link">Map</span>
  </Tab>
</TabList>
*/
