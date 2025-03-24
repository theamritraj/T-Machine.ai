import PropTypes from "prop-types";
import "../styles/modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img
          src="/src/assets/courseSection/Tmachine.svg"
          alt="robot mascot"
          className="robot-image"
        />
        <div className="modal-header">
          You&#39;re about to begin your learning journey! Dive in, explore, and enhance your knowledge. Let&#39;s get started!
        </div>
        <button className="modal-button" onClick={onClose}>
          Yes
        </button>
      </div>
    </div>
  );
};

// Add PropTypes validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
