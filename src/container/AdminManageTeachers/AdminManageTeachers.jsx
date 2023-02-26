import React, { useState } from 'react';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';

const AdminManageTeachers = () => {
  
    const [teachers, setTeachers] = useState([
        { id: 1, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 2, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 3, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 4, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 5, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 6, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 7, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 8, name: 'Hans Eriksen', classes: ['8A','8B']},
        { id: 9, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 10, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 11, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 12, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 13, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 14, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 15, name: 'Elli Andersen Jenssen', classes: ['8C','8D', '8E']},
        { id: 16, name: 'Peter Hansen', classes: ['9th grade French','9A', '9B', '8th grade French', '9th grade sports']},
    ]);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState(null);
    const [indexToDelete, setIndexToDelete] = useState(-1);


    const deleteTeacher = (id) => {
        setType('warning-confirm');
        setMessage(
            <>
                Are you really sure you want to delete {teachers.find((teacher) => teacher.id === id).name}'s account?<br /><br />
                <b>This action cannot be undone and the teacher will lose all their maps and classes.</b>
            </>);
        setShowPopup(true);
        setIndexToDelete(id);
    };

    const handleConfirmDelete = () => {
        setTeachers(teachers.filter((teacher) => teacher.id !== indexToDelete));
        setShowPopup(false);
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
        <Navbar title="Manage Teachers"/>
        <div className="flexbox smallPaddingTop">
            <div className="item side left warning">
                <h4><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> Deleting a teacher results in all their classes and maps getting removed.</h4>
                <br />
                <p>You should only delete a teacher if they have left the school, or if they should not have access.</p>
            </div>
            <div className="item smallMarginTop teachersList">
                <ul>
                    {teachers.map((teacher) => (
                        <li key={teacher.id}>
                        <div className="teacherInfo">
                            <span className="teacherName">{teacher.name}</span>
                            <span className="teacherClasses">Classes: {teacher.classes.join(', ')}</span>
                        </div>
                        <button className="deleteTeacherBtn" onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="item side right">
                <p>Teachers: {teachers.length}</p>
            </div>
        </div>
        
    </div>
  )
};

export default AdminManageTeachers;
