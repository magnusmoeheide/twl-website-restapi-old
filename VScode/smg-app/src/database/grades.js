// Make a GET request to get classes from the database
function getGrades(setvariable) {
    fetch('http://localhost:3001/grades')
    .then(response => response.json())
    .then(data => {
      setvariable(data);
       console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
}

// get grades with a specific school id
function getSchoolGrades(school_id, variable) {
    fetch(`http://localhost:3001/grades/school/${school_id}`, {
    })
    .then(response => response.json())
    .then(data => {
      variable(data);
       console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
}

// Make a POST request to add a new grade to the database
function createGrade(setvariable, name, school_id, school_year) {
    fetch('http://localhost:3001/grades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, school_id, school_year})
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        //alert(data);
        getGrades(school_id, setvariable);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Make a PUT request to update an existing grade in the database
function updateGrade(newname, id) {
    fetch(`http://localhost:3001/grades/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newname
        })
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

// Make a DELETE request to remove a grade from the database
function deleteGrade(id) {
    fetch(`http://localhost:3001/grades/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export {
    getGrades,
    getSchoolGrades,
    createGrade,
    updateGrade,
    deleteGrade,
}