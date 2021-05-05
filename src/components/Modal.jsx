import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ children, buttonContent, buttonShow }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
      <div className="modal-backdrop" onClick={() => setShow(false)} role="button" tabIndex={0} onKeyDown={() => setShow(false)}>
        <div className="modalContent" onClick={(e) => { e.stopPropagation(); }} role="button" tabIndex={0} onKeyDown={(e) => { e.stopPropagation(); }}>
          <button className="closeButton" type="button" onClick={() => setShow(false)}>X</button>
          {children}
        </div>
      </div>
      )}
      {buttonShow && <button className="button" id="showHeroHandButton" type="button" onClick={() => setShow(true)}>{buttonContent}</button>}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  buttonContent: PropTypes.element.isRequired,
  buttonShow: PropTypes.bool.isRequired,
};

export default Modal;
