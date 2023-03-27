// Make a GET request to get teachers from the database
function getTeachers(setvariable) {
    fetch('http://localhost:3001/teachers')
    .then(response => response.json())
    .then(data => {
      setvariable(data);
       console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
}

// get classes with a specific school id
function getSchoolTeachers(school_id, variable) {
    fetch(`http://localhost:3001/teachers/school/${school_id}`, {
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

// get a teacher with a specific id
function getTeacherById(id) {
    fetch(`http://localhost:3001/teachers/${id}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Make a POST request to add a new teacher to the database
function createTeacher( name, email, school_id ) {
    fetch('http://localhost:3001/teachers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, school_id})
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Make a PUT request to update an existing teacher in the database
function updateTeacher(newname, id) {
    fetch(`http://localhost:3001/teachers/${id}`, {
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
    console.log(data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

// Make a DELETE request to remove a teacher from the database
function deleteTeacher(id) {
    fetch(`http://localhost:3001/teachers/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export {
    getTeachers,
    getSchoolTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher,
}