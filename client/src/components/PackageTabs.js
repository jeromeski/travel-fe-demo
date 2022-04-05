import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

function PackageTabs({ data }) {
	const { description1, description2, rules } = data;
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
					<p>{description1}</p>
					<p>{description2}</p>
					{rules && rules.map((rule, idx) => <p key={idx}>{rule}</p>)}
				</TabPanel>
				<TabPanel>
					<p>Program</p>
				</TabPanel>
				<TabPanel>
					<p>Review</p>
				</TabPanel>
				<TabPanel>
					<p>Map</p>
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
