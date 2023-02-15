import  React, { useState } from 'react';

import { images } from '../../constants'

const GeneratedEditMap = () => {
    const [createdMap, setCreatedMap] = useState(images.donkey);
    const [createdMapName, setCreatedMapName] = useState("SeatmapClass8A110223");
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
        <p>Created:</p>
        <input placeholder={createdMapName} onChange={handleNewNameInput}></input>
        <button onClick={handleNameChange}>Change Name</button>
        <img src={createdMap}></img>
        <button onClick={handleMapChange}>Generate Again</button>
        <a href={createdMap} download>
            <button>Print Simpler Version</button>
        </a>
        <a href={createdMap} download>
            <button>Print Map</button>
        </a>
    </div>
  )
};

export default GeneratedEditMap;