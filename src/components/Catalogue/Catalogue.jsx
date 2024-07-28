import CarCard from "../CarCard/CarCard";
import s from "./Catalogue.module.css";

const Catalogue = ({ handleModalOpen, cars }) => {
  return (
    <div>
      <ul className={s.catalogue}>
        {cars.map((car) => (
          <li key={car.id} className={s.catalogue_item}>
            <CarCard
              id={car.id}
              src={car.img}
              alt={car.description}
              year={car.year}
              brand={car.make}
              model={car.model}
              rentalPrice={car.rentalPrice}
              address={car.address}
              rentalCompany={car.rentalCompany}
              mileage={car.mileage}
              accessories={car.accessories}
              rentalConditions={car.rentalConditions}
              handleModalOpen={handleModalOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
