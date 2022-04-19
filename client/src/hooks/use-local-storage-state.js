import { useState, useCallback } from "react";

function useLocalStorageState({ key, value }) {
	const parsedLocalStorage = JSON.parse(localStorage.getItem(key) || "{}");

	const initialValue = Object.keys(parsedLocalStorage).length > 0 ? parsedLocalStorage : value;

	const [localStorageState, setLocalStorageState] = useState(initialValue);

	const setInLocalStorage = useCallback(
		(item) => {
			setLocalStorageState(item);
			localStorage.setItem(key, JSON.stringify(item));
		},
		[key]
	);
	return [localStorageState, setInLocalStorage];
}

export default useLocalStorageState;
