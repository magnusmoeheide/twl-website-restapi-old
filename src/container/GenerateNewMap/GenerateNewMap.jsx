import React, { useState } from 'react';

const GenerateNewMap = () => {
   
    const [students, setStudents] = useState([
        { id: 1, name: 'Student 1' },
        { id: 2, name: 'Student 2' },
        { id: 3, name: 'Student 3' },
        { id: 4, name: 'Student 4' },
        { id: 5, name: 'Student 5' },
        { id: 6, name: 'Student 6' },
        { id: 7, name: 'Student 7' },
        { id: 8, name: 'Student 8' },
        { id: 9, name: 'Student 9' },
        { id: 10, name: 'Student 10' },
        { id: 11, name: 'Student 11' },
        { id: 12, name: 'Student 12' },
        { id: 13, name: 'Student 13' },
        { id: 14, name: 'Student 14' },
        { id: 15, name: 'Student 15' },

      ]);

    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [seats, setSeats] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
    
        const shuffledStudents = students.sort(() => 0.5 - Math.random());
        const seatMap = [];
    
        for (let i = 0; i < rows; i++) {
          seatMap[i] = [];
          for (let j = 0; j < columns; j++) {
            if (shuffledStudents.length > 0) {
              seatMap[i][j] = shuffledStudents.pop();
            } else {
              seatMap[i][j] = null;
            }
          }
        }
    
        setSeats(seatMap);
      };


    return (
        <div>
            <form onSubmit={handleSubmit}>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={e => {
                const parsedValue = parseInt(e.target.value, 10);
                if (!isNaN(parsedValue)) {
                  setRows(parsedValue);
                }
              }}
          />
        </label>
        <label>
          Columns:
          <input
            type="number"
            value={columns}
            onChange={e => {
                const parsedValue = parseInt(e.target.value, 10);
                if (!isNaN(parsedValue)) {
                  setColumns(parsedValue);
                }
              }}
          />
        </label>
        <button type="submit">Generate Seating Map</button>
      </form>
      <br />
      {seats.length > 0 && (
        <table>
          <tbody>
            {seats.map((row, i) => (
              <tr key={i}>
                {row.map((student, j) => (
                  <td key={j}>{student ? student.name : ''}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

        </div>
    )
};

export default GenerateNewMap;
