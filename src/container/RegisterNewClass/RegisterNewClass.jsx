import React, { useState } from 'react';

import './RegisterNewClass.css';

import { Navbar } from '../../components';

const RegisterNewClass = () => {
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
        setGrade(event.target.value)
    }
    const handleClassChange = event => {
        setNameClass(event.target.value);
    };
    const handleStudentChange = event => {
        setInputStudent(event.target.value);
      };

    const [studentList, setStudentList] = useState([]);

    const handleKeyDown = event => {
        if (event.keyCode == 13) {
            setStudentList([inputStudent, ...studentList]);
            console.log(studentList);
            document.getElementById("studentnameinput").value="";
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
                    <p className="grade_option_header">Choose Grade:</p>
                    <select className="grade_dropdown" onChange={handleGradeChange}>
                        <option disabled selected>Please select an option</option>
                        <option className='grade_dropdown_options'>Grade 1</option>
                        <option className='grade_dropdown_options'>Grade 2</option>
                        <option className='grade_dropdown_options'>Grade 3</option>
                    </select>
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
