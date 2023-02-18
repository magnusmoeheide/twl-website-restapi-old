import React, { useState, useRef } from 'react';
import Donkey from '../../assets/donkey.webp';
import Cow from '../../assets/cow.jpeg';
import Sheep from '../../assets/sheep.jpeg';
import { Navbar } from '../../components';

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
        <div className="container">
            <Navbar title="View Maps"/>
            <div className="flexbox">
                <div className="item fullWidth">
                    <div className="flexbox noGrow">
                        <div className="item side left">
                            {selectedMap && (
                                <h2>{selectedMap}</h2>
                            )}
                        </div>
                        <div className="item">
                            <select onChange={handleSelectChange}>
                            <option selected="true" disabled="disabled">Choose map</option>
                            {MyMaps.map((map) => (
                            <option key={map.id} value={map.map}>
                                {map.map} (Created on {map.created})
                            </option>
                            ))}
                            </select>
                        </div>
                        <div className="item side right"></div>
                    </div>
                    <div className="flexbox">
                        <div id="yourmap" className="item" ref={mapRef}>
                            {selectedImage && (
                                <img src={selectedImage} alt={selectedMap} id="fullscreenmap"/>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flexbox noGrow smallMarginBottom">
                <div className="item">
                    <button disabled={!selectedMap} onClick={openFullscreen}>Open Fullscreen</button>
                    <a href={selectedImage} download>
                        <button disabled={!selectedMap}>Print Map</button>
                    </a>
                </div>
            </div>
            
        
       
        </div>       
    
    );

};


export default ViewMaps;