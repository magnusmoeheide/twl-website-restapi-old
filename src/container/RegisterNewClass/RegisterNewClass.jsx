import React, { useState } from 'react';


import { Navbar } from '../../components';

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
    <div>
        <Navbar title="Register New Class"/>
    
        <div className="app_registernewclass">
            <div className='app_registenewclass_divs' id="div1"></div>
            <div className='app_registenewclass_divs' id="div2">
                <div className="grade_option">
                    <br />
                    <p>
                        <select value={selectedSchoolGrade} onChange={handleGradeChange}>
                            <option value="" disabled>Choose Grade</option>
                            {SchoolGrades.map(g => (
                            <option key={g.id} value={g.grade}>
                                {g.grade}
                            </option>
                        ))}
                        </select>
                        If you cannot find your grade, please contact your school Admin.
                    </p>
                </div>

                <div className="class_name" style={{flexWrap: "nowrap"}}>
                    <p className="class_name_header">Class Name:</p>
                    <input type="text" className="class_name_input" placeholder="For Example 8A" onChange={handleClassChange}/>
                </div>

                <div className="student_names">
                    <p className="student_name_headers">Enter Student Names</p>
                    <input type="text" className="student_names_input" id="studentnameinput" placeholder="Write one name and click enter" onKeyDown={handleKeyDown} onChange={handleStudentChange} />
                    <p className="student_name_headers">Students({studentList.length})</p>
                    <div className="student_list" style={{maxHeight: "200px", overflowY: "scroll"}}>
                        {studentList.map(element => (
                            <p className="studentList_elements" key={element}>{element}</p>
                        ))}
                    </div>
                </div>

                <div className="save_class">
                    <button className="save_class_button" onClick={handleSave}>Save Class</button>
                </div>
            </div>
            <div className='app_registenewclass_divs' id="div3"></div>
        </div>
    </div>
  );
};

export default RegisterNewClass;
