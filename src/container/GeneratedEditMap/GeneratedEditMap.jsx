import  React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GeneratedEditMap = () => {
    const [createdMap, setCreatedMap] = useState(images.donkey);
    const [createdMapName, setCreatedMapName] = useState("Class_8A_110223");
    const [newName, setNewName] = useState('');

    const handleNewNameInput = (event) => {
        setNewName(event.target.value);
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
    <div>
        <div className="flexbox">
            <div className="item side left">

            </div>
            <div className="item center">
                <img src={createdMap}></img>
                <div className="flexbox">
                    <div className="item fullWidth center">
                        <div className="center">
                            <p>Created:</p>
                        </div>
                        
                        <input className="inputMapName" placeholder={createdMapName} onChange={handleNewNameInput}></input>
                        <button onClick={handleNameChange}>Change Name <FontAwesomeIcon icon="fa-solid fa-pen" /></button>
                    
                        <button onClick={handleMapChange}>Generate Again <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" /></button>
                        <a href={createdMap} download>
                            <button className="orangeBg">Print Simpler Version <FontAwesomeIcon icon="fa-solid fa-print" /></button>
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
            <div className="item side right">
                
            </div>
        </div>
       


        
    </div>
  )
};

export default GeneratedEditMap;