import _ from "lodash";
import {
	calculateItemsSubTotalAmount,
	calculateItemsTotalAmount,
	calculateItemsTotalQuantity,
	calculateUniqueItems
} from "./cart.utils";

export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const RESET_CART = "RESET_CART";
export const ADD_GUEST = "ADD_GUEST";

export const initialState = {
	items: [],
	isEmpty: true,
	totalItems: 0,
	totalUniqueItems: 0,
	total: 0,
	meta: null
};

function cartReducer(state, action) {
	switch (action.type) {
		case INCREASE_QUANTITY: {
			const items = state.items.map((item) =>
				item._id === action.item._id
					? {
							...item,
							qty: action.qty ? item.qty + action.qty : item.qty + 1
					  }
					: item
			);
			return generateFinalState(state, items);
		}
		case DECREASE_QUANTITY: {
			let targetIdx = state.items.findIndex((existingItem) => existingItem._id === action.item._id);
			// console.log(`$The target element's idx is ${targetIdx}`, state.items[targetIdx].qty);
			if (state && state.items[targetIdx].qty === 0) {
				return state;
			} else {
				const items = state.items.map((item) =>
					item._id === action.item._id
						? {
								...item,
								qty: action.qty ? item.qty - action.qty : item.qty - 1
						  }
						: item
				);
				return generateFinalState(state, items);
			}
		}
		case ADD_ITEM_TO_CART: {
			const existingItem = state.items.findIndex(
				(existingItem) => existingItem._id === action.item._id
			);

			if (existingItem !== -1) {
				return state;
			}
			const updatedItems = [...state.items, action.item];
			console.log("updatedItems -->", updatedItems);
			const items = updatedItems.map((item) =>
				item._id === action.item._id
					? {
							...item,
							qty: item.qty + 1
					  }
					: item
			);

			return generateFinalState(state, items);
		}

		case REMOVE_ITEM_FROM_CART: {
			const items = state.items.filter((item) => item._id !== action.id);
			return generateFinalState(state, items);
		}

		case ADD_GUEST: {
			return {
				...state,
				guest: action.guest
			};
		}
		default:
			return state;
	}
}

const generateFinalState = (state, items, guest) => {
	const totalUniqueItems = calculateUniqueItems(items);
	return {
		...state,
		items: calculateItemsSubTotalAmount(items),
		totalItems: calculateItemsTotalQuantity(items),
		totalUniqueItems,
		total: calculateItemsTotalAmount(items),
		isEmpty: totalUniqueItems === 0
	};
};

export default cartReducer;
