import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ children, buttonContent }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="drawButton" id="showHeroHandButton" type="button" onClick={() => setShow(true)}>{buttonContent}</button>
      {show && (
      <div className="modalContent">
        <button className="closeButton" type="button" onClick={() => setShow(false)}>X</button>
        {children}
      </div>
      )}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  buttonContent: PropTypes.element.isRequired,
};

export default Modal;
