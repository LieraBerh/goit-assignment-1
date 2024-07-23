import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.make = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectCarFilter = (state) => state.filters.make;

export const filtersReducer = filtersSlice.reducer;
