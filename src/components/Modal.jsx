import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ children, buttonContent, buttonShow }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
      <div className="modalContent">
        <button className="closeButton" type="button" onClick={() => setShow(false)}>X</button>
        {children}
      </div>
      )}
      {buttonShow && <button className="drawButton" id="showHeroHandButton" type="button" onClick={() => setShow(true)}>{buttonContent}</button>}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  buttonContent: PropTypes.element.isRequired,
  buttonShow: PropTypes.bool.isRequired,
};

export default Modal;
