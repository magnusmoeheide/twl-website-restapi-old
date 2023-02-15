import React, { useState } from 'react'

import { Navbar } from '../../components';
import { images } from '../../constants';

import { Link } from 'react-router-dom';

const Students = [ "abdi", "peter", "tom", "hans", "jana", "sigri", "anna", "jena", "cem", "magnus"]
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
            setSitTogetherGroups({...sitTogetherGroups, [`Group${Object.keys(sitTogetherGroups).length + 1}`]: sitTogetherGroup});
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
            setNotSitTogetherGroups({...notSitTogetherGroups, [`Group${Object.keys(notSitTogetherGroups).length + 1}`]: notSitTogetherGroup});
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
                    <div className="student_sit_together">
                        <div>
                            <p >Who should sit together?</p>
                            <select onChange={handleStudentNameChange}>
                            <option disabled selected>Please select Student</option>
                                {Students.map(element => (
                                    <option key={element}>{element}</option>
                                ))}
                            </select>
                            <button onClick={handleSitTogetherGroups}>Save Group</button>
                        </div>
                        <div>
                            <p>Group:</p>
                            <div>
                                {sitTogetherGroup.map(student => (
                                    <p>{student},&nbsp;</p>
                                ))}
                            </div>
                            <div>
                            {Object.entries(sitTogetherGroups).map(([key, value]) => (
                                <div style={{paddingBottom: "5px"}}>
                                    <div>
                                        <img src={images.XIcon} style={{width: "20px"}} onClick={handleGroupDelete} data-key={key}></img>
                                    </div>
                                    <div>
                                        <div>
                                            <p>{key}:</p> 
                                            <div className="group_names">
                                                {value.map((student) => (
                                                    <p>{student},&nbsp;</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <img src={images.BackIconGray} style={{width: "25px"}} onClick={handleGroupPop} data-key={key}></img>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <div className='sit_in_front'>
                        <p className='sit_in_front_header'>Who has to sit in the front?</p>
                        <div className='sit_in_front_dropdown_div'>
                            <select className='sit_in_front_dropdown' onChange={handleFrontSitChange}>
                                <option disabled selected>Please select a student</option>
                                {Students.map(element => (
                                    <option className="sit_in_front_dropdown_options" key={element}>{element}</option>
                                ))}
                            </select>
                        </div>
                        <div className='sit_in_front_list'>
                            {sitInFront.map(element => (
                                <div className='sit_in_front_list_sections'>
                                    <div className='sit_in_front_list_names'>
                                        <p>{element}</p>
                                    </div>
                                    <div className='sit_in_fron_list_delete'>
                                        <img src={images.XIcon} style={{width: "20px"}} onClick={handleFrontSitDelete} data-key={element}></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <div className='extra_options'>
                    <div className='extra_options_diff_partner'>
                        <input
                            type="checkbox"
                            checked={differentPartner}
                            onChange={handleDifferentPartnerChange}
                            
                        />
                        <label>Different partner from last map(s)</label>
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
                    <div className='extra_options_place_manual'>
                        <button className='extra_options_place_manual_button'>Manually place a Student</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flexbox">
                <div className="item aThird">
                    <div className="student_not_sit_together">
                    <div>
                            <p>Who should not sit together?</p>
                            <select onChange={handleStudentNameChange2}>
                            <option disabled selected>Please select Student</option>
                                {Students.map(element => (
                                    <option key={element}>{element}</option>
                                ))}
                            </select>
                            <button onClick={handleNotSitTogetherGroups}>Save Group</button>
                        </div>
                        <div>
                            <p>Group:</p>
                            <div>
                                {notSitTogetherGroup.map(student => (
                                    <p>{student},&nbsp;</p>
                                ))}
                            </div>
                            <div>
                            {Object.entries(notSitTogetherGroups).map(([key, value]) => (
                                <div style={{paddingBottom: "5px"}}>
                                    <div>
                                        <img src={images.XIcon} style={{width: "20px"}} onClick={handleGroupDelete2} data-key={key}></img>
                                    </div>
                                    <div>
                                        <div>
                                            <p>{key}:</p>
                                            <div className="group_names">
                                                {value.map((student) => (
                                                    <p>{student},&nbsp;</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <img src={images.BackIconGray} style={{width: "25px"}} onClick={handleGroupPop2} data-key={key}></img>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <div className='sit_in_back'>
                    <p>Who has to sit in the back?</p>
                        <div>
                            <select onChange={handleBackSitChange}>
                                <option disabled selected>Please select a student</option>
                                {Students.map(element => (
                                    <option key={element}>{element}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            {sitInBack.map(element => (
                                <div>
                                    <div>
                                        <p>{element}</p>
                                    </div>
                                    <div>
                                        <img src={images.XIcon} style={{width: "20px"}} onClick={handleBackSitDelete} data-key={element}></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item aThird">
                    <Link to="/generatededitmap">
                        <button className='generate_map_button'>Generate Seatin Map</button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OptionalConditions;