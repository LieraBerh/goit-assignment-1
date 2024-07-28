import { useDispatch, useSelector } from "react-redux";
import Catalogue from "../../components/Catalogue/Catalogue";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectCarFilter,
  changeFilter,
  resetFilter,
} from "../../redux/filters/filtersSlice";
import { useLocation } from "react-router-dom";
import { resetCars, updatePage } from "../../redux/cars/carsSlice";
import {
  selectFilteredCars,
  selectHasMore,
  selectPage,
} from "../../redux/cars/selectors";
import Dropdown from "../../components/Dropdown/Dropdown";
import { fetchAllCars } from "../../redux/favorites/operations";
import CarDetails from "../../components/CarDetailsModal/CarDetails";

const CataloguePage = () => {
  const [selectCar, setSelectCar] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();
  const make = useSelector(selectCarFilter);
  const location = useLocation();
  const page = useSelector(selectPage);
  const cars = useSelector(selectFilteredCars);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchCars({ page, make }));
  }, [dispatch, page, make]);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetCars());
      dispatch(resetFilter());
    };
  }, [dispatch, location.pathname]);

  const handleMakeChange = (selectedMake) => {
    dispatch(changeFilter(selectedMake));
    dispatch(fetchCars({ page: 1, make: selectedMake }));
  };

  const handleModalOpen = (car) => {
    setIsOpenModal(true);
    setSelectCar(car);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectCar(null);
  };

  const handleLoadMore = () => {
    dispatch(updatePage());
  };

  return (
    <div>
      <Dropdown onMakeChange={handleMakeChange} />
      <Catalogue handleModalOpen={handleModalOpen} cars={cars} />
      {hasMore && <button onClick={handleLoadMore}>Load more</button>}
      <CarDetails
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectCar={selectCar}
      />
    </div>
  );
};
export default CataloguePage;
