import React, { useState, useRef } from 'react';
import Donkey from '../../assets/donkey.webp';
import Cow from '../../assets/cow.jpeg';
import Sheep from '../../assets/sheep.jpeg';


const ViewMaps = props => {

    const MyMaps = [
        {id: 1, created: '17-02-2023',  map: '8A October', image: Donkey},
        {id: 2, created: '19-02-2023', map: '8A November', image: Cow},
        {id: 3, created: '28-02-2023', map: '8A December', image: Sheep},

    ];

    const [selectedMap, setSelectedMap] = useState(null);
    const [createdDate, setCreatedDate] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    

    const handleSelectChange = (event) => {
        const selectedMap = MyMaps.find((map) => map.map === event.target.value);
        setSelectedMap(event.target.value);
        setCreatedDate(selectedMap.created);
        setSelectedImage(selectedMap.image);
      };

      const mapRef = useRef(null);

      const openFullscreen = () => {
        if (mapRef.current) {
          mapRef.current.requestFullscreen();
        }
    }


    return (
        <div>
            <h1>View Your Maps</h1>
            <select onChange={handleSelectChange}>
                <option selected="true" disabled="disabled">Choose map</option>
                {MyMaps.map((map) => (
                <option key={map.id} value={map.map}>
                    {map.map} (Created on {map.created})
                </option>
                ))}
            </select>
            <button disabled={!selectedMap} onClick={openFullscreen}>Open Fullscreen</button>
            <a href={selectedImage} download>
                <button disabled={!selectedMap}>Print Map</button>
            </a>

            <div className='info'>
                {selectedMap && (
                    <h2>{selectedMap}</h2>
                )}
            </div>

            <div id="yourmap" ref={mapRef}>
                {selectedImage && (
                    <img src={selectedImage} alt={selectedMap} id="fullscreenmap"/>
                )}
            </div>
       
        </div>       
    
    );

};


export default ViewMaps;