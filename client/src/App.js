import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CheckoutPage from "pages/CheckoutPage";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Header />

				<Fragment>
					<Route exact path="/" component={CheckoutPage} />
				</Fragment>

				<Footer />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
