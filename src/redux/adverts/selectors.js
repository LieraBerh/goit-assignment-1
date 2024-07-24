import { createSelector } from "@reduxjs/toolkit";
import { selectCarFilter } from "../filters/slice";

export const selectAdverts = (state) => state.adverts.adverts;

export const selectLoading = (state) => state.adverts.loading;

export const selectError = (state) => state.adverts.error;

export const selectPage = (state) => state.adverts.page;
export const selectHasMore = (state) => state.adverts.hasMore;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectCarFilter],
  (adverts, filter) => {
    if (!filter) return adverts;
    return adverts.filter((advert) =>
      advert.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
