import React, { useState, useRef } from 'react'

import { Navbar } from '../../components';
import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

const Students = [ "Abdi", "Peter", "Tom", "Hans", "Jana", "Sigrid", "Anna", "Jena", "Cem", "Magnus"]
const ClassMaps = { 
    Class_9A: [
        "9A-Week1",
        "9A-Week2",
        "9A-Week3",
    ]
}

const OptionalConditions = () => {
    const [studentName, setStudentName] = useState("");
    const [sitTogetherGroups, setSitTogetherGroups] = useState({});
    const [sitTogetherGroup, setSitTogetherGroup] = useState([]);
    const selectRef = useRef(null);

    const handleStudentNameChange = event => {
        const newName = event.target.value;
        if (sitTogetherGroup.length >= 4) {
            alert("You can only have 4 students in one group.");
            return;
        }
        setStudentName(newName);
        setSitTogetherGroup([newName, ...sitTogetherGroup]);

        // Remove the selected student from the select options
        const selectElement = event.target;
        const options = selectElement.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === newName) {
                options[i].disabled = true;
            }
        }
    }
    
    const handleSitTogetherGroups = event => {
        if (sitTogetherGroup.length > 0) {
            if (sitTogetherGroup.length === 1) {
                alert('Warning: You are attempting to create a group with only one student.');
            } else {
                setSitTogetherGroups({...sitTogetherGroups, [`Group ${Object.keys(sitTogetherGroups).length +1}`]: sitTogetherGroup});
            }
            setSitTogetherGroup([]);

            // Reset the select element to the first option
            selectRef.current.value = selectRef.current.options[0].value;

            // Make all the options selectable again except for the first one
            const options = selectRef.current.options;
            for (let i = 0; i < options.length; i++) {
                if (i === 0) {
                    options[i].disabled = true;
                } else {
                    options[i].disabled = false;
                }
            }

        }
    };

    const handleGroupDelete = (event) => {
        const keyToDelete = event.target.dataset.key;
        delete sitTogetherGroups[keyToDelete];
        setSitTogetherGroups({...sitTogetherGroups});

    };

    const handleGroupPop = (event) => {
        const keyToUpdate = event.target.dataset.key;
        const updatedGroup = [...sitTogetherGroups[keyToUpdate]];
        updatedGroup.shift();
        sitTogetherGroups[keyToUpdate] = updatedGroup;
        setSitTogetherGroups({...sitTogetherGroups});

        if (updatedGroup.length === 0) {
            delete sitTogetherGroups[keyToUpdate];
            setSitTogetherGroups({...sitTogetherGroups});

          } else if (updatedGroup.length === 1) {
            const studentName = updatedGroup[0];
            delete sitTogetherGroups[keyToUpdate];
            setSitTogetherGroups({...sitTogetherGroups});
          }
    };


    const [notSitTogetherGroups, setNotSitTogetherGroups] = useState({});
    const [notSitTogetherGroup, setNotSitTogetherGroup] = useState([]);

    const handleStudentNameChange2 = event => {
        const newName = event.target.value;
        setStudentName(newName);
        setNotSitTogetherGroup([newName, ...notSitTogetherGroup]);
    }
    
    const handleNotSitTogetherGroups = event => {
        if (notSitTogetherGroup.length > 0) {
            setNotSitTogetherGroups({...notSitTogetherGroups, [`Group ${Object.keys(notSitTogetherGroups).length + 1}`]: notSitTogetherGroup});
            setNotSitTogetherGroup([])
        }
    };

    const handleGroupDelete2 = (event) => {
        const keyToDelete = event.target.dataset.key;
        delete notSitTogetherGroups[keyToDelete];
        setNotSitTogetherGroups({...notSitTogetherGroups});
    };

    const handleGroupPop2 = (event) => {
        const keyToUpdate = event.target.dataset.key;
        const updatedGroup = [...notSitTogetherGroups[keyToUpdate]];
        updatedGroup.shift();
        notSitTogetherGroups[keyToUpdate] = updatedGroup;
        setNotSitTogetherGroups({...notSitTogetherGroups});

        if (notSitTogetherGroups[keyToUpdate].length === 0) {
            delete notSitTogetherGroups[keyToUpdate];
            setNotSitTogetherGroups({...notSitTogetherGroups});
        }
    };

    const [sitInFront, setSitInFront] = useState([]);

    const handleFrontSitChange = (event) => {
        const newName = event.target.value;
        setSitInFront([newName, ...sitInFront]);
    }

    const handleFrontSitDelete = (event) => {
        const toDelete = event.target.dataset.key;
        const index = sitInFront.indexOf(toDelete);
        if (index > -1) {
            sitInFront.splice(index, 1);
          }
        setSitInFront([...sitInFront]);
    }

    const [sitInBack, setSitInBack] = useState([]);

    const handleBackSitChange = (event) => {
        const newName = event.target.value;
        setSitInBack([newName, ...sitInBack]);
    }

    const handleBackSitDelete = (event) => {
        const toDelete = event.target.dataset.key;
        const index = sitInBack.indexOf(toDelete);
        if (index > -1) {
            sitInBack.splice(index, 1);
          }
        setSitInBack([...sitInBack]);
    }

    const [differentPartnerLast, setDifferentPartnerLast] = useState(false);
    const [differentPartnerYear, setDifferentPartnerYear] = useState(false);

    const handleDifferentPartnerLastChange = (event) => {
        setDifferentPartnerLast(event.target.checked);
      };    
      
      const handleDifferentPartnerYearChange = (event) => {
        const isChecked = event.target.checked;
        setDifferentPartnerYear(isChecked);
        
        if (isChecked) {
            setDifferentPartnerLast(false);
            const selectElement = document.querySelector('.lastMapSelect');
            selectElement.selectedIndex = 0;
        }
      };

    const [differentSeat, setDifferentSeat] = useState(false);

    const handleDifferentSeatChange = (event) => {
        setDifferentSeat(event.target.checked);
      };

  return (
    <div>
        <Navbar title="Optional Conditions"/>
        <div>

            <div className="flexbox">
                <div className="item aThird">
                    <div> {/* WHO SHOULD SIT TOGETHER */}
                        <div>
                            <h4>Who should sit together? <FontAwesomeIcon icon="fa-solid fa-children" /></h4>
                            <div className="selectAndBtn">
                                <select className="sitTogetherSelect" onChange={handleStudentNameChange} ref={selectRef}>
                                    <option disabled selected>Please select Students</option>
                                    {Students.map(element => (
                                        <option key={element}>{element}</option>
                                    ))}
                                </select>
                                <button onClick={handleSitTogetherGroups} disabled={sitTogetherGroup.length === 0}>Save Group</button>
                            </div>   
                        </div>
                        <div>
                        {(sitTogetherGroup.length > 0 || Object.keys(sitTogetherGroups).length > 0) && (
                            <ul className="studentGroup">
                                <p><span>Group: </span>
                                {sitTogetherGroup.map((member, index) => (
                                <li>
                                    {index === 0 ? `\u00A0${member}` : index === sitTogetherGroup.length - 1 ? `\u00A0and ${member}` : `,\u00A0${member}`}
                                    {index === sitTogetherGroup.length - 2 ? ' ' : ''}
                                    {index === sitTogetherGroup.length - 1 && index !== 0 ? '' : ''}
                                </li>
                                ))}
                                </p>
                            </ul>
                          )}
                            <div>
                            
                            {Object.entries(sitTogetherGroups).map(([key, value]) => (
                            <div className="flexbox sortFromLeft">
                                <div className="item oneGroup">
                                    <div className="flexbox sortFromLeft">
                                        <div className="item icon deleteIcon">
                                            <p onClick={handleGroupDelete} data-key={key}>&#x2715;</p>
                                        </div>
                                        <div className="item groupFirstBox">
                                            <p>{key}:</p> 
                                        </div>
                                        <div className="item groupSecondBox">
                                            <ul className="studentGroup">
                                                {value.length === 2 ? (
                                                <li>{value[0]} and {value[1]}</li>
                                                ) : (
                                                <li>{value.slice(0, -1).join(", ")} and {value.slice(-1)}</li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="item icon removeIcon">
                                            <p onClick={handleGroupPop} data-key={key}>&#x2190;</p>
                                        </div>
                                    </div>
  
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <div> {/* WHO SHOULD SIT IN FRONT */}
                        <h4>Who has to sit in the front? <FontAwesomeIcon icon="fa-solid fa-person-arrow-up-from-line" /></h4>
                        <div>
                            <select onChange={handleFrontSitChange}>
                                <option disabled selected>Please select a student</option>
                                {Students.map(element => (
                                    <option key={element}>{element}</option>
                                ))}
                            </select>
                            <p></p> {/* FIX THIS ONE */}
                        </div>
                        <div>
                            {sitInFront.map(element => (
                                <div className="flexbox sortFromLeft">
                                    <div className="item oneGroup">
                                        <div className="flexbox sortFromLeft">
                                            <div className="item icon deleteIcon">
                                                <p onClick={handleFrontSitDelete} data-key={element}>&#x2715;</p>
                                            </div>
                                            <div className="item groupSecondBox">
                                                <p>{element}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <div> {/* EXTRA OPTIONS */}
                        <div>
                            <h4>Other conditions <FontAwesomeIcon icon="fa-solid fa-rotate" /></h4>
                            <label>
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    checked={differentPartnerYear}
                                    onChange={handleDifferentPartnerYearChange} 
                                />
                                Different partner from all maps created this year
                            </label>
                        </div>
                        <br />
                        <div className={`lastMap ${differentPartnerYear ? 'disabled' : ''}`}>
                            <label>
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    checked={differentPartnerLast}
                                    onChange={handleDifferentPartnerLastChange} 
                                    disabled={differentPartnerYear}
                                />
                                Different partner from last map
                            </label>
                            <select className='lastMapSelect' disabled={differentPartnerYear}>
                                    <option disabled selected>Select last map created for this class</option>
                                    {Object.entries(ClassMaps).map(([key, value]) => {
                                        if (key === 'Class_9A') {
                                            return value.map(element => (
                                            <option key={element}>{element}</option>
                                            ))
                                        }
                                    })}
                            </select>
                        </div>
                        
                        <br />

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    checked={differentSeat}
                                    onChange={handleDifferentSeatChange}
                                />
                                Different seat from last map
                            </label>
                        </div>
                        <br />
                        <button>Manually place a Student</button>
                    </div>
                </div>
            </div>
            <div className="flexbox">
                <div className="item aThird">
                    <div> {/* WHO SHOULD NOT SIT TOGETHER */}
                        <div>
                            <h4>Who should not sit together? <FontAwesomeIcon icon="fa-solid fa-people-arrows" /></h4>
                            <div className="selectAndBtn">
                                <select onChange={handleStudentNameChange2}>
                                    <option disabled selected>Please select Students</option>
                                    {Students.map(element => (
                                        <option key={element}>{element}</option>
                                    ))}
                                </select>
                                <button onClick={handleNotSitTogetherGroups}>Save Group</button>
                            </div>  
                        </div>
                        <div>
                            <ul className="studentGroup">
                                <p><span>Group: </span>
                                {notSitTogetherGroup.map((student, index) => (
                                <li>
                                    {index === 0 ? `${student} and ` : index === notSitTogetherGroup.length - 1 ? student : `${student} and `}
                                </li>
                                ))}



                                </p>
                            </ul>

                            <div>
                            {Object.entries(notSitTogetherGroups).map(([key, value]) => (
                            <div className="flexbox sortFromLeft">
                                <div className="item oneGroup">
                                    <div className="flexbox sortFromLeft">
                                        <div className="item icon deleteIcon">
                                            <p onClick={handleGroupDelete2} data-key={key}>&#x2715;</p>
                                        </div>
                                        <div className="item groupFirstBox">
                                            <p>{key}:</p> 
                                        </div>
                                        <div className="item groupSecondBox">
                                            <ul className="studentGroup">
                                                {value.map((student) => (
                                                    <li>{student},&nbsp;</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="item icon removeIcon">
                                            <p onClick={handleGroupPop2} data-key={key}>&#x2190;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <div> {/* WHO SHOULD SIT IN BACK */}
                    <h4>Who has to sit in the back? <FontAwesomeIcon icon="fa-solid fa-person-arrow-down-to-line" /></h4>
                        <div>
                            <select onChange={handleBackSitChange}>
                                <option disabled selected>Please select a student</option>
                                {Students.map(element => (
                                    <option key={element}>{element}</option>
                                ))}
                            </select>
                            <br /><br />
                        </div>
                        <div>
                            {sitInBack.map(element => (
                                <div className="flexbox sortFromLeft">
                                    <div className="item oneGroup">
                                        <div className="flexbox sortFromLeft">
                                            <div className="item icon deleteIcon">
                                                <p onClick={handleBackSitDelete} data-key={element}>&#x2715;</p>
                                            </div>
                                            <div className="item groupSecondBox">
                                                <p>{element}</p>
                                            </div>
                                        </div>      
                                    </div>                               
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item aThird bottomRight">
                    <Link to="/generatededitmap">
                        <button className="orangeBg">Generate Seating Map <FontAwesomeIcon icon="fa-solid fa-arrows-spin" /></button>   
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OptionalConditions;