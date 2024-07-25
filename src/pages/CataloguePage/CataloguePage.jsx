import { useDispatch, useSelector } from "react-redux";
import Catalogue from "../../components/Catalogue/Catalogue";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { selectCarFilter } from "../../redux/filters/filtersSlice";
import { useLocation } from "react-router-dom";
import { resetAdverts } from "../../redux/adverts/advertsSlice";
import { selectPage } from "../../redux/adverts/selectors";

const CataloguePage = () => {
  const dispatch = useDispatch();
  const make = useSelector(selectCarFilter);
  const location = useLocation();
  const page = useSelector(selectPage);

  useEffect(() => {
    return () => {
      dispatch(resetAdverts());
    };
  }, [dispatch, location.pathname]);

  useEffect(() => {
    dispatch(fetchAdverts({ page, make }));
  }, [dispatch, page, make]);

  return (
    <div>
      <Catalogue />
    </div>
  );
};
export default CataloguePage;
