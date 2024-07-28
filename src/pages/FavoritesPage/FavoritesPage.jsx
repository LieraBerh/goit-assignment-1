/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/favoritesSlice";
import Catalogue from "../../components/Catalogue/Catalogue";
import { useState } from "react";
import CarDetails from "../../components/CarDetailsModal/CarDetails";
import s from "./FavoritesPage.module.css";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const [selectCar, setSelectCar] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const favorites = useSelector(selectFavorites);

  const handleModalOpen = (car) => {
    setIsOpenModal(true);
    setSelectCar(car);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectCar(null);
  };

  return (
    <div>
      {favorites.length > 0 ? (
        <div>
          <Catalogue cars={favorites} handleModalOpen={handleModalOpen} />
          <CarDetails
            modalIsOpen={isOpenModal}
            closeModal={closeModal}
            selectCar={selectCar}
          />
        </div>
      ) : (
        <div className={s.empty_content}>
          <p className={s.empty_text}>
            You haven't added any adverts to favorites yet.
          </p>
          <Link to="/catalogue" className={s.link}>
            Go to catalogue
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
