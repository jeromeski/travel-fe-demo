import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CheckoutPage from "pages/CheckoutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/vendors/fontawesome/css/all.css";
import "@reach/combobox/styles.css";
import "assets/css/styles.css";
// import "@reach/tabs/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CartProvider from "context/cart/cart.provider";
import TourPackages from "pages/TourPackages";
import TourPackageDetails from "pages/TourPackageDetails";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Header />

				<main id="content" className="site-main">
					<Route exact path="/checkout-flow" component={CheckoutPage} />
					<Route exact path="/" component={TourPackages} />
					<Route exact path="/package/:slug" component={TourPackageDetails} />
				</main>

				<Footer />
			</Layout>
		</BrowserRouter>
	);
}

const queryClient = new QueryClient();

export default function () {
	return (
		<QueryClientProvider client={queryClient}>
			<CartProvider>
				<App />
			</CartProvider>
		</QueryClientProvider>
	);
}
