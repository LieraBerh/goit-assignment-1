import CarCard from "../CarCard/CarCard";
import s from "./Catalogue.module.css";

const Catalogue = ({ handleModalOpen, adverts }) => {
  return (
    <div>
      <ul className={s.catalogue}>
        {adverts.map((advert) => (
          <li key={advert.id} className={s.catalogue_item}>
            <CarCard
              id={advert.id}
              src={advert.img}
              alt={advert.description}
              year={advert.year}
              brand={advert.make}
              model={advert.model}
              rentalPrice={advert.rentalPrice}
              address={advert.address}
              rentalCompany={advert.rentalCompany}
              mileage={advert.mileage}
              accessories={advert.accessories}
              rentalConditions={advert.rentalConditions}
              handleModalOpen={handleModalOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
