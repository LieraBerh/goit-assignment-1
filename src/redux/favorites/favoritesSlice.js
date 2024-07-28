import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars } from "./operations";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  allCars: [],
  status: "idle",
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const id = action.payload;
      const car = state.allCars.find((item) => item.id === id);
      if (car && !state.favorites.some((item) => item.id === id)) {
        state.favorites.push(car);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export const selectAllCars = (state) => state.favorites.allCars;
export const selectFavoritesStatus = (state) => state.favorites.status;
export const selectFavoritesError = (state) => state.favorites.error;

export default favoritesSlice.reducer;
