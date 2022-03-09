import React, { useState } from "react";


function Counter({ item, increment, decrement }) {
	const [qty, setQty] = useState(1);

	const handleIncrement = () => {
		increment(item, qty);
	};

	const handleDecrement = () => {
		decrement(item, qty);
	};

	const handleChange = (e) => {
		setQty((prev) => prev + e.target.value);
	};

	return (
		<div>
			<button type="button" className="minus-btn" onClick={handleDecrement}>
				<i className="fa fa-minus" />
			</button>
			<input className="quantity" type="text" placeholder={item.qty} onChange={handleChange} />
			<button type="button" className="plus-btn" onClick={handleIncrement}>
				<i className="fa fa-plus" />
			</button>
		</div>
	);
}

export default Counter;
