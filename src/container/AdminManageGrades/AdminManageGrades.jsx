import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { Navbar } from '../../components';
import { getGrades, createGrade, deleteGrade } from '../../database';

const AdminAddGrade = () => {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [schoolYear, setSchoolYear] = useState('');

//---------------------------------------------------------

const [school_id, setSchoolId] = useState('1');

const [schoolGradesdb, setSchoolGradesdb] = useState([]);

useEffect(() => {
    getGrades(setSchoolGradesdb);
}, []);

//-----------------------------------------------------------

  const handleSchoolYearChange = (event) => {
    setSchoolYear(event.target.value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === '') {
        setErrorMessage('Input cannot be empty.');
        return;
    }
    createGrade(setSchoolGradesdb, input, school_id, schoolYear);
    setInput('');
    setErrorMessage('');
  };

  const handleDelete = (event) => {
    deleteGrade(event.target.value);
    getGrades(setSchoolGradesdb);
  }

  return (
    <div className="adminAddGrades">
      <Navbar title="Manage Grades"/>
        <h1>Admin - Manage Grades</h1>
        
        <p>As school admin you should create all grades at the beginning of the school year.</p>
        <p>You can only remove individual grades if a teacher has not created a class in that grade.</p>
        <p>
            School Year:
            <input type="text" placeholder="F.eks 2023/2024" value={schoolYear} onChange={handleSchoolYearChange} />
            <button>Delete All Grades</button>

            <br /><br />
            Only delete all grades at the end of the school year when the students change grades.
        </p>
    
        <br />
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <p>You can only remove individual grades if a teacher has not created a class in that grade.</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <h3>Manage Grades</h3>
                <form className="adminAddGradesContainer">
                    {schoolGradesdb.map((item) => (
                    <ul>
                        <li>
                            <div key={item.name}>
                            <label>
                                <p
                                value={item.name}
                                id={item.name}
                                data-id={item.id}
                                />
                                {item.name}
                            </label>
                            </div>
                            <img src={images.XIcon} value={item.id} onClick={handleDelete} style={{"height":"3vh"}}/>
                        </li>
                    </ul>
                    ))}
                </form>
              </td>

              <td>
                <p>Or you can add your own grades:</p>
                <form onSubmit={handleSubmit}>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  <input type="text" value={input} onChange={handleInputChange} />
                  <button type="submit">Add Grade</button>
                </form>
              </td>
    
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default AdminAddGrade;
