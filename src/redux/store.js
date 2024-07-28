import carsReducer from "./cars/carsSlice";
import favoritesReducer from "./favorites/favoritesSlice.js";
import filtersReducer from "./filters/filtersSlice.js";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
