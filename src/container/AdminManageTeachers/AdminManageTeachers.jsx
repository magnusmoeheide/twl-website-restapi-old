import React, { useState } from 'react';

const AdminManageTeachers = () => {
  
    const [teachers, setTeachers] = useState([
        { id: 1, name: 'John Doe', classes: ['German','English']},
        { id: 2, name: 'Jane Doe', classes: ['Math','English']},
        { id: 3, name: 'Jim Smith', classes: ['Math','Science']},
    ]);

    const deleteTeacher = (id) => {
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
    };

  return (
    <div>
        <h1>Admin - Manage Teachers</h1>
        <p>Deleting a teacher results in all their classes and maps getting removed.</p>
        <p>You should only delete a teacher if they have left the school, or if they should not have access.</p>
        <br />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Classes</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {teachers.map((teacher) => (
                <tr key={teacher.id}>
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td style={{ margin: '10px 0' }}>
                        {teacher.classes.map((cls) => (
                            <div key={cls}>{cls}</div>
                        ))}
                    </td>
                    <td>
                    <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
};

export default AdminManageTeachers;
