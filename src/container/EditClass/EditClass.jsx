import React, { useState, useRef } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';


const EditClass = () => {

    const [myClasses, setMyClasses] = useState([
        {id: 1, class: '10C', teacher: 'Magnus', students: ['John', 'Alex', 'Sara', 'Emily', 'Jacob', 'Sophia', 'Emily', 'Jacob', 'Charlotte', 'Liam', 'Emma']},
        {id: 2, class: '10D', teacher: 'Magnus', students: ['Emily', 'Jacob', 'Sophia', 'Charlotte', 'Liam', 'Emma']}
    ]);
    

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
    const [editedIndex, setEditedIndex] = useState(-1);
    const [indexToDelete, setIndexToDelete] = useState(-1);
    const [newStudentName, setNewStudentName] = useState('');
    const [updatedClassName, setUpdatedClassName] = useState('');


    const inputRef = useRef(null);

    const handleClassChange = (event) => {
        setUpdatedClassName("");
        const selectedClass = event.target.value;
        setSelectedMyClass(selectedClass);
        const students = myClasses.find(c => c.class === selectedClass).students;
        setSelectedClassStudents(students); 
    }

    const handleConfirmDelete = () => {
        const updatedStudents = [...selectedClassStudents];
        updatedStudents.splice(indexToDelete, 1);
        setSelectedClassStudents(updatedStudents);
        setShowPopup(false);
    };

    const handleDelete = (index) => {
        setType('confirm');
        setMessage(
            <>
                Are you sure you want to remove {selectedClassStudents[index]} from the class?
            </>);
        setShowPopup(true);
        setIndexToDelete(index);
    }


    const handleEdit = (index) => {
        setEditedIndex(index);
        setEditedName(selectedClassStudents[index]);
        inputRef.current.focus();
    }

    const handleSave = () => {
        const updatedStudents = [...selectedClassStudents];
        updatedStudents[editedIndex] = editedName;
        setSelectedClassStudents(updatedStudents);
        setEditedIndex(null);
        setEditedName({ name: ""});
    };


    const handleAddStudent = () => {
        const newName = newStudentName.trim();
        if (newName === '') {
          setType('warning');
          setMessage('The new student needs a name.');
          setShowPopup(true);
          return;
        }
        const newNameCapitalized = newName.charAt(0).toUpperCase() + newName.slice(1);
        if (selectedClassStudents.includes(newNameCapitalized)) {
            setNewStudentName('');
            setType('warning');
            setMessage(`${newNameCapitalized} already exists in the class.`);
            setShowPopup(true);
            return;
        }

        const updatedStudents = [newNameCapitalized, ...selectedClassStudents];
        setSelectedClassStudents(updatedStudents);
        setNewStudentName('');
    };
      
      

    const handleSaveClassName = () => {
        if (updatedClassName.trim() === '') {
            setType('warning');
            setMessage('You have not written a new class name.');
            setShowPopup(true);
            return;
        }

        const updatedClasses = [...myClasses];
        const index = updatedClasses.findIndex(c => c.class === selectedMyClass);
        updatedClasses[index] = {...updatedClasses[index], class: updatedClassName};
        setMyClasses(updatedClasses);
        setSelectedMyClass(updatedClassName);
        document.getElementById("newClassNameInput").value = "";
      };
      
      
    

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
            <Navbar title="Edit Class"/>
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
                                        {myClasses.map(t => (
                                        <option key={t.id} value={t.class}>
                                            {t.class}
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
                            {selectedClassStudents.map((student, index) => (
                                <li key={index}>
                                {editedIndex === index ? (
                                    <div className="item editClass">
                                        <input className="editStudentInput" type="text" ref={inputRef} value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                                        <button className="editStudentBtn orangeBg" onClick={handleSave}>Save</button>
                                    </div>
                                ) : (
                                    <div className="item editClass">                                    
                                        <div className="studentName"><FontAwesomeIcon icon="fa-solid fa-child" /><span>{student}</span></div>
                                        <div className="button-container">
                                            <button className="editStudentBtn" onClick={() => handleEdit(index)}>Edit</button>
                                            <button className="deleteStudentBtn" onClick={() => handleDelete(index)}>Delete</button>   
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
                                <input type="text" id="newClassNameInput" placeholder={`${selectedMyClass}`} onChange={(e) => setUpdatedClassName(e.target.value)} />
                                <button onClick={handleSaveClassName}>Save name <FontAwesomeIcon icon="fa-solid fa-file-signature" /></button>
                                <h3>Add student</h3>
                                <input placeholder="Write a name" type="text" value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} />
                                <button onClick={handleAddStudent}>Add student <FontAwesomeIcon icon="fa-solid fa-user-plus" /></button>
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
