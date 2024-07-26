import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.make = action.payload;
    },
    resetFilter(state) {
      state.make = null;
    },
  },
});

export const { changeFilter, resetFilter } = filtersSlice.actions;

export const selectCarFilter = (state) => state.filters.make;

export default filtersSlice.reducer;
