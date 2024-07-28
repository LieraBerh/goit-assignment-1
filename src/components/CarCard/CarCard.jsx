import numeral from "numeral";
import s from "./CarCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../redux/favorites/favoritesSlice";

const CarCard = ({
  id,
  src,
  alt,
  year,
  brand,
  model,
  rentalPrice,
  address,
  rentalCompany,
  mileage,
  accessories,
  rentalConditions,
  handleModalOpen,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((car) => car.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const formattedMileage = numeral(mileage).format("0,0");

  return (
    <div className={s.card_wrapper}>
      <img
        src={src}
        alt={alt}
        className={s.car_img}
        onClick={() =>
          handleModalOpen({
            id,
            src,
            alt,
            year,
            brand,
            model,
            rentalPrice,
            address,
            rentalCompany,
            mileage,
            accessories,
            rentalConditions,
          })
        }
      />
      <h3>
        {brand} {model} ({year}) - {rentalPrice}
      </h3>
      <p>
        {address} | {rentalCompany} | {accessories[2]} | {formattedMileage}{" "}
        miles
      </p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CarCard;
