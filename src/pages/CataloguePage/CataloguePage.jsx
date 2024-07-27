import { useDispatch, useSelector } from "react-redux";
import Catalogue from "../../components/Catalogue/Catalogue";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import {
  selectCarFilter,
  changeFilter,
  resetFilter,
} from "../../redux/filters/filtersSlice";
import { useLocation } from "react-router-dom";
import { resetAdverts, updatePage } from "../../redux/adverts/advertsSlice";
import {
  selectFilteredAdverts,
  selectHasMore,
  selectPage,
} from "../../redux/adverts/selectors";
import Dropdown from "../../components/Dropdown/Dropdown";
import { fetchAllAdverts } from "../../redux/favorites/operations";
import CarDetails from "../../components/CarDetailsModal/CarDetails";

const CataloguePage = () => {
  const [selectAdvert, setSelectAdvert] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();
  const make = useSelector(selectCarFilter);
  const location = useLocation();
  const page = useSelector(selectPage);
  const adverts = useSelector(selectFilteredAdverts);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchAdverts({ page, make }));
  }, [dispatch, page, make]);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetAdverts());
      dispatch(resetFilter());
    };
  }, [dispatch, location.pathname]);

  const handleMakeChange = (selectedMake) => {
    dispatch(changeFilter(selectedMake));
    dispatch(fetchAdverts({ page: 1, make: selectedMake }));
  };

  const handleModalOpen = (advert) => {
    setIsOpenModal(true);
    setSelectAdvert(advert);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectAdvert(null);
  };

  const handleLoadMore = () => {
    dispatch(updatePage());
  };

  return (
    <div>
      <Dropdown onMakeChange={handleMakeChange} />
      <Catalogue handleModalOpen={handleModalOpen} adverts={adverts} />
      {hasMore && <button onClick={handleLoadMore}>Load more</button>}
      <CarDetails
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectAdvert={selectAdvert}
      />
    </div>
  );
};
export default CataloguePage;
