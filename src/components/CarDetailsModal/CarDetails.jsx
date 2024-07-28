import numeral from "numeral";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

const CarDetails = ({ modalIsOpen, closeModal, selectCar }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {selectCar && (
          <>
            <img src={selectCar.src} alt={selectCar.alt} />
            <h3>
              {selectCar.brand} {selectCar.model} ({selectCar.year})
            </h3>
            <p>Rental Price: {selectCar.rentalPrice}</p>
            <p>Address: {selectCar.address}</p>
            <p>Rental Company: {selectCar.rentalCompany}</p>
            <p>Mileage: {numeral(selectCar.mileage).format("0,0")} miles</p>
            <p>Accessories: {selectCar.accessories.join(", ")}</p>
            <p>Rental Conditions - {selectCar.rentalConditions}</p>
          </>
        )}
      </Modal>
    </div>
  );
};
export default CarDetails;
