import React, { Fragment } from "react";
import CheckoutContainer from "components/checkout/CheckoutContainer";
import DefaultSeo from "components/layout/DefaultSeo";
import PageHeader from "components/common/PageHeader";

function CheckoutPage() {
	return (
		<Fragment>
			<DefaultSeo />
			<PageHeader pageHeader="image-page-checkout" />
			<CheckoutContainer />
		</Fragment>
	);
}

export default CheckoutPage;
