import { createContext, useReducer } from "react";
import INITIAL_STATE from "./initial-state";
import Reducer from "./reducer";

export const Context = createContext(INITIAL_STATE);
const HotelContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default HotelContextProvider;
