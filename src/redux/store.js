import { combineReducers, configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./adverts/advertsSlice.js";
import favoritesReducer from "./favorites/favoritesSlice.js";
import filtersReducer from "./filters/filtersSlice.js";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
