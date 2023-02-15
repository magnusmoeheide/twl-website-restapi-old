import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';


const MyClasses = [
    {id: 1, class: '10C', teacher: 'Magnus', students: 17, created: '01-01-2023'},
    {id: 2, class: '10D', teacher: 'Magnus', students: 20, created: '01-01-2023'},
    {id: 3, class: '10E', teacher: 'Magnus', students: 22, created: '01-01-2023'},
    {id: 4, class: '9th Grade French', teacher: 'Magnus', students: 21, created: '01-01-2023'},
    {id: 5, class: '10th Grade French', teacher: 'Magnus', students: 25, created: '01-01-2023'},
]

const MapSuggestions = [
        {type: "Preview", suggestion1: "", suggestion2: "", suggestion3: ""},
        {type: "1 and 1", suggestion1: "Pizza", suggestion2: "Kebab", suggestion3: "Burger"},
        {type: "2 and 2", suggestion1: "Chicken", suggestion2: "Cow", suggestion3: "Dokney"},
        {type: "3 and 3", suggestion1: "Monday", suggestion2: "Tuesday", suggestion3: "Wednesday"},
        {type: "4 and 4", suggestion1: "Plate", suggestion2: "Glass", suggestion3: "Fork"},
        {type: "U-shape", suggestion1: "Plant", suggestion2: "Tree", suggestion3: "Bush"}
  ];


const CreateNewMap = () => {
    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [studentCount, setStudentCount] = useState(null);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [suggestion1, setSuggestion1] = useState(MapSuggestions[0].suggestion1);
    const [suggestion2, setSuggestion2] = useState(MapSuggestions[0].suggestion2);
    const [suggestion3, setSuggestion3] = useState(MapSuggestions[0].suggestion3);
    

    const handleSelectChange = (event) => {
        setSelectedMyClass(event.target.value);
        const selectedMap = MyClasses.find((map) => map.class === event.target.value);
        setStudentCount(selectedMap.students);
    };

    const handleClick = index => {
        setSuggestion1(MapSuggestions[index].suggestion1);
        setSuggestion2(MapSuggestions[index].suggestion2);
        setSuggestion3(MapSuggestions[index].suggestion3);
        setActiveButtonIndex(index);
    };
    

  return (
    <div>
        <Navbar title="Create New Map"/>
        <div className="flexbox">
            <div className="item side left">
                <Link to="/">
                    <button className="goBack">&#x2190; Go Back</button>
                </Link> 
            </div>
            <div className="item">
                <div className="flexbox">  
                    <div className="item">

                        <select className="orangeBg" value={selectedMyClass} onChange={handleSelectChange}>
                            <option value="" disabled>Select class</option>
                            {MyClasses.map(t => (
                            <option key={t.id} value={t.class}>
                                {t.class}
                            </option>
                            ))}
                        </select>

                        <div className="left heightTwoEm">
                            <p>
                                {studentCount && (
                                    <span>Students: <b>{studentCount}</b></span> 
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="item paddingOneEm">
                        <p>or</p>
                    </div>

                    <div className="item">
                        <Link to="/registernewclass">
                            <button className="orangeBg">Register a new class</button>
                        </Link>           
                    </div>
                </div>   
            </div>
            <div className="item side right"></div>
        </div>
      
        <div className={selectedMyClass ? '' : 'disabled'}>
            <h3 className="black">How should the seats be arranged?</h3>
            <p>
                <button onClick={() => handleClick(1)} class={activeButtonIndex === 1 ? 'active' : ''}>{MapSuggestions[1].type}</button>
                <button onClick={() => handleClick(2)} class={activeButtonIndex === 2 ? 'active' : ''}>{MapSuggestions[2].type}</button>
                <button onClick={() => handleClick(3)} class={activeButtonIndex === 3 ? 'active' : ''}>{MapSuggestions[3].type}</button>
                <button onClick={() => handleClick(4)} class={activeButtonIndex === 4 ? 'active' : ''}>{MapSuggestions[4].type}</button>
                <button onClick={() => handleClick(5)} class={activeButtonIndex === 5 ? 'active' : ''}>{MapSuggestions[5].type}</button>

                <select className="whiteBg" name="" id="">
                    <option value="">Custom Seating Arrangement</option>
                    <option>--Create New Custom Arrangement--</option>
                    <option value="">My Arrangement 1</option>
                </select>
            </p>
        </div>
        
        <div className={activeButtonIndex ? '' : 'disabled'}>
            <h3 className="black">Choose a seating arrangement</h3>
            <div className="flexbox">
                <div className="item suggestion">
                    <p>{suggestion1}</p>
                </div>
                <div className="item suggestion">
                    <p>{suggestion2}</p>
                </div>
                <div className="item suggestion">
                    <p>{suggestion3}</p>
                </div>
            </div>
            <Link to="/optionalconditions">
                <button className="orangeBg">Continue</button>
            </Link>   
        </div>
    </div>
  );
};

export default CreateNewMap;
