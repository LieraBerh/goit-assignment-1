import { createSelector } from "@reduxjs/toolkit";
import { selectCarFilter } from "../filters/filtersSlice";

export const selectCars = (state) => state.cars.cars;

export const selectLoading = (state) => state.cars.loading;

export const selectError = (state) => state.cars.error;

export const selectPage = (state) => state.cars.page;

export const selectHasMore = (state) => state.cars.hasMore;

export const selectFilteredCars = createSelector(
  [selectCars, selectCarFilter],
  (cars, filter) => {
    if (!filter) return cars;
    return cars.filter((car) =>
      car.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
