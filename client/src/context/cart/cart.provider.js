import useLocalStorageState from "hooks/use-local-storage-state";
import React, { createContext, useContext, useReducer, useMemo, useEffect } from "react";

import cartReducer, {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY,
	ADD_GUEST
} from "./cart.reducer";

import { getItem } from "./cart.utils";

const cartContext = createContext();

cartContext.displayName = "CartContext";

const LOCAL_STORAGE_KEY = "travel:cart";

export function useCart() {
	const context = useContext(cartContext);
	if (context === undefined) {
		throw new Error("useCart must be within CartProvider");
	}
	return context;
}

const INITIAL_VALUES = {
	items: [],
	guest: {
		bikeRent: 0,
		insurance: 0,
		dinner: 0,
		guide: 0,
		firstName: "",
		lastName: "",
		email: "",
		confirmEmail: "",
		phone: "",
		start: "",
		end: "",
		nameOnCard: "",
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		country: "",
		street1: "",
		street2: "",
		city: "",
		state: "",
		postalCode: "",
		additionalInfo: "",
		tos: ""
	},
	isEmpty: true,
	totalItems: 0,
	totalUniqueItems: 0,
	total: 0,
	meta: null
};

function CartProvider(props) {
	const [savedCart, handleCart] = useLocalStorageState({
		key: LOCAL_STORAGE_KEY,
		value: INITIAL_VALUES
	});

	// console.log("savedCart -->", savedCart);

	const [state, dispatch] = useReducer(cartReducer, savedCart);

	useEffect(() => {
		handleCart(state);
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

	const addGuest = (guest) => {
		dispatch({
			type: ADD_GUEST,
			guest
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
			isInCart,
			addGuest
		}),
		[state]
	);

	return <cartContext.Provider value={value} {...props} />;
}

export default CartProvider;
