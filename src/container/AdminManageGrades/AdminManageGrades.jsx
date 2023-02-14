import React, { useState } from 'react';

const AdminAddGrade = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [SchoolGrades, setSchoolGrades] = useState([]);
  const [schoolYear, setSchoolYear] = useState('');

  const [options, setOptions] = useState([
    { value: 'Grade 1', label: 'Grade 1' },
    { value: 'Grade 2', label: 'Grade 2' },
    { value: 'Grade 3', label: 'Grade 3' },
    { value: 'Grade 4', label: 'Grade 4' },
    { value: 'Grade 5', label: 'Grade 5' },
    { value: 'Grade 6', label: 'Grade 6' },
    { value: 'Grade 7', label: 'Grade 7' },
    { value: 'Grade 8', label: 'Grade 8' },
    { value: 'Grade 9', label: 'Grade 9' },
    { value: 'Grade 10', label: 'Grade 10' },
    { value: 'VG1', label: 'VG1' },
    { value: 'VG2', label: 'VG2' },
    { value: 'VG3', label: 'VG3' },
    { value: 'Mottak', label: 'Mottak' },
  ]);

  const handleSchoolYearChange = (event) => {
    setSchoolYear(event.target.value);
  };

  const handleChange = (event) => {
    const newSelectedValues = [...selectedValues];
    if (event.target.checked) {
      newSelectedValues.push(event.target.value);
    } else {
      const index = newSelectedValues.indexOf(event.target.value);
      newSelectedValues.splice(index, 1);
    }
    setSelectedValues(newSelectedValues);
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
    setOptions([...options, { value: input, label: input }]);
    setSelectedValues([...selectedValues, input]);
    setInput('');
    setErrorMessage('');
  };

  const handleSaveGrades = () => {
    if (schoolYear === '') {
        setErrorMessage('Please enter the school year.');
        return;
    }
    
    if (selectedValues.length === 0) {
        setErrorMessage('Please select at least one grade.');
        return;
    }

    setSchoolGrades((prevSchoolGrades) => {
        const newSchoolGrades = [...prevSchoolGrades, {[schoolYear]: selectedValues}];
        return newSchoolGrades;   
      });  

    setSelectedValues([]);
    setSchoolYear('');
    setErrorMessage('');
};

  return (
    <div className="adminAddGrades">
        <h1>Admin - Manage Grades</h1>
        
        <p>As school admin you should create all grades at the beginning of the school year.</p>
        <p>You can only remove individual grades if a teacher has not created a class in that grade.</p>
        <p>
            School Year:
            <input type="text" placeholder="F.eks 2023/2024" value={schoolYear} onChange={(e) => setSchoolYear(e.target.value)} />
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
                    {options.map((option) => (
                    <ul>
                        <li>
                            <div key={option.value}>
                            <label>
                                <input
                                type="checkbox"
                                value={option.value}
                                onChange={handleChange}
                                checked={selectedValues.includes(option.value)}
                                />
                                {option.label}
                            </label>
                            </div>
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
                  <button type="submit">Add Option</button>
                </form>
              </td>
    
            </tr>

            <tr>
              <td>
                <p>Selected grades: </p>
                <p>{selectedValues.join(", ")}</p>
              </td>
            </tr>
            
          </tbody>
        </table>

        <br />
        

        <br />
        

        <br /><br />
        <button onClick={handleSaveGrades}>Save Grades</button>
        
        <p>{SchoolGrades.map((grade, index) => (
        <p key={index}>School Year: {Object.keys(grade)[0]} | Grades: {grade[Object.keys(grade)[0]].join(", ")}</p>
        ))}</p>
    </div>
  );
};

export default AdminAddGrade;
