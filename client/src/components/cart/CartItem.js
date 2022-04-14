import { useCart } from "context/cart/cart.provider";
import React from "react";
import { useLogger } from "react-use";
import Counter from "../common/Counter";

const CartItem = (item) => {
	const { _id, images, name, price, qty } = item;

	useLogger("CartItem -->");
	const { increaseQty, decreaseQty, clearItemFromCart } = useCart();
	const handleClearFromCart = (e) => {
		e.preventDefault();
		clearItemFromCart(_id);
	};

	if (item) {
		return (
			<tbody>
				<tr>
					<td className="">
						<button
							className="close"
							data-dismiss="alert"
							aria-label="Close"
							onClick={handleClearFromCart}>
							<span aria-hidden="true">×</span>
						</button>
						<span className="cartImage">
							<img src={require(`assets/images/${images[1]}.jpg`)} alt={name} />
						</span>
					</td>
					<td data-column="Product Name">{name}</td>
					<td data-column="Price">$ {price}</td>
					<td data-column="Quantity" className="count-input">
						{item && <Counter item={item} increment={increaseQty} decrement={decreaseQty} />}
					</td>
					<td data-column="Sub Total">$ {price * qty}</td>
				</tr>
			</tbody>
		);
	}
	 
};

export default CartItem;
