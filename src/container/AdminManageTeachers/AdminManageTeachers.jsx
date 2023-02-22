import React, { useState } from 'react';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';

const AdminManageTeachers = () => {
  
    const [teachers, setTeachers] = useState([
        { id: 1, name: 'John Doe', classes: ['8A','8B']},
        { id: 2, name: 'Jane Doe', classes: ['8C','8D', '8E']},
        { id: 3, name: 'Jim Smith', classes: ['9th grade French','9A', '9B']},
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
                Are you really sure you want to delete the teacher?<br /><br />
                This action cannot be undone and the teacher will lose all their maps and classes.
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
        {showPopup && type === 'warning-confirm' && (
            <PopupMessage
            message={message}
            type={type}
            onConfirm={handleConfirmDelete}
            onClose={handleClosePopup}
            />
        )}
        <Navbar title="Admin - Manage Teachers"/>
        <div className="flexbox smallPaddingTop">
            <div className="item side left">
                <div className="flexbox noGrow">
                    <div className="item">
                        <b><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> Deleting a teacher results in all their classes and maps getting removed.</b>
                        <p>You should only delete a teacher if they have left the school, or if they should not have access.</p>
                    </div>
                </div>
            </div>
            <div className="item smallPaddingTop">
                <table className="teachersTable">
                <thead>
                    <tr>
                        <th>Teacher</th>
                        <th>Registered classes</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                    <tr key={teacher.id}>
                        <td>{teacher.name}</td>
                        <td className="sortFromLeft">
                            <div>
                                {teacher.classes.map((cls, index) => (
                                <span key={cls}>
                                    {cls}{index !== teacher.classes.length - 1 && ', '}
                                </span>
                                ))}
                            </div>
                        </td>
                        <td className="deleteTeacher">
                            <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div className="item side right">
                <p>Registered teachers: 40</p>
            </div>
        </div>
        
    </div>
  )
};

export default AdminManageTeachers;
