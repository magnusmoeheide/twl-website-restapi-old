import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';
import { createClass, getGrades } from '../../database';

const RegisterNewClass = () => {

    /* -----  POPUP MESSAGE  ----- */
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState(null);
    /* -----  popup message end ----- */

    //----------------------------------------------

    const [schoolGrades, setSchoolGrades] = useState([]);

    const [grades, setGrades] = useState([
        { id: 1, name: 'Grade 8'},
        { id: 2, name: 'Grade 9'},
        { id: 3, name: 'Grade 10'}
      ]);


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
        if (event.keyCode === 13) {
          const name = document.getElementById("studentnameinput").value.trim();
          if (name === "") {
            setType('warning');
            setMessage("Write a name and click Enter.");
            setShowPopup(true);
            return;
          } else {
            const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            if (studentList.includes(capitalizedName)) {
              setType('warning');
              setMessage(`${capitalizedName} has already been added.`);
              setShowPopup(true);
              document.getElementById("studentnameinput").value="";
              return;
            } else {
              setStudentList([capitalizedName, ...studentList]);
              document.getElementById("studentnameinput").value="";
            }
          }
        }
      }
      
      

    const handleSave = event => {
        if (!selectedSchoolGrade) {
            setType('warning');
            setMessage(
                <>
                    Please choose a grade.<br /><br />
                    If you cannot find your grade, please contact your school admin.
                </>);
            setShowPopup(true);
            return;
        }
        if (!nameClass) {
            setType('warning');
            setMessage("You have not entered a class name. It should be for example 8A, 8B, 8C etc." );
            setShowPopup(true);
            return;
        }
        if (studentList.length === 0) {
            setType('warning');
            setMessage("You have not entered any students. Write the name and click Enter to save the student." );
            setShowPopup(true);
            return;
        }
        if (studentList.length < 10) {
            setType('confirm-create');
            setMessage("You have added quite few students. Are you sure you want to save the class?" );
            setShowPopup(true);
            return;
        }
/*
        setSavedClass({
            Teacher: teacherId,
            Grade: gradeId,
            School: schoolId,
            ClassName: nameClass,
            Students: studentList
        })     
*/      
        handleConfirmCreate ();   
    }

    const handleConfirmCreate = () => {
        const classnameinput = document.getElementById("classnameinput").value.trim();
        createClass( nameClass, gradeId, teacherId, schoolId, studentList);
        setShowPopup(false);

        setType('success');
        setMessage(`Class ${classnameinput} with ${studentList.length} students has been registered!`);
        setShowPopup(true);
    };

    const handleReturnHome = () => {
        setShowPopup(false);
    }


  return (
    <div className="container">
        {showPopup && (
            <PopupMessage
            message={message}
            type={type}
            onClose={handleClosePopup}
            onConfirm={handleConfirmCreate}
            />
        )}
        <Navbar title="Register New Class"/>
    
        <div className="flexbox">
            <div className="item side left tips">
                <br />
                <p><FontAwesomeIcon icon="fa-regular fa-lightbulb" /> If you cannot find your grade, please contact your school Admin.</p>

                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Only write the first name</h4>
                <p>You should only write the student's first name. If there are several with the same name, you can add a letter after their name.</p>
                
                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Follow the same structure</h4>
                <p>The class name structure should be somewhat the same for all teachers. 
                    We recommend following the structure '8A', '8B', '9A', '9B' etc.
                </p>

                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Don't worry about mistakes</h4>
                <p>If you register a wrong student name or forget someone, you can always edit the class from the home page. There is no need to start over.</p>
            </div>

            <div className="item">
                <div>
                    <div>
                        <h3>What grade is the class in?</h3>
                    </div>
                    <div>
                        <select value={selectedSchoolGrade} className="inputMinWidth16em" onChange={handleGradeChange}>
                            <option value="" disabled>Choose Grade</option>
                            {grades.map((grade) => (
                            <option key={grade.id} value={grade.id}>
                                {grade.name}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Class name</h3>
                    </div>
                    <div>
                        <input type="text" id="classnameinput" className="inputMinWidth16em" placeholder="For Example 8A" onChange={handleClassChange}/>
                    </div>
                </div>  

                <div>
                    <div>
                        <h3>Enter student names</h3>
                    </div>
                    <div>
                        <input type="text" id="studentnameinput" className="inputMinWidth16em" placeholder="Write a name and click Enter" onKeyDown={handleKeyDown} onChange={handleStudentChange} />
                    </div>
                </div>    
                <br />
                <div className="left">
                    <button className="orangeBg" onClick={handleSave}>Save Class <FontAwesomeIcon icon="fa-solid fa-user-check" /></button>
                </div>      
           
            </div>

            <div className="item side aThird fullHeight">
                <div className={inputStudent ? '' : 'hidden'}>
                    <p>Students: <b>{studentList.length}</b></p>
                </div>
                
                <div style={{maxHeight: "75vh", overflowY: "scroll"}}>
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
