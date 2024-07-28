import numeral from "numeral";
import s from "./CarCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../redux/favorites/favoritesSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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
      <div>
        <div className={s.img_wrapper}>
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
        </div>
        <h3 className={s.card_title}>
          <span>
            {brand} {model}, {year}
          </span>
          {rentalPrice}
        </h3>
        <div className={s.card_text}>
          <span>{address}</span>
          <span className={s.card_text_span}>|</span>
          <span>{rentalCompany}</span>
          <span className={s.card_text_span}>|</span>
          <span>{accessories[2]}</span>
          <span className={s.card_text_span}>|</span>
          <span>{formattedMileage} miles</span>
        </div>
        <button onClick={handleFavoriteClick} className={s.add_fav}>
          {isFavorite ? (
            <FaHeart size={18} style={{ fill: "#3470FF" }} />
          ) : (
            <FaRegHeart size={18} style={{ fill: "white" }} />
          )}
        </button>
      </div>
      <button
        className={s.learn_more}
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
      >
        Learn More
      </button>
    </div>
  );
};

export default CarCard;
