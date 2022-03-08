import React from "react";
import { Fragment } from "react/cjs/react.development";

function DiscountForm() {
	return (
		<Fragment>
			<div className="input-group">
				<input type="text" className="form-control" placeholder="I have a discount coupon" />
				<button className="outline-primary">apply coupon</button>
			</div>
			<button className="outline-primary update-btn">update cart</button>
		</Fragment>
	);
}

export default DiscountForm;
