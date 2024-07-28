import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars: (state) => {
      state.cars = [];
      state.page = 1;
      state.hasMore = true;
    },
    updatePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length > 0) {
          state.cars =
            state.page === 1
              ? action.payload
              : [...state.cars, ...action.payload];
          state.hasMore = action.payload.length === 12;
        } else {
          state.hasMore = false;
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars, updatePage } = carsSlice.actions;
export default carsSlice.reducer;
