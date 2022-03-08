import React from "react";

function CartFooter() {
	return (
		<ul className="list-unstyled">
			<li>
				<strong>Sub Total</strong> <span>$ 3400.00</span>
			</li>
			<li>
				<strong>Vat</strong> <span>$ 18.00</span>
			</li>
			<li>
				<strong>Grand Total</strong> <span className="grandTotal">$ 4012.00</span>
			</li>
		</ul>
	);
}

export default CartFooter;
