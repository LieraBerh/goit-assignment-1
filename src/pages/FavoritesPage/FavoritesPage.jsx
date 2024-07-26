/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/favoritesSlice";
import CarCard from "../../components/CarCard/CarCard";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(
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
              <li key={id}>
                <CarCard
                  id={id}
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
      ) : (
        <p>You haven't added any adverts to favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
