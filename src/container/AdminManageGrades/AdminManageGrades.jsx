import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components';
import { getGrades, createGrade } from '../../database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminAddGrade = () => {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [schoolYear, setSchoolYear] = useState('');


  const [grades, setGrades] = useState([
    { id: 1, name: 'Grade 8'},
    { id: 2, name: 'Grade 9'},
    { id: 3, name: 'Grade 10'}
  ]);

//---------------------------------------------------------

const [school_id, setSchoolId] = useState('1');

const [schoolGradesdb, setSchoolGradesdb] = useState([]);
useEffect(() => {
    getGrades(setSchoolGradesdb);
}, []);

//-----------------------------------------------------------

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSchoolYearChange = (event) => {
    setSchoolYear(event.target.value);
  };

    const handleSaveYear = (event) => {
      event.preventDefault();
      if (schoolYear.trim() === "") {
        setErrorMessage("Woopsie! School year is not valid.");
        return;
      }
      setIsEditMode(true);
    };

    const handleEditYear = () => {
      setIsEditMode(true);
    };

    const handleDeleteGrades = () => {
      setIsEditMode(false);
      setSchoolYear("");
      setErrorMessage("");
    };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === '') {
        setErrorMessage('Woopsie! Input cannot be empty.');
        return;
    }
    createGrade(setSchoolGradesdb, input, school_id, schoolYear);
    setInput('');
    setErrorMessage('');
  };


  return (
    <div className="container">
      <Navbar title="Manage Grades"/>
      <div className="flexbox">
        <div className="item aThirdTwoCols fullHeight">
          <div className="flexbox manageGradesBox">
            <div className="item tips">
              <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Don't be late!</h4>
              <p>
                As school admin you should create all grades at the beginning of the school year.
              </p>
            </div>
            <div className="item">
                <h3>School year</h3>
                <form>
                  <input type="text" value={schoolYear} onChange={handleSchoolYearChange} />
                  <button onClick={isEditMode ? handleEditYear : handleSaveYear}>
                    {isEditMode ? "Edit Year" : "Save Year"}
                  </button>
                </form>
            </div>
          </div>

          <div className="flexbox manageGradesBox">
            <div className="item warning">
              <h4><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> No deletion of individual grades</h4>
              <p>
                Once you add a grade, you cannot delete that grade until the end of the school year. 
              </p>
            </div>
            <div className="item halfWidth">
              <h3>Add grades</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInputChange} />
                <button type="submit">Add Grade</button>
              </form>
            </div>
          </div> 
          {isEditMode && (
            <>
          <div className="flexbox manageGradesBox">
            <div className="item warning">
              <h4><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> Deletion is final</h4>
              <p>Only delete all grades, classes and maps at the end of the school year.</p>
            </div>
            <div className="item halfWidth">
              <h3>Delete grades, classes and maps</h3>
              <button onClick={handleDeleteGrades}>Start a new school year</button>
            </div>
          </div>
          </>
          )}
        </div>

        <div className="item aThird fullHeight">
          <h3>Registered grades</h3>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {grades.map((item) => (
          <ul className="registeredGrades">
            <li key={item.name}>
              <label>
                  <p
                  value={item.name}
                  id={item.name}
                  data-id={item.id}
                  />
                  {item.name}
              </label>
            </li>
          </ul>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAddGrade;
