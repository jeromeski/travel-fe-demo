import { createContext, useState, useContext } from "react";

const Context = createContext();

export const DialogProvider = ({ children }) => {
	const [showDialog, setShowDialog] = useState(false);

	return <Context.Provider value={{ showDialog, setShowDialog }}>{children}</Context.Provider>;
};

export const useDialog = () => {
	return useContext(Context);
};
