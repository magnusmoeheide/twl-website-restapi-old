import React from 'react';
import './PopupMessage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopupMessage = ({ message, type,  onConfirm, onClose }) => {

    let icon = null;
    switch (type) {
        case 'warning':
            icon = (
                <div className="icon-container">
                    <span>Woopsie! </span>
                    <FontAwesomeIcon icon="fa-regular fa-face-surprise" className="warning"/>
                    <p>{message}</p>
                    <button onClick={onClose}>Close</button>    
                </div>
            );
        break;
        case 'confirm':
            icon = (
                <div className="icon-container">
                    <FontAwesomeIcon icon="fa-solid fa-circle-confirm" className="confirm"/>
                    <span className="icon-text">Please confirm</span>
                    <p>{message}</p>
                    <button onClick={onConfirm}>Delete student <FontAwesomeIcon icon="fa-solid fa-user-xmark" /></button>  
                    <button onClick={onClose}>Go back <FontAwesomeIcon icon="fa-solid fa-arrow-left" /></button>        
                </div>
            );
        break;
        case 'success':
            icon = (
                <div className="icon-container">
                    <FontAwesomeIcon icon="fa-regular fa-circle-check" className="success"/>
                    <span className="icon-text">Success</span>
                    <p>{message}</p>
                    <button onClick={onClose}>Close</button>    
                </div>
            );
        break;
        default:
        break;
    }
    

  return (
    <div className="popup-message">
        <div className={`popup-message-${type}`}>
            <div className="popup-message-content">
                {icon && <div className="popup-message-icon">{icon}</div>}
            </div>
        </div> 
    </div>
  );
};

export default PopupMessage;
