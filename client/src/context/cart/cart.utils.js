export function addItemWithQuantity(items, item, qty) {
	if (qty <= 0) throw new Error("cartQuantity can't be zero or less than zero");
	// hanapin ang index ng item na dadagdagan
	const existingItemIndex = items.findIndex((existingItem) => existingItem.id === item.id);

	if (existingItemIndex > -1) {
		// ispread out ang lahat ng items at ilagay sa panibagong variable.
		const newItems = [...items];
		// iupdate ang quantity ng existing item
		newItems[existingItemIndex].qty += qty;
		return newItems;
	}
	return [...items, { ...item, qty }];
}

export function removeItem(items, item) {
	return items.filter((existingItem) => existingItem._id !== item._id);
}

export function calculateItemsSubTotalAmount(items) {
	return items.reduce((total, item) => total + item.qty * item.price, 0);
}

export function calculateItemsTotalAmount(items, guest) {
	return items.reduce((total, item) => {
		const addons = guest.bikeRent + guest.dinner + guest.insurance;
		let newPrice = item.price + addons;
		// const newTotal = total + guest.guide + item.qty * newPrice;
		newPrice = newPrice * item.qty;
		let updatedItemTotal = newPrice + (guest.guide * 118) / 100;

		return total + updatedItemTotal;
	}, 0);
}

export function calculateItemsTotalQuantity(items) {
	return items.reduce((sum, item) => sum + item.qty, 0);
}

export function calculateUniqueItems(items) {
	return items.length;
}

export function getItem(items, _id) {
	return items.find((item) => item._id === _id);
}
