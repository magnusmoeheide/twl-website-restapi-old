// Make a GET request to get classes from the database
function getClasses(setvariable) {
    fetch('http://localhost:3001/classes')
    .then(response => response.json())
    .then(data => {
      setvariable(data);
       console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
}

// Make a POST request to add a new class to the database
function createClass( name, grade_id, teacher_id, school_id, studentList) {
    fetch('http://localhost:3001/classes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, grade_id, teacher_id, school_id, studentList})
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Make a PUT request to update an existing class in the database
function updateClass(newname, id) {
    fetch(`http://localhost:3001/classes/${id}`, {
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

// Make a DELETE request to remove an class from the database
function deleteClass(id) {
    fetch(`http://localhost:3001/classes/${id}`, {
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
    getClasses,
    createClass,
    updateClass,
    deleteClass,
}