import React, { createContext, useEffect, useReducer } from "react";
import INITIAL_STATE from "./initial-state";
import Reducer from "./reducer";

export const Context = createContext(INITIAL_STATE);
const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	useEffect(() => {
		window.localStorage.setItem("user", JSON.stringify(state.user));
	}, [state.user]);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default AuthContextProvider;
