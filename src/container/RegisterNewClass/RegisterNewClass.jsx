import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { createClass, getGrades } from '../../database';

const RegisterNewClass = () => {

    //----------------------------------------------

    const [schoolGrades, setSchoolGrades] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getGrades(setSchoolGrades);
    }, []);

  // -----------------------------------------------
/*
    const [savedClass, setSavedClass] = useState({
        Teacher:"",
        Grade:"",
        School: "",
        ClassName:"",
        Students:[]
    });
*/
    const [nameClass, setNameClass] = useState('');
    const [inputStudent, setInputStudent] = useState('');
    const [teacherId, setTeacherId] = useState('1');//should change according to login details
    const [gradeId, setGradeId] = useState('1');
    const [schoolId, setSchoolId] = useState('1');//should change according to login details


    const handleGradeChange = event => {
        setSelectedSchoolGrade(event.target.value);
        setGradeId(event.target.value)
    }
    const handleClassChange = event => {
        setNameClass(event.target.value);
    };
    const handleStudentChange = event => {
        setInputStudent(event.target.value);
      };

    const [studentList, setStudentList] = useState([]);
    const [selectedSchoolGrade, setSelectedSchoolGrade] = useState('');

    const handleKeyDown = event => {
        if (event.keyCode == 13) {
            if (document.getElementById("studentnameinput").value == "") {
                alert("Write a name");
            } else {
                setStudentList([inputStudent, ...studentList]);
                document.getElementById("studentnameinput").value="";
            }
            console.log(studentList)
        }
    }

    const handleSave = event => {
/*
        setSavedClass({
            Teacher: teacherId,
            Grade: gradeId,
            School: schoolId,
            ClassName: nameClass,
            Students: studentList
        })
*/
        createClass( nameClass, gradeId, teacherId, schoolId, studentList);
    }

  return (
    <div>
        <Navbar title="Register New Class"/>
    
        <div className="flexbox">
            <div className="item side left">
                <p><FontAwesomeIcon icon="fa-regular fa-lightbulb" /> If you cannot find your grade, please contact your school Admin.</p>
            </div>
            <div className="item">
                <div>
                    <br />
                    <p>What grade is the class in?
                        <select value={selectedSchoolGrade} onChange={handleGradeChange}>
                            <option value="" disabled>Choose Grade</option>
                            {schoolGrades.map((grade) => (
                            <option key={grade.id} value={grade.id}>
                                {grade.name}
                            </option>
                            ))}
                        </select>
                    </p>
                </div>

                <div>
                    <p>Class Name
                        <input type="text" placeholder="For Example 8A" onChange={handleClassChange}/>
                    </p>
                </div>

                <div>
                    <p>Enter Student Names
                    <input type="text" id="studentnameinput" className="inputWriteStudentName" placeholder="Write one name and click Enter" onKeyDown={handleKeyDown} onChange={handleStudentChange} />
                    </p>
                </div>

                <div className="center">
                    <button className="orangeBg" onClick={handleSave}>Save Class <FontAwesomeIcon icon="fa-solid fa-user-check" /></button>
                </div>
            </div>

            <div className="item side">
                <div className={inputStudent ? '' : 'hidden'}>
                    <p>Students: <b>{studentList.length}</b></p>
                </div>
                
                <div style={{maxHeight: "600px", overflowY: "scroll"}}>
                    {studentList.map(element => (
                        <p key={element}><FontAwesomeIcon icon="fa-solid fa-child" /> {element}</p>
                    ))}
                </div>
            </div>
        </div>



    </div>
  );
};

export default RegisterNewClass;
