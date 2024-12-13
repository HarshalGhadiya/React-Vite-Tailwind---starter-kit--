import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";

const combinedReducer = combineReducers({
  signin: authSlice,
});

const rootReducer = (state, action) => {
  if (
    action.type === "signin/logoutUser" ||
    action.type === "signin/logoutUserAdmin"
  ) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
