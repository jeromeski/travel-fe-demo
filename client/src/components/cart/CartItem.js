import { useCart } from "contexts/cart/cart.provider";
import React from "react";
import { useLogger } from "react-use";
import Counter from "../common/Counter";

const CartItem = (item) => {
	const { image, name, price, qty } = item;

	useLogger("CartItem -->");
	const { increaseQty, decreaseQty } = useCart();

	return (
		<tbody>
			<tr>
				<td className="">
					<button className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
					<span className="cartImage">
						<img src={require(`assets/images/${image}.jpg`)} alt={name} />
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
};

export default CartItem;