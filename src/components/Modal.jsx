import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ children, buttonContent, isPersistent }) {
  const [show, setShow] = useState(isPersistent);

  function close() {
    if (!isPersistent) {
      setShow(false);
    }
  }

  return (
    <>
      {show && (
      <div className="modal-backdrop" onClick={() => close()} role="button" tabIndex={0} onKeyDown={() => close()}>
        <div className="modalContent" onClick={(e) => { e.stopPropagation(); }} role="button" tabIndex={0} onKeyDown={(e) => { e.stopPropagation(); }}>
          {!isPersistent && <button className="closeButton" type="button" onClick={() => close()}>X</button>}
          {children}
        </div>
      </div>
      )}
      {!isPersistent && <button className="button" id="showHeroHandButton" type="button" onClick={() => setShow(true)}>{buttonContent}</button>}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  buttonContent: PropTypes.element.isRequired,
  isPersistent: PropTypes.bool,
};

Modal.defaultProps = {
  isPersistent: false,
};

export default Modal;
