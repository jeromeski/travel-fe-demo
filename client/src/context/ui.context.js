import React from "react";
import CartProvider from "./cart/cart.provider";

const INIT_STATE = {
	displayModal: false,
	modalView: "COMMENT_VIEW",
	currentIdx: 0
};

const UIContext = React.createContext();

UIContext.displayName = "UIContext";

const uiReducer = (state, action) => {
	switch (action.type) {
		case "SET_MODAL_VIEW": {
			return {
				...state,
				modalView: action.view
			};
		}
		case "OPEN_MODAL": {
			return {
				...state,
				displayModal: true
			};
		}
		case "CLOSE_MODAL": {
			return {
				...state,
				displayModal: false
			};
		}

		case "NEXT": {
			return {
				...state,
				currentIdx: state.currentIdx + 1
			};
		}

		case "PREV": {
			return {
				...state,
				currentIdx: state.currentIdx - 1
			};
		}

		default:
			return state;
	}
};

export const UIProvider = (props) => {
	const [state, dispatch] = React.useReducer(uiReducer, INIT_STATE);

	const openModal = () => dispatch({ type: "OPEN_MODAL" });
	const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
	const setModalView = (view) => dispatch({ type: "SET_MODAL_VIEW", view });
	const setNextIdx = () => dispatch({ type: "NEXT" });
	const setPrevIdx = () => dispatch({ type: "PREV" });

	const value = React.useMemo(
		() => ({
			...state,
			openModal,
			closeModal,
			setModalView,
			setNextIdx,
			setPrevIdx
		}),
		[state]
	);

	return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
	const context = React.useContext(UIContext);
	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`);
	}
	return context;
};

export const ManagedUIContext = ({ children }) => {
	return (
		<CartProvider>
			<UIProvider>{children}</UIProvider>
		</CartProvider>
	);
};
