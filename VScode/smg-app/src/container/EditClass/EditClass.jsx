import React, { useState, useRef, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';
import { getTeacherClasses, getClassStudents, deleteStudent, updateStudent, updateClass, createStudent, deleteClass } from '../../database'


const EditClass = () => {
  
    const[teacherId, setTeacherId] = useState('1');
    const[schoolId, setSchoolId] = useState('1');
    const[gradeId, setGradeId] = useState('1');

    //------------ for db query ------------//

    const [teacherClasses, setTeacherClasses] = useState([]);

    useEffect(() => {
        getTeacherClasses(teacherId, setTeacherClasses);
    }, [])

    //-------------------------------------//
    

    /* -----  POPUP MESSAGE  ----- */
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState(null);
    /* -----  popup message end ----- */

    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [selectedClassStudents, setSelectedClassStudents] = useState([]);
    const [editedName, setEditedName] = useState('');
    const [editedId, setEditedId] = useState(-1);
    const [idToDelete, setIdToDelete] = useState(-1);
    const [newStudentName, setNewStudentName] = useState('');
    const [updatedClassName, setUpdatedClassName] = useState('');

    const handleClassChange = (event) => {
        setUpdatedClassName("");
        const selectedClass = event.target.value;
        setSelectedMyClass(selectedClass);
        getClassStudents(selectedClass, setSelectedClassStudents)
    }

    const handleConfirmDelete = async () => {
        setShowPopup(false);
        await deleteStudent(idToDelete);
        getClassStudents(selectedMyClass, setSelectedClassStudents);
    };

    const handleDelete = (id) => {
        setType('confirm');
        setMessage(
            <>
                Are you sure you want to remove {selectedClassStudents.find(e => e.id === parseInt(id)).name} from the class?
            </>);
        setShowPopup(true);
        setIdToDelete(id);
    }

    const handleEdit = (id) => {
        setEditedId(id);
    }

    const handleSave = async () => {
        await updateStudent(editedName, editedId);
        setEditedId(null);
        setEditedName({ name: ""});
        getClassStudents(selectedMyClass, setSelectedClassStudents);
    };


    const handleAddStudent = async () => {
        const newName = newStudentName.trim();
        if (newName === '') {
          setType('warning');
          setMessage('The new student needs a name.');
          setShowPopup(true);
          return;
        }
        await createStudent(newName, selectedMyClass, gradeId, schoolId);
        getClassStudents(selectedMyClass, setSelectedClassStudents);
        setNewStudentName('');
    };
      
      

    const handleSaveClassName = async () => {
        if (updatedClassName.trim() === '') {
            setType('warning');
            setMessage('You have not written a new class name.');
            setShowPopup(true);
            return;
        }

        await updateClass(updatedClassName, selectedMyClass)
        getTeacherClasses(teacherId, setTeacherClasses);
        document.getElementById("newClassNameInput").value = "";
      };
      
    const handleClassDelete = async () => {
        await deleteClass(selectedMyClass);
        getTeacherClasses(teacherId, setTeacherClasses);
        setSelectedMyClass('');
    }
    

    return (
        <div className="container">
            {showPopup && (
                <PopupMessage
                message={message}
                type={type}
                onConfirm={handleConfirmDelete}
                onClose={handleClosePopup}
                />
            )}
            <Navbar title="Edit Class" previous="/"/>
            <div className="flexbox">
                <div className="item side aThird">
                    <div className="smallMarginTop tips">
                    {selectedMyClass && (
                        <>
                            <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Deleting a student</h4>
                            <p>
                                Deleting a student will influence your current class map.<br />
                                It is advisable to generate a new map after deleting a student.<br />
                                Printing an already generated map with the deleted student can give issues.
                            </p>
                        </>
                    )}
                    </div>
                </div>
                <div className="item minWidth30">
                    <ul className="editClass noBorderBottom fullWidth">
                        <li>
                            <div className="flexbox">
                                <div className="item xsPaddingTop">
                                    <h3>Class</h3>
                                </div>
                                <div className="item fullWidth">
                                    <select className="select halfWidth" value={selectedMyClass} onChange={handleClassChange}>
                                        <option value="" disabled>Select Class</option>
                                        {teacherClasses.map(t => (
                                        <option key={t.id} value={t.id}>
                                            {t.name}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
       
                    {selectedMyClass && (
                    <>   
                        <h3>Students ({selectedClassStudents.length})</h3>
                        <div className="studentList">
                            <ul className="editClass">
                            {selectedClassStudents.map((student) => (
                                <li key={student.id}>
                                {editedId === student.id ? (
                                    <div className="item editClass">
                                        <input className="editStudentInput" type="text" placeholder={student.name} onChange={(e) => setEditedName(e.target.value)} />
                                        <button className="editStudentBtn orangeBg" onClick={handleSave}>Save</button>
                                    </div>
                                ) : (
                                    <div className="item editClass">                                    
                                        <div className="studentName"><FontAwesomeIcon icon="fa-solid fa-child" /><span>{student.name}</span></div>
                                        <div className="button-container">
                                            <button className="editStudentBtn" onClick={() => handleEdit(student.id)}>Edit</button>
                                            <button className="deleteStudentBtn" onClick={() => handleDelete(student.id)}>Delete</button>   
                                        </div>
                                    </div>
                                )}
                                </li>
                            ))}
                            </ul>
                        </div>
                    </>
                    )}
                </div>
                <div className="item left aThird">
                    {selectedMyClass && (
                        <>   
                            {selectedMyClass && ( 
                            <div>
                                <h3>Change class name</h3>
                                <input type="text" id="newClassNameInput" placeholder={teacherClasses.find(e => e.id === parseInt(selectedMyClass)).name} onChange={(e) => setUpdatedClassName(e.target.value)} />
                                <button onClick={handleSaveClassName}>Save name <FontAwesomeIcon icon="fa-solid fa-file-signature" /></button>
                                <h3>Add student</h3>
                                <input placeholder="Write a name" type="text" value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} />
                                <button onClick={handleAddStudent}>Add student <FontAwesomeIcon icon="fa-solid fa-user-plus" /></button>
                                <h3>Delete Class</h3>
                                <button onClick={handleClassDelete}>Delete</button>
                            </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditClass;
