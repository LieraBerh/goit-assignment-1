import { createSelector } from "@reduxjs/toolkit";
import { selectCarFilter } from "../filters/slice";

export const selectAdverts = (state) => state.adverts.adverts;

export const selectLoading = (state) => state.adverts.loading;

export const selectError = (state) => state.adverts.error;

export const selectFilteredContacts = createSelector(
  [selectAdverts, selectCarFilter],
  (adverts, filter) => {
    return adverts.filter((advert) =>
      advert.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
