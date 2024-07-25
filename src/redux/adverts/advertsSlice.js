import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const initialState = {
  adverts: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};
const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    resetAdverts: (state) => {
      state.adverts = [];
      state.page = 1;
      state.hasMore = true;
    },
    updatePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length > 0) {
          state.adverts =
            state.page === 1
              ? action.payload
              : [...state.adverts, ...action.payload];
          state.hasMore = action.payload.length === 12;
        } else {
          state.hasMore = false;
        }
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAdverts, updatePage } = advertsSlice.actions;
export default advertsSlice.reducer;
