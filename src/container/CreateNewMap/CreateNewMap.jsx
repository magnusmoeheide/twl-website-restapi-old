import React, { useState } from 'react';


const MyClasses = [
    {id: 1, class: '10C', teacher: 'Magnus', students: 17, created: '01-01-2023'},
    {id: 2, class: '10D', teacher: 'Magnus', students: 20, created: '01-01-2023'},
    {id: 3, class: '10E', teacher: 'Magnus', students: 22, created: '01-01-2023'},
    {id: 4, class: '9th Grade French', teacher: 'Magnus', students: 21, created: '01-01-2023'},
    {id: 5, class: '10th Grade French', teacher: 'Magnus', students: 25, created: '01-01-2023'},
]

const MapSuggestions = [
        {type: "1 and 1", suggestion1: "Pizza", suggestion2: "Kebab", suggestion3: "Burger"},
        {type: "2 and 2", suggestion1: "Chicken", suggestion2: "Cow", suggestion3: "Dokney"},
        {type: "3 and 3", suggestion1: "Monday", suggestion2: "Tuesday", suggestion3: "Wednesday"},
        {type: "4 and 4", suggestion1: "Plate", suggestion2: "Glass", suggestion3: "Fork"},
        {type: "U-shape", suggestion1: "Plant", suggestion2: "Tree", suggestion3: "Bush"}
  ];


const CreateNewMap = () => {
    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [studentCount, setStudentCount] = useState(null);

    const handleSelectChange = (event) => {
        setSelectedMyClass(event.target.value);
        const selectedMap = MyClasses.find((map) => map.class === event.target.value);
        setStudentCount(selectedMap.students);
    };

    const [suggestion1, setSuggestion1] = useState(MapSuggestions[0].suggestion1);
    const [suggestion2, setSuggestion2] = useState(MapSuggestions[0].suggestion2);
    const [suggestion3, setSuggestion3] = useState(MapSuggestions[0].suggestion3);
    

    const handleClick = index => {
        setSuggestion1(MapSuggestions[index].suggestion1);
        setSuggestion2(MapSuggestions[index].suggestion2);
        setSuggestion3(MapSuggestions[index].suggestion3);
    };
    

  return (
    <div>
        <h1>Create New Map</h1>
        <p>
            <span>
            {studentCount && (
                <span>Students: <b>{studentCount} </b></span> 
            )}
            </span>

  
                <select value={selectedMyClass} onChange={handleSelectChange}>
                    <option value="" disabled>Select class</option>
                    {MyClasses.map(t => (
                    <option key={t.id} value={t.class}>
                        {t.class}
                    </option>
                    ))}
                </select>
                or 
                <button>Register a new class</button>
    

        </p>

        <br /><br />
        <h4>How should the seats be arranged?</h4>
        <p>
            <button onClick={() => handleClick(0)}>{MapSuggestions[0].type}</button>
            <button onClick={() => handleClick(1)}>{MapSuggestions[1].type}</button>
            <button onClick={() => handleClick(2)}>{MapSuggestions[2].type}</button>
            <button onClick={() => handleClick(3)}>{MapSuggestions[3].type}</button>
            <button onClick={() => handleClick(4)}>{MapSuggestions[4].type}</button>
            <select name="" id="">
                <option value="">Custom Seating Arrangement</option>
                <option>--Create New Custom Arrangement--</option>
                <option value="">My Arrangement 1</option>
                
            </select>
        </p>
        <br />
        <h4>Choose a seating arrangement</h4>
        <div className="flexbox">
            <div className="item">
                <p>{suggestion1}</p>
            </div>
            <div className="item">
                <p>{suggestion2}</p>
            </div>
            <div className="item">
                <p>{suggestion3}</p>
            </div>
        </div>
        <button>Continue</button>
    </div>
  );
};

export default CreateNewMap;
