import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts } from "./operations";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  allAdverts: [],
  status: "idle",
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const id = action.payload;
      const advert = state.allAdverts.find((item) => item.id === id);
      if (advert && !state.favorites.some((item) => item.id === id)) {
        state.favorites.push(advert);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (advert) => advert.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdverts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allAdverts = action.payload;
      })
      .addCase(fetchAllAdverts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export const selectAllAdverts = (state) => state.favorites.allAdverts;
export const selectFavoritesStatus = (state) => state.favorites.status;
export const selectFavoritesError = (state) => state.favorites.error;

export default favoritesSlice.reducer;
