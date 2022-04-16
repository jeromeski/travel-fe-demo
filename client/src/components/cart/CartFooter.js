import { useCart } from "context/cart/cart.provider";
import React from "react";

function CartFooter() {
	const {
		state: { total }
	} = useCart();
	return (
		<ul className="list-unstyled">
			<li>
				<strong>Sub Total</strong> <span>$ {total}</span>
			</li>
			<li>
				<strong>Vat</strong> <span>$ 18.00</span>
			</li>
			<li>
				<strong>Grand Total</strong>{" "}
				<span className="grandTotal">$ {Math.round(total * 1.18)}</span>
			</li>
		</ul>
	);
}

export default CartFooter;
