import { combineReducers } from "redux";

import cartReducer from "../components/Cart/store/reducer";
import pizzaReducer from "../components/Pizza/store/reducer";

const rootReducer = combineReducers({
  pizzaReducer,
  cartReducer
});

export default rootReducer;
