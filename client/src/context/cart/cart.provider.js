import React, { createContext, useContext, useReducer, useMemo, useEffect } from "react";
import { useLocalStorage } from "react-use";

import cartReducer, {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
	initialState
} from "./cart.reducer";

import { getItem } from "./cart.utils";

const cartContext = createContext();

cartContext.displayName = "CartContext";

export function useCart() {
	const context = useContext(cartContext);
	if (context === undefined) {
		throw new Error("useCart must be within CartProvider");
	}
	return context;
}

function CartProvider(props) {
	const [savedCart, handleCart] = useLocalStorage(`travel:cart`, JSON.stringify(initialState));

	const [state, dispatch] = useReducer(cartReducer, JSON.parse(savedCart));

	useEffect(() => {
		handleCart(JSON.stringify(state));
	}, [state, handleCart]);

	const increaseQty = (item, qty) => {
		dispatch({
			type: INCREASE_QUANTITY,
			item,
			qty
		});
	};

	const decreaseQty = (item, qty) => {
		dispatch({
			type: DECREASE_QUANTITY,
			item,
			qty
		});
	};

	const clearItemFromCart = (id) => {
		dispatch({
			type: REMOVE_ITEM_FROM_CART,
			id
		});
	};

	const addItemToCart = (item) => {
		dispatch({
			type: ADD_ITEM_TO_CART,
			item
		});
	};

	const isInCart = (id) => !!getItem(state.items, id);

	const getItemFromCart = (id) => getItem(state.items, id);

	const value = useMemo(
		() => ({
			state,
			increaseQty,
			decreaseQty,
			addItemToCart,
			clearItemFromCart,
			getItemFromCart,
			isInCart
		}),
		[state]
	);

	return <cartContext.Provider value={value} {...props} />;
}

export default CartProvider;
