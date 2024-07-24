import s from "./CarCard.module.css";

const CarCard = ({
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
}) => {
  return (
    <div className={s.card_wrapper}>
      <img src={src} alt={alt} className={s.car_img} />
      <h3>
        {brand} {model} {year} $ {rentalPrice}
      </h3>
      <p>
        {address} | {rentalCompany} | {accessories[2]} | {mileage}
      </p>
    </div>
  );
};
export default CarCard;
