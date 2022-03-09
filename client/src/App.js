import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import Layout from "components/layout/Layout";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CheckoutPage from "pages/CheckoutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/vendors/fontawesome/css/all.css";
import "@reach/combobox/styles.css";
import "assets/styles.css";
import CartProvider from "context/cart/cart.provider";
import TourPackages from "pages/TourPackages";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Header />

				<main id="content" className="site-main">
					<Route exact path="/checkout-flow" component={CheckoutPage} />
					<Route exact path="/" component={TourPackages} />
				</main>

				<Footer />
			</Layout>
		</BrowserRouter>
	);
}

export default function () {
	return (
		<CartProvider>
			<App />
		</CartProvider>
	);
}


