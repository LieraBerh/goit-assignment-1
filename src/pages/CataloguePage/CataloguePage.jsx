import { useDispatch, useSelector } from "react-redux";
import Catalogue from "../../components/Catalogue/Catalogue";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { selectPage } from "../../redux/adverts/selectors";
import { selectCarFilter } from "../../redux/filters/slice";

const CataloguePage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const make = useSelector(selectCarFilter);

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
