import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredAdverts,
  selectHasMore,
} from "../../redux/adverts/selectors";
import CarCard from "../CarCard/CarCard";
import s from "./Catalogue.module.css";
import { updatePage } from "../../redux/adverts/advertsSlice";

const Catalogue = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFilteredAdverts);
  const hasMore = useSelector(selectHasMore);

  const handleLoadMore = () => {
    dispatch(updatePage());
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
                id={id} // Передайте id тут
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
