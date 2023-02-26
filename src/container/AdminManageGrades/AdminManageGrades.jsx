import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components';
import { getGrades, createGrade } from '../../database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupMessage } from '../../components';

const AdminAddGrade = () => {
  const [input, setInput] = useState('');
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


    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    let schoolYearText;

    if (currentMonth >= 0 && currentMonth <= 6) {
      schoolYearText = `${currentDate.getFullYear()-1}/${currentDate.getFullYear()}`;
    } else {
      schoolYearText = `${currentDate.getFullYear()}/${currentDate.getFullYear()+1}`;
    }


  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState(null);


  const [isEditMode, setIsEditMode] = useState(true);
  const [isVisibleMode, setIsVisibleMode] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isValueSaved, setIsValueSaved] = useState(false);


  const [buttonText, setButtonText] = useState('Save Year\u00A0');

  const handleSchoolYearChange = (event) => {
    setSchoolYear(event.target.value);
  };

  const handleEditYear = (event) => {
    event.preventDefault();
    if (schoolYear.trim() === '') {
      // Show a warning if the input is empty
      setType('warning');
      setMessage(
        <>
          Your school year needs a name, for example {schoolYearText}.
        </>
      );        
      setShowPopup(true);
      return;
    }

    setIsVisibleMode(true);
    setIsEditMode(true);
    setButtonText('Edit Year\u00A0');
    setIsDisabled(true);

  };

  const handleSaveYear = (event) => {
    event.preventDefault();

    if (schoolYear.trim() === '') {
      setType('warning');
      setMessage(
        <>
          Your school year needs a name, for example {schoolYearText}.
        </>
      );        
      setShowPopup(true);
      return;
    }

    if (!isValueSaved) {
      // First time value is being saved
      handleFirstSave(event);
      setIsValueSaved(true);

    } else {

      setType('info');
      setMessage(
        <>
          Name change should not be used for the transition to a new school year.<br />
          For that you delete all grades, classes and maps.
          <br /><br/>
          Name change is only if you want to change the name of the current year.
        </>
      );        
      setShowPopup(true);

      setIsVisibleMode(true);
      setIsEditMode(false);
      setButtonText('Save Year\u00A0');
      setIsDisabled(false);
    }

  };

  const handleFirstSave = (event) => {
    event.preventDefault();
    setButtonText('Edit year\u00A0');
    setIsEditMode(true);
    setIsVisibleMode(true);
    setIsDisabled(true);
  }

  const handleDeleteGrades = () => {
    setType('warning-deleteall-confirm');
    setMessage(
        <>
            Are you sure you want to start a new year?<br /><br />
            <b>This action cannot be undone and all grades, classes and maps will be deleted.</b>
        </>);
    setShowPopup(true);
    return;
  };

  const handleConfirmDelete = () => {
    //setGrades("");
    setSchoolYear("");
    setShowPopup(false);
    setIsDisabled(true);
    // RESET EVERYTHING
};

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === '') {
        setType('warning');
        setMessage(
            <>
                Your grade needs a name, for example Grade 8 or Grade 9.
            </>);
        setShowPopup(true);
        return;
    }
    createGrade(setSchoolGradesdb, input, school_id, schoolYear);
    setInput('');
    setMessage('');
  };


  return (
    <div className="container">
      {showPopup && (
            <PopupMessage
            message={message}
            type={type}
            onClose={handleClosePopup}
            onConfirm={handleConfirmDelete}
            />
      )}
      <Navbar title="Manage Grades"/>
      <div className="flexbox">
        <div className="item aThirdTwoCols fullHeight">
          <div className="flexbox manageGradesBox">
            <div className="item tips">
              <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> Let's go!</h4>
              <p>
                As school admin you need to register the year and create the grades before the teachers can start creating the maps.
              </p>
            </div>
            <div className="item">
                <h3>School year</h3>
                <form>
                  <input type="text" value={schoolYear} placeholder={`For example ${schoolYearText}`}
                    onChange={handleSchoolYearChange} disabled={isDisabled}/>
                  <button onClick={isEditMode ? handleSaveYear : handleEditYear}>
                    {buttonText}
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                  </button>
                </form>
            </div>
          </div>

          {isVisibleMode && (
          <>
            <div className="flexbox manageGradesBox">
              <div className="item tips">
                <h4><FontAwesomeIcon icon="fa-solid fa-circle-info" /> No deletion of individual grades</h4>
                <p>
                  Once you add a grade, you cannot delete that grade until the end of the school year. 
                </p>
              </div>
              <div className="item halfWidth">
                <h3>Add grades</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" value={input} onChange={handleInputChange} />
                  <button type="submit">Add Grade <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /></button>
                </form>
              </div>
            </div> 
            
            <div className="flexbox manageGradesBox">
              <div className="item warning">
                <h4><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> Deletion is final</h4>
                <p>Only delete all grades, classes and maps at the end of the school year.</p>
              </div>
              <div className="item">
                <h3>Delete grades, classes and maps</h3>
                <button onClick={handleDeleteGrades}>Start a new school year <FontAwesomeIcon icon="fa-solid fa-forward" /></button>
              </div>
            </div>
          </>
          )}
        </div>

        <div className="item aThird fullHeight">
          <h3>Registered grades</h3>
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
