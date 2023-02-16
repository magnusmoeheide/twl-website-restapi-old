import React, { useState } from 'react'

import { Navbar } from '../../components';
import { images } from '../../constants';

import { Link } from 'react-router-dom';

const Students = [ "Abdi", "Peter", "Tom", "Hans", "Jana", "Sigri", "Anna", "Jena", "Cem", "Magnus"]
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

    const handleStudentNameChange = event => {
        const newName = event.target.value;
        setStudentName(newName);
        setSitTogetherGroup([newName, ...sitTogetherGroup]);
    }
    
    const handleSitTogetherGroups = event => {
        if (sitTogetherGroup.length > 0) {
            setSitTogetherGroups({...sitTogetherGroups, [`Group ${Object.keys(sitTogetherGroups).length +1}`]: sitTogetherGroup});
            setSitTogetherGroup([])
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

        if (sitTogetherGroups[keyToUpdate].length === 0) {
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

    const [differentPartner, setDifferentPartner] = useState(false);

    const handleDifferentPartnerChange = (event) => {
        setDifferentPartner(event.target.checked);
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
                        <div className="">
                            <p>Who should sit together?</p>
                            <div className="selectAndBtn">
                                <select onChange={handleStudentNameChange}>
                                    <option disabled selected>Please select Students</option>
                                    {Students.map(element => (
                                        <option key={element}>{element}</option>
                                    ))}
                                </select>
                                <button onClick={handleSitTogetherGroups}>Save Group</button>
                            </div>   
                        </div>
                        <div>
                            <ul className="studentGroup">
                                <p><span>Group: </span>
                                    {sitTogetherGroup.map(student => (
                                        <li>{student},&nbsp;</li>
                                    ))}
                                </p>
                            </ul>
                          
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
                                                {value.map((student) => (
                                                    <li>{student},&nbsp;</li>
                                                ))}
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
                        <p>Who has to sit in the front?</p>
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
                            <p>Other conditions</p>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={differentPartner}
                                    onChange={handleDifferentPartnerChange} 
                                />
                                Different partner from last map(s)
                            </label>
                        </div>
                        <div className="last_class_maps">
                            <p className='last_class_maps_header'>Last map created for this class</p>
                            <select className='class_maps_dropdown'>
                                    <option disabled selected>Select...</option>
                                    {Object.entries(ClassMaps).map(([key, value]) => {
                                        if (key === 'Class_9A') {
                                            return value.map(element => (
                                            <option className="class_maps_dropdown_options" key={element}>{element}</option>
                                            ))
                                        }
                                    })}
                            </select>
                        </div>

                        <div className='extra_options_diff_seat'>
                            <input
                                type="checkbox"
                                checked={differentSeat}
                                onChange={handleDifferentSeatChange}
                            />
                            <label>Different seat from last map</label>
                        </div>
                        <button>Manually place a Student</button>
                    </div>
                </div>
            </div>
            <div className="flexbox">
                <div className="item aThird">
                    <div> {/* WHO SHOULD NOT SIT TOGETHER */}
                        <div>
                            <p>Who should not sit together?</p>
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
                                    {notSitTogetherGroup.map(student => (
                                        <li>{student},&nbsp;</li>
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
                    <p>Who has to sit in the back?</p>
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
                            <button className="orangeBg">Generate Seating Map</button>   
                        </Link>
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default OptionalConditions;