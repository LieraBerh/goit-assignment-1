import { useDispatch, useSelector } from "react-redux";
import Catalogue from "../../components/Catalogue/Catalogue";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import {
  selectCarFilter,
  changeFilter,
  resetFilter,
} from "../../redux/filters/filtersSlice";
import { useLocation } from "react-router-dom";
import { resetAdverts } from "../../redux/adverts/advertsSlice";
import { selectPage } from "../../redux/adverts/selectors";
import Dropdown from "../../components/Dropdown/Dropdown";
import { fetchAllAdverts } from "../../redux/favorites/operations";

const CataloguePage = () => {
  const dispatch = useDispatch();
  const make = useSelector(selectCarFilter);
  const location = useLocation();
  const page = useSelector(selectPage);

  useEffect(() => {
    return () => {
      dispatch(resetAdverts());
      dispatch(resetFilter());
    };
  }, [dispatch, location.pathname]);

  useEffect(() => {
    dispatch(fetchAdverts({ page, make }));
  }, [dispatch, page, make]);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const handleMakeChange = (selectedMake) => {
    dispatch(changeFilter(selectedMake));
    dispatch(fetchAdverts({ page: 1, make: selectedMake }));
  };

  return (
    <div>
      <Dropdown onMakeChange={handleMakeChange} />
      <Catalogue />
    </div>
  );
};
export default CataloguePage;
