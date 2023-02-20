import React, { useState, useRef } from 'react'
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { PopupMessage } from '../../components';
import classNames from 'classnames';

const Students = [ "Abdi", "Peter", "Tom", "Hans", "Jana", "Sigrid", "Anna", "Jena", "Cem", "Magnus"]
const ClassMaps = { 
    Class_9A: [
        "9A-Week1",
        "9A-Week2",
        "9A-Week3",
    ]
}

const OptionalConditions = () => {

    /* -----  POPUP MESSAGE  ----- */
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState(null);
    /* -----  popup message end ----- */


    const [studentName, setStudentName] = useState("");
    const [sitTogetherGroups, setSitTogetherGroups] = useState({});
    const [sitTogetherGroup, setSitTogetherGroup] = useState([]);
    const selectRef = useRef(null);
    const selectRef2 = useRef(null);
    

    const handleStudentNameChange = event => {
        const newName = event.target.value;
        if (sitTogetherGroup.length >= 4) {
            setType('warning');
            setMessage("You can only have 4 students in one group.");
            setShowPopup(true);
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
                setType('warning');
                setMessage("You are attempting to create a group with only one student.");
                setShowPopup(true);
            } else {
              const existingGroup = Object.keys(sitTogetherGroups).find(
                groupKey => JSON.stringify(sitTogetherGroups[groupKey].sort()) === JSON.stringify(sitTogetherGroup.sort())
              );
              const existingNotSitTogetherGroup = Object.keys(notSitTogetherGroups).find(
                groupKey => JSON.stringify(notSitTogetherGroups[groupKey].sort()) === JSON.stringify(sitTogetherGroup.sort())
              );
              if (existingGroup || existingNotSitTogetherGroup) {
                setType('warning');
                setMessage("This group is already in one of the lists.");
                setShowPopup(true);
              } else {
                const newGroup = [`Group ${Object.keys(sitTogetherGroups).length + 1}`];
                setSitTogetherGroups({...sitTogetherGroups, [newGroup]: sitTogetherGroup});
              }
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
        const newGroups = {};
        let i = 1;
        for (const [key, value] of Object.entries(sitTogetherGroups)) {
            newGroups[`Group ${i}`] = value;
            i++;
        }
        setSitTogetherGroups(newGroups);

    };

    const handleGroupDelete2 = (event) => {
        const keyToDelete = event.target.dataset.key;
        delete notSitTogetherGroups[keyToDelete];

        const newGroups2 = {};
        let i = 1;
        for (const [key, value] of Object.entries(notSitTogetherGroups)) {
            newGroups2[`Group ${i}`] = value;
            i++;
        }
        setNotSitTogetherGroups(newGroups2);
    };

    const handleGroupPop = (event) => {
        const keyToUpdate = event.target.dataset.key;
        const updatedGroup = [...sitTogetherGroups[keyToUpdate]];
        updatedGroup.shift();
        sitTogetherGroups[keyToUpdate] = updatedGroup;
        
        if (updatedGroup.length === 0) {
          delete sitTogetherGroups[keyToUpdate];
        } else if (updatedGroup.length === 1) {
          delete sitTogetherGroups[keyToUpdate];
        }
        
        // Update group names
        const newGroups = {};
        let i = 1;
        for (const [key, value] of Object.entries(sitTogetherGroups)) {
          newGroups[`Group ${i}`] = value;
          i++;
        }
        setSitTogetherGroups(newGroups);
      };

    const handleGroupPop2 = (event) => {
        const keyToUpdate = event.target.dataset.key;
        const updatedGroup = [...notSitTogetherGroups[keyToUpdate]];
        updatedGroup.shift();
        notSitTogetherGroups[keyToUpdate] = updatedGroup;

        if (updatedGroup.length === 0) {
            delete notSitTogetherGroups[keyToUpdate];
          } else if (updatedGroup.length === 1) {
            delete notSitTogetherGroups[keyToUpdate];
          }
          
          // Update group names
          const newGroups2 = {};
          let i = 1;
          for (const [key, value] of Object.entries(notSitTogetherGroups)) {
            newGroups2[`Group ${i}`] = value;
            i++;
          }
          setNotSitTogetherGroups(newGroups2);
    };
      

    const [notSitTogetherGroups, setNotSitTogetherGroups] = useState({});
    const [notSitTogetherGroup, setNotSitTogetherGroup] = useState([]);

    const handleStudentNameChange2 = event => {
        const newName = event.target.value;

        if (notSitTogetherGroup.length >= 4) {
            setType('warning');
            setMessage("You can only have 4 students in one group.");
            setShowPopup(true);
            return;
        }
        
        setStudentName(newName);
        setNotSitTogetherGroup([newName, ...notSitTogetherGroup]);

        // Disable the selected option
        const selectElement = event.target;
        const options = selectElement.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === newName) {
            options[i].disabled = true;
            }
        }
    }
    
    const handleNotSitTogetherGroups = event => {
        if (notSitTogetherGroup.length > 0) {
            if (notSitTogetherGroup.length === 1) {
                setType('warning');
                setMessage("You are attempting to create a group with only one student.");
                setShowPopup(true);
            } else {
              const existingGroup = Object.keys(notSitTogetherGroups).find(
                groupKey => JSON.stringify(notSitTogetherGroups[groupKey].sort()) === JSON.stringify(notSitTogetherGroup.sort())
              );
              const existingSitTogetherGroup = Object.keys(sitTogetherGroups).find(
                groupKey => JSON.stringify(sitTogetherGroups[groupKey].sort()) === JSON.stringify(notSitTogetherGroup.sort())
              );
              if (existingGroup || existingSitTogetherGroup) {
                setType('warning');
                setMessage("This group is already in one of the lists.");
                setShowPopup(true);
              } else {
                const newGroup = [`Group ${Object.keys(notSitTogetherGroups).length + 1}`];
                setNotSitTogetherGroups({...notSitTogetherGroups, [newGroup]: notSitTogetherGroup});
              }
            }
            setNotSitTogetherGroup([]);
        
            // Reset the select element to the first option
            selectRef2.current.value = selectRef2.current.options[0].value;
        
            // Make all the options selectable again except for the first one
            const options = selectRef2.current.options;
            for (let i = 0; i < options.length; i++) {
              if (i === 0) {
                options[i].disabled = true;
              } else {
                options[i].disabled = false;
              }
            }
        }
    };

    const [sitInFront, setSitInFront] = useState([]);
    const [sitInBack, setSitInBack] = useState([]);
    const frontSelectRef = useRef(null);
    const backSelectRef = useRef(null);

    const handleStudentRemove = (studentName) => {
        setSitInFront(sitInFront.filter(name => name !== studentName));
        setSitInBack(sitInBack.filter(name => name !== studentName));
      }

    const handleFrontSitChange = (event) => {
        const newName = event.target.value;
        setSitInFront([newName, ...sitInFront]);
        setSitInBack(sitInBack.filter(name => name !== newName));
        frontSelectRef.current.value = '';
    }

    const handleBackSitChange = (event) => {
        const newName = event.target.value;
        setSitInBack([newName, ...sitInBack]);
        setSitInFront(sitInFront.filter(name => name !== newName));
        backSelectRef.current.value = '';
    }

    const frontOptions = Students.map(element => (
        <option key={element} disabled={sitInBack.includes(element) || sitInFront.includes(element)} onClick={() => handleStudentRemove(element)}>
            {element}
        </option>
    ));
    
    const backOptions = Students.map(element => (
        <option key={element} disabled={sitInFront.includes(element) || sitInBack.includes(element)} onClick={() => handleStudentRemove(element)}>
            {element}
        </option>
    ));


    const handleFrontSitDelete = (event) => {
        const toDelete = event.target.dataset.key;
        const index = sitInFront.indexOf(toDelete);
        if (index > -1) {
            sitInFront.splice(index, 1);
          }
        setSitInFront([...sitInFront]);
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
    <div className="container">
        {showPopup && (
            <PopupMessage
            message={message}
            type={type}
            onClose={handleClosePopup}
            />
        )}
        <Navbar title="Optional Conditions"/>
        <div>
            <div className="flexbox">
                <div className="item aThird">
                    <div> {/* WHO SHOULD SIT TOGETHER */}
                        <div>
                            <h4>Who should sit together?<FontAwesomeIcon icon="fa-solid fa-children" /></h4>
                            <div className="selectAndBtn">
                                <select className="sitTogetherSelect" onChange={handleStudentNameChange} ref={selectRef}>
                                    <option disabled selected>Please select students</option>
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
                                <p><span>Sitting together: </span>
    
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
                            <div className="groupList">
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
                                            {sitTogetherGroups[key].length >= 3 &&
                                            <div className="item icon removeIcon">
                                                <p onClick={handleGroupPop} data-key={key}>&#x2190;</p>
                                            </div>
                                            }
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
                            <select ref={frontSelectRef} onChange={handleFrontSitChange}>
                                <option key="default" value="" disabled selected>Please select a student</option>
                                {frontOptions}
                            </select>
                            <p></p> {/* FIX THIS ONE */}
                        </div>

                        {(sitInFront.length > 0 || Object.keys(sitInFront).length > 0) && (
                        <ul className="studentGroup">
                            <p><span>Sitting in front: </span></p>
                        </ul>
                        )}
        
                        <div className="groupList">
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
 
                        <h4>Other conditions <FontAwesomeIcon icon="fa-solid fa-rotate" /></h4> 

                        <div>
                            <table className="conditionsTable">
                                <tbody>
                                    <tr>
                                    <td>Different seat from last map</td>
                                    <td>
                                        <label class="switch">
                                        <input
                                            type="checkbox"
                                            id="different-seat-checkbox"
                                            checked={differentSeat}
                                            onChange={handleDifferentSeatChange}
                                        />
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>Different partner from all maps this year</td>
                                    <td>
                                        <label class="switch">
                                        <input
                                            type="checkbox"
                                            id="different-partner-year-checkbox"
                                            checked={differentPartnerYear}
                                            onChange={handleDifferentPartnerYearChange} 
                                        />
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    </tr>
                                    <tr 
                                        className={classNames({
                                        'disabled': differentPartnerYear,
                                        })}>
                                    <td>Different partner from last map</td>
                                    <td>
                                        <label class="switch">
                                        <input
                                            type="checkbox"
                                            id="different-partner-last-checkbox"
                                            checked={differentPartnerLast}
                                            onChange={handleDifferentPartnerLastChange} 
                                            disabled={differentPartnerYear}
                                        />
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={`lastMap ${differentPartnerLast ? 'show' : ''}`}>
                            <select className="lastMapSelect" disabled={differentPartnerYear}>
                                <option disabled selected>Select last map created for this class</option>
                                {Object.entries(ClassMaps).map(([key, value]) => {
                                if (key === 'Class_9A') {
                                    return value.map((element) => (
                                    <option key={element}>{element}</option>
                                    ));
                                }
                                })}
                            </select>
                        </div>
                        <br />
                        <button className="noMarginLeft">Manually place a student <FontAwesomeIcon icon="fa-solid fa-user-tag" /></button>
                    </div>
                </div>
            </div>
            <div className="flexbox">
                <div className="item aThird">
                    <div> {/* WHO SHOULD NOT SIT TOGETHER */}
                        <div>
                            <h4>Who should not sit together? <FontAwesomeIcon icon="fa-solid fa-people-arrows" /></h4>
                            <div className="selectAndBtn">
                                <select className="notSitTogetherSelect" onChange={handleStudentNameChange2} ref={selectRef2}>
                                    <option disabled selected>Please select students</option>
                                    {Students.map(element => (
                                        <option key={element}>{element}</option>
                                    ))}
                                </select>
                                <button onClick={handleNotSitTogetherGroups} disabled={notSitTogetherGroup.length === 0}>Save Group</button>
                            </div>  
                        </div>
                        <div>
                            {(notSitTogetherGroup.length > 0 || Object.keys(notSitTogetherGroups).length > 0) && (
                                <ul className="studentGroup">
                                    <p><span>Not sitting together: </span>
                                    {notSitTogetherGroup.map((member2, index) => (
                                    <li>
                                        {index === 0 ? `\u00A0${member2}` : index === notSitTogetherGroup.length - 1 ? `\u00A0and ${member2}` : `,\u00A0${member2}`}
                                        {index === notSitTogetherGroup.length - 2 ? ' ' : ''}
                                        {index === notSitTogetherGroup.length - 1 && index !== 0 ? '' : ''}
                                    </li>
                                    ))}
                                    </p>
                                </ul>
                            )}

                            <div className="groupList">
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
                                                {value.length === 2 ? (
                                                    <li>{value[0]} and {value[1]}</li>
                                                    ) : (
                                                    <li>{value.slice(0, -1).join(", ")} and {value.slice(-1)}</li>
                                                )}
                                            </ul>
                                        </div>
                                        {notSitTogetherGroups[key].length >= 3 &&
                                        <div className="item icon removeIcon">
                                            <p onClick={handleGroupPop2} data-key={key}>&#x2190;</p>
                                        </div>
                                        }
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
                            <select ref={backSelectRef} onChange={handleBackSitChange}>
                                <option key="default" value="" disabled selected>Please select a student</option>
                                {backOptions}
                            </select>
                        </div>

                        {(sitInBack.length > 0 || Object.keys(sitInBack).length > 0) && (
                        <ul className="studentGroup">
                            <p><span>Sitting in back: </span></p>
                        </ul>
                        )}

                        <div className="groupList">
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