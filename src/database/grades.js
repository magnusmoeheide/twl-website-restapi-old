// Make a GET request to get grades from the database
function getGrades(variable) {
    fetch('http://localhost:3001/grades')
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
function createGrade(name, school_id) {
    fetch('http://localhost:3001/grades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, school_id})
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        //alert(data);
        //getGrade();
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
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export {
    getGrades,
    createGrade,
    updateGrade,
    deleteGrade,
}