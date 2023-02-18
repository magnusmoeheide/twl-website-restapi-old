import React, { useState } from 'react';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegisterNewClass = () => {

    const SchoolGrades = [
        {id: 1, grade: "Grade 1"},
        {id: 2, grade: "Grade 2"},
        {id: 3, grade: "Grade 3"},
        {id: 4, grade: "Grade 4"},
    ]

    const [savedClass, setSavedClass] = useState({
        Teacher:"",
        Grade:"",
        ClassName:"",
        Students:[]
    });

    const [grade, setGrade] = useState('');
    const [nameClass, setNameClass] = useState('');
    const [inputStudent, setInputStudent] = useState('');

    const handleGradeChange = event => {
        setSelectedSchoolGrade(event.target.value);
        setGrade(event.target.value)
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
                console.log(studentList);
                document.getElementById("studentnameinput").value="";
            }
            
        }
    }

    const handleSave = event => {
        setSavedClass({
            Teacher: "Cem",
            Grade: grade,
            ClassName: nameClass,
            Students: studentList
        })
        console.log(savedClass);
    }


  return (
    <div className="container">
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
                            {SchoolGrades.map(g => (
                            <option key={g.id} value={g.grade}>
                                {g.grade}
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
                    <input type="text"id="studentnameinput" className="inputWriteStudentName" placeholder="Write one name and click Enter" onKeyDown={handleKeyDown} onChange={handleStudentChange} />
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
