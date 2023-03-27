import  React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../constants';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GeneratedEditMap = () => {
    const [createdMap, setCreatedMap] = useState(images.donkey);
    const [createdMapName, setCreatedMapName] = useState("Class_8A_110223");
    const [newName, setNewName] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleNewNameInput = (event) => {
        setNewName(event.target.value);
        setButtonDisabled(false);
    }

    const handleNameChange = (event) => {
        setCreatedMapName(newName)
    }

    const handleMapChange = (event) => {
        if(createdMap == images.donkey){
            setCreatedMap(images.sheep)
        }
        else{
            setCreatedMap(images.donkey)
        }      
    }
    

  return (
    <div className="container">
        <Navbar title="Generated Map" previous="/optionalconditions"/>
        <div className="flexbox">
  
            <div className="item center">
                <div className="flexbox">
                    <div className="item">
                        <img src={createdMap}></img>
                    </div>
                </div>
                
                <div className="flexbox noGrow">
                    <div className="item fullWidth center">
                        <div className="center">
                            <p>Created:</p>
                        </div>
                        
                        <input className="inputMapName" placeholder={createdMapName} onChange={handleNewNameInput}></input>
                        <button onClick={handleNameChange} disabled={buttonDisabled}>Change Name <FontAwesomeIcon icon="fa-solid fa-pen" /></button>
                    
                        <button onClick={handleMapChange}>Generate Again <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" /></button>
                        <a href={createdMap} download>
                            <button className="orangeBg">Print Version <FontAwesomeIcon icon="fa-solid fa-print" /></button>
                        </a>
                        <a href={createdMap} download>
                            <button className="orangeBg">Print Map <FontAwesomeIcon icon="fa-solid fa-print" /></button>
                        </a>
                        <br /><br />
                        <div className="center">
                            <Link to="/">
                                <button className="orangeBg">Save and go Home <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>   
    </div>
  )
};

export default GeneratedEditMap;