import React from 'react';
import './PopupMessage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopupMessage = ({ message, type,  onConfirm, onClose, onActivate}) => {

    let icon = null;
    switch (type) {
        case 'info':
            icon = (
                <div className="icon-container">
                    <FontAwesomeIcon icon="fa-solid fa-circle-info" className="info"/>
                    <span> Do not use for a new school year</span>
                    <p>{message}</p>
                    <button onClick={onClose}>Got it!</button>    
                </div>
            );
        break;
        case 'info-print':
            icon = (
                <div className="icon-container">
                    <FontAwesomeIcon icon="fa-solid fa-circle-info" className="info"/>
                    <span> Instructions to upload an Excel sheet</span>
                    <p>{message}</p>
                    <button onClick={onActivate}>Got it!</button>   
                </div>
            );
        break;
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
        case 'warning-deleteall-confirm':
            icon = (
                <div className="icon-container">
                    <span>Are you sure? </span>
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="warning-deleteall-confirm"/>
                    <p>{message}</p>
                    <button onClick={onConfirm}>Start new year <FontAwesomeIcon icon="fa-solid fa-forward" /></button>  
                    <button onClick={onClose}>Go back</button>        
                </div>
            );
        break;        
        case 'warning-confirm':
            icon = (
                <div className="icon-container">
                    <span>Are you sure? </span>
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="warning-confirm"/>
                    <p>{message}</p>
                    <button onClick={onConfirm}>Delete teacher <FontAwesomeIcon icon="fa-solid fa-user-xmark" /></button>  
                    <button onClick={onClose}>Go back</button>        
                </div>
            );
        break;
        case 'confirm':
            icon = (
                <div className="icon-container">
                    <FontAwesomeIcon icon="fa-solid fa-circle-confirm" className="confirm"/>
                    <span className="icon-text">Please confirm</span>
                    <p>{message}</p>
                    <button onClick={onConfirm}>Delete <FontAwesomeIcon icon="fa-solid fa-user-xmark" /></button>  
                    <button onClick={onClose}>Go back</button>        
                </div>
            );
        break;
        case 'confirm-create':
            icon = (
                <div className="icon-container">
                    <FontAwesomeIcon icon="fa-solid fa-circle-confirm" className="confirm"/>
                    <span className="icon-text">Confirm <FontAwesomeIcon icon="fa-solid fa-person-circle-question" /></span>
                    <p>{message}</p>
                    <button onClick={onConfirm}>Create class <FontAwesomeIcon icon="fa-solid fa-check" /></button>  
                    <button onClick={onClose}>Go Back</button>        
                </div>
            );
        break;
        case 'success':
            icon = (
                <div className="icon-container">
                    <span className="icon-text">Hurray! </span>
                    <FontAwesomeIcon icon="fa-regular fa-circle-check" className="success"/>
                    <p>{message}</p>
                    <Link to="/createnewmap">
                        <button>Back to Create New Map</button>    
                    </Link>
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
