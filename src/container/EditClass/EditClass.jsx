import React, { useState, useRef } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';


const MyClasses = [
    {id: 1, class: '10C', teacher: 'Magnus', students: ['John', 'Alex', 'Sara']},
    {id: 2, class: '10D', teacher: 'Magnus', students: ['Emily', 'Jacob', 'Sophia']},
    {id: 3, class: '10E', teacher: 'Magnus', students: ['William', 'Ava', 'Ethan']},
    {id: 4, class: '9th Grade French', teacher: 'Magnus', students: ['Mia', 'Oliver', 'Isabella']},
    {id: 5, class: '10th Grade French', teacher: 'Magnus', students: ['Charlotte', 'Liam', 'Emma']},
]


const EditClass = () => {

    /* -----  POPUP MESSAGE  ----- */
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    /* -----  popup message end ----- */

    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [selectedClassStudents, setSelectedClassStudents] = useState([]);
    const [editedName, setEditedName] = useState('');
    const [editedIndex, setEditedIndex] = useState(-1);
    const [indexToDelete, setIndexToDelete] = useState(-1);

    const inputRef = useRef(null);

    const handleClassChange = (event) => {
        const selectedClass = event.target.value;
        setSelectedMyClass(selectedClass);

        const students = MyClasses.find(c => c.class === selectedClass).students;
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
        setMessage("Are you sure you want to delete the student?");
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
        setEditedName('');
        setEditedIndex(-1);
    }


    return (
        <div className="container">
            {showPopup && type === 'confirm' && (
                <PopupMessage
                message={message}
                type={type}
                onConfirm={handleConfirmDelete}
                onClose={handleClosePopup}
                />
            )}
            <Navbar title="Edit Class"/>
            <div className="flexbox">
                <div className="item minWidth30">
                   
                    <h3>Choose class
                        <select class="select" value={selectedMyClass} onChange={handleClassChange}>
                            <option value="" disabled>Choose Class</option>
                            {MyClasses.map(t => (
                            <option key={t.id} value={t.class}>
                                {t.class}
                            </option>
                            ))}
                        </select>
                    </h3>
                        
                    {selectedMyClass && (
                        <h3>Students ({selectedClassStudents.length})</h3>
                    )}
                    <ul className="editClass">
                        {selectedClassStudents.map((student, index) => (
                            <li key={index}>
                                {editedIndex === index ? (
                                <div className="item editClass">
                                    <input class="editStudentInput" type="text" ref={inputRef} value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                                    <button class="editStudentBtn orangeBg" onClick={handleSave}>Save</button>
                                </div>
                                ) : (
                                <div className="item editClass">                                    
                                    <div className="studentName"><FontAwesomeIcon icon="fa-solid fa-child" /><span>{student}</span></div>
                                    <div className="button-container">
                                        <button class="editStudentBtn" onClick={() => handleEdit(index)}>Edit</button>
                                        <button class="deleteStudentBtn" onClick={() => handleDelete(index)}>Delete</button>   
                                    </div>
                                </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EditClass;
