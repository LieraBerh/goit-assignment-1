import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/slice";
import { favoritesReducer } from "./favorites/slice";
import { filtersReducer } from "./filters/slice";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
