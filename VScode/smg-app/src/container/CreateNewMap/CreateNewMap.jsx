import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTeacherClasses, getClassStudents } from '../../database';


// const MyClasses = [
//     {id: 1, class: '10C', teacher: 'Magnus', students: 17, created: '01-01-2023'},
//     {id: 2, class: '10D', teacher: 'Magnus', students: 20, created: '01-01-2023'},
//     {id: 3, class: '10E', teacher: 'Magnus', students: 22, created: '01-01-2023'},
//     {id: 4, class: '9th Grade French', teacher: 'Magnus', students: 21, created: '01-01-2023'},
//     {id: 5, class: '10th Grade French', teacher: 'Magnus', students: 25, created: '01-01-2023'},
// ]

const MapSuggestions = [
        {type: "Preview", suggestion1: "", suggestion2: "", suggestion3: ""},
        {type: "1 and 1", suggestion1: "Pizza", suggestion2: "Kebab", suggestion3: "Burger"},
        {type: "2 and 2", suggestion1: "Chicken", suggestion2: "Cow", suggestion3: "Donkey"},
        {type: "3 and 3", suggestion1: "Monday", suggestion2: "Tuesday", suggestion3: "Wednesday"},
        {type: "4 and 4", suggestion1: "Plate", suggestion2: "Glass", suggestion3: "Fork"},
        {type: "U-shape", suggestion1: "Plant", suggestion2: "Tree", suggestion3: "Bush"}
  ];


const CreateNewMap = () => {
    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [studentCount, setStudentCount] = useState(null);
    const [activeArrangementIndex, setActiveArrangementIndex] = useState(null);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [suggestion1, setSuggestion1] = useState(MapSuggestions[0].suggestion1);
    const [suggestion2, setSuggestion2] = useState(MapSuggestions[0].suggestion2);
    const [suggestion3, setSuggestion3] = useState(MapSuggestions[0].suggestion3);
    
    //------------------- for db query ---------------------------//

    const[teacherId, setTeacherId] = useState('1');

    const [teacherClasses, setTeacherClasses] = useState([]);
    const [classStudents, setClassStudents] = useState([]);

    useEffect(() => {
        getTeacherClasses(teacherId, setTeacherClasses);
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            let students = await getClassStudents(selectedMyClass, setClassStudents);
            if (students.length != 0) {
                setStudentCount(students.length);
            } else {
                setStudentCount('0');
            }
        };
        if (selectedMyClass) {
          fetchData();
        }
    }, [selectedMyClass]);
      

    //------------------------------------------------------------//
    

    const handleSelectChange = async (event) => {
        setSelectedMyClass(event.target.value);
        // const selectedMap = MyClasses.find((map) => map.class === event.target.value);
    };

    const handleClick = index => {
        setSuggestion1(MapSuggestions[index].suggestion1);
        setSuggestion2(MapSuggestions[index].suggestion2);
        setSuggestion3(MapSuggestions[index].suggestion3);
        setActiveArrangementIndex(index);
    };

    const handleArrangementChoice = index => {
        setActiveButtonIndex(index);
    }

    // Get all the suggestion divs
    const suggestionDivs = document.querySelectorAll('.suggestion');

    // Loop through each suggestion div and add a click event listener
    suggestionDivs.forEach(suggestionDiv => {
    suggestionDiv.addEventListener('click', () => {
        // Deselect all suggestion divs
        suggestionDivs.forEach(div => {
        div.classList.remove('selected');
        });
        
        // Select the clicked suggestion div and apply a new CSS styling
        suggestionDiv.classList.add('selected');
    });
    });
 

  return (
    <div className="container">
        <Navbar title="Create New Map" previous="/"/>
        <div className="flexbox noGrow">
            <div className="item">
                <div className="flexbox smallMarginTop">  
                    <div className="item">

                        <select className="orangeBg" value={selectedMyClass} onChange={handleSelectChange}>
                            <option value="" disabled>Select class</option>
                            {teacherClasses.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.name}
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
        </div>
        <div className="flexbox center noGrow">
            <div className={selectedMyClass ? '' : 'disabled'}>
                <h3 className="smallMarginTop black center">How should the seats be arranged?</h3>
                <p>
                    <button onClick={() => handleClick(1)} class={activeArrangementIndex === 1 ? 'active' : ''}>{MapSuggestions[1].type} <FontAwesomeIcon icon="fa-solid fa-child" /></button>
                    <button onClick={() => handleClick(2)} class={activeArrangementIndex === 2 ? 'active' : ''}>{MapSuggestions[2].type} <FontAwesomeIcon icon="fa-solid fa-children" /></button>
                    <button onClick={() => handleClick(3)} class={activeArrangementIndex === 3 ? 'active' : ''}>{MapSuggestions[3].type} <FontAwesomeIcon icon="fa-solid fa-users" /></button>
                    <button onClick={() => handleClick(4)} class={activeArrangementIndex === 4 ? 'active' : ''}>{MapSuggestions[4].type} <FontAwesomeIcon icon="fa-solid fa-user-group" className="fa-xs"/><FontAwesomeIcon icon="fa-solid fa-user-group" className="fa-xs negMarginLeft"/></button>
                    <button onClick={() => handleClick(5)} class={activeArrangementIndex === 5 ? 'active' : ''}>{MapSuggestions[5].type}</button>

                    <select className="whiteBg" name="" id="">
                        <option value="">Custom Seating Arrangement</option>
                        <option>--Create New Custom Arrangement--</option>
                        <option value="">My Arrangement 1</option>
                    </select>
                </p>
            </div>
        </div>
        <span className={activeArrangementIndex ? '' : 'disabled'}>
            <div className="flexbox noGrow">
                <h3 className="black center">Choose a seating arrangement</h3>        
            </div>

            <div className="flexbox" onClick={handleArrangementChoice}>
                <div className="item aThird autoHeight center suggestion">
                    <p>{suggestion1}</p>
                </div>
                <div className="item aThird autoHeight center suggestion">
                    <p>{suggestion2}</p>
                </div>
                <div className="item aThird autoHeight center suggestion">
                    <p>{suggestion3}</p>
                </div>
            </div>
        </span>
        <div className={activeButtonIndex ? '' : 'disabled'}>
            <div className="flexbox noGrow smallMarginBottom">
                <div className="center">
                    <Link to="/optionalconditions">
                        <button className="orangeBg smallMarginTop">Continue <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
                    </Link> 
                </div>
            </div>
        </div>
    </div>
  );
};

export default CreateNewMap;
