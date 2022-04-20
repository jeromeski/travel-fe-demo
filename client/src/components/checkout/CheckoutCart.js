import CartFooter from "components/cart/CartFooter";
import CartItem from "components/cart/CartItem";
import DiscountForm from "components/cart/DiscountForm";
import { useCart } from "context/cart/cart.provider";
import { useUI } from "context/ui.context";
import React from "react";

function CheckoutCart({ currentIdx, handleNext }) {
	const {
		state: { items, guest }
	} = useCart();

	const { setNextIdx } = useUI();

	console.log(items, guest);

	return (
		<div className="cart-list-inner">
			<form action="#">
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th />
								<th>Product Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Sub Total</th>
							</tr>
						</thead>
						{items && items.map((item) => <CartItem key={`cartItem:${item._id}`} {...item} />)}
					</table>
				</div>
				<div className="updateArea">
					<DiscountForm />
				</div>
				<div className="totalAmountArea">
					<CartFooter />
				</div>
				<div className="checkBtnArea text-right">
					<a href="#" className="button-primary" onClick={() => setNextIdx()}>
						checkout
					</a>
				</div>
			</form>
		</div>
	);
}

export default CheckoutCart;
