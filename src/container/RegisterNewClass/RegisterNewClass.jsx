import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';
import { createClass, getGrades } from '../../database';
import * as XLSX from 'xlsx';

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
    const fileInput = useRef(null);


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
                    Your class needs a grade.
                </>);
            setShowPopup(true);
            return;
        }
        if (!nameClass) {
            setType('warning');
            setMessage(
                <>
                    Your class needs a name, for example 8A or 8B.
                </>);
            setShowPopup(true);
            return;
        }
        if (studentList.length === 0) {
            setType('warning');
            setMessage(
                <>
                    Your class needs students. Write a name and click Enter.
                </>);
            setShowPopup(true);
            return;
        }
        if (studentList.length < 10) {
            setType('confirm-create');
            setMessage(
                <>
                    You have added quite few students.<br />
                    Are you sure you want to save the class?
                </>
                );
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

    function handleFileUpload(event) {
        fileInput.current.click();
        setShowPopup(false);  
    
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const names = rows.map(row => {
                const name = row[0];
                if (name) {
                    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
                }
                return name;
            });
            setStudentList([...studentList, ...names.filter(name => name)]);
        };
        reader.readAsArrayBuffer(file);
    }
    
    

    function showUploadButton () {
        setType('info-print');
        setMessage(
            <>
            <FontAwesomeIcon icon="fa-solid fa-check" /> Do not have anything other than the first names in the sheet<br />
            <FontAwesomeIcon icon="fa-solid fa-check" /> No headers, titles etc.
            </>
        );
        setShowPopup(true);  
    }

      

  return (
    <div className="container">
        {showPopup && (
            <PopupMessage
            message={message}
            type={type}
            onClose={handleClosePopup}
            onConfirm={handleConfirmCreate}
            onActivate={handleFileUpload}
            />
        )}
        <Navbar title="Register New Class"/>
    
        <div className="flexbox">
            <div className="item side left tips">
                <br />
                <p><FontAwesomeIcon icon="fa-regular fa-lightbulb" /> If you cannot find your grade, please contact your school Admin.</p>
                <br />
                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Only write the first name</h4>
                <p>You should only write the student's first name. If there are several with the same name, you can add a letter after their name.</p>
                <br />
                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Follow the same structure</h4>
                <p>The class name structure should be somewhat the same for all teachers. 
                    We recommend following the structure '8A', '8B', '9A', '9B' etc.
                </p>
                <br />
                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Don't worry about mistakes</h4>
                <p>If you register a wrong student name or forget someone, you can always edit the class from the home page. There is no need to start over.</p>
            </div>

            <div className="item">
                <div>
                    <div>
                        <h3>What grade is the class in?</h3>
                    </div>
                    <div>
                        <select value={selectedSchoolGrade} className="chooseGradeInput" onChange={handleGradeChange}>
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
                        <input type="text" id="classnameinput" className="inputMinWidth14em" placeholder="For Example 8A" onChange={handleClassChange}/>
                    </div>
                </div>  

                <div>
                    <div>
                        <h3>Add students</h3>
                    </div>

                    <div>
                        <button className="custom-file-upload" onClick={showUploadButton}>
                            Upload an Excel sheet <FontAwesomeIcon icon="fa-solid fa-upload" />
                        </button>
                        <input
                            id="file-upload"
                            type="file"
                            ref={fileInput}
                            onChange={handleFileUpload}
                            style={{ display: "none" }}
                        />  
                        
                    </div>
                   
                    <div className="orText">
                        <p>or</p>
                    </div>

                    <div>
                        <input type="text" id="studentnameinput" className="inputMinWidth14em" placeholder="Write a name and click Enter" onKeyDown={handleKeyDown} onChange={handleStudentChange} />
                    </div>

                </div>    
                <br />
                <div className="left">
                    <button className="orangeBg" onClick={handleSave}>Save Class <FontAwesomeIcon icon="fa-solid fa-user-check" /></button>
                </div>      
           
            </div>

            <div className="item side aThird fullHeight">
                <div className={studentList.length > 0 ? '' : 'hidden'}>
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
