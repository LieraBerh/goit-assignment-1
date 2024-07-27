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

const CarDetails = ({ modalIsOpen, closeModal, selectAdvert }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {selectAdvert && (
          <>
            <img src={selectAdvert.src} alt={selectAdvert.alt} />
            <h3>
              {selectAdvert.brand} {selectAdvert.model} ({selectAdvert.year})
            </h3>
            <p>Rental Price: {selectAdvert.rentalPrice}</p>
            <p>Address: {selectAdvert.address}</p>
            <p>Rental Company: {selectAdvert.rentalCompany}</p>
            <p>Mileage: {numeral(selectAdvert.mileage).format("0,0")} miles</p>
            <p>Accessories: {selectAdvert.accessories.join(", ")}</p>
            <p>Rental Conditions - {selectAdvert.rentalConditions}</p>
          </>
        )}
      </Modal>
    </div>
  );
};
export default CarDetails;
