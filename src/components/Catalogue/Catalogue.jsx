import {
  selectFilteredAdverts,
  selectHasMore,
  selectPage,
} from "../../redux/adverts/selectors";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import s from "./Catalogue.module.css";
import { fetchAdverts } from "../../redux/adverts/operations";

const Catalogue = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFilteredAdverts);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  const handleLoadMore = () => {
    dispatch(fetchAdverts({ page: page + 1 }));
  };

  return (
    <div>
      <ul className={s.catalogue}>
        {adverts.map(
          ({
            id,
            img,
            description,
            year,
            make,
            model,
            rentalPrice,
            address,
            rentalCompany,
            mileage,
            accessories,
          }) => (
            <li key={id} className={s.catalogue_item}>
              <CarCard
                src={img}
                alt={description}
                year={year}
                brand={make}
                model={model}
                rentalPrice={rentalPrice}
                address={address}
                rentalCompany={rentalCompany}
                mileage={mileage}
                accessories={accessories}
              />
            </li>
          )
        )}
      </ul>
      {hasMore && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};
export default Catalogue;
