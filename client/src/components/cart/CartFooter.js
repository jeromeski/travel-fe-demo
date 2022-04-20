import { useCart } from "context/cart/cart.provider";
import React from "react";

function CartFooter() {
	const {
		state: { subTotal, totalItems, total, guest }
	} = useCart();
	return (
		<ul className="list-unstyled">
			<li>
				<strong>Sub Total</strong> <span>$ {subTotal}</span>
			</li>
			<li>
				<strong>Guide</strong> <span>$ {guest.guide}</span>
			</li>
			<li>
				<strong>Bike Rent</strong> <span>$ {totalItems * guest.bikeRent}</span>
			</li>
			<li>
				<strong>Insurance</strong> <span>$ {totalItems * guest.insurance}</span>
			</li>
			<li>
				<strong>Dinner</strong> <span>$ {totalItems * guest.dinner}</span>
			</li>

			<li>
				<strong>Vat</strong> <span>$ 18.00</span>
			</li>
			<li>
				<strong>Grand Total</strong> <span className="grandTotal">$ {Math.round(total)}</span>
			</li>
		</ul>
	);
}

export default CartFooter;
