// Make a GET request to get students from the database
function getStudents(variable) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/students')
        .then(response => response.json())
        .then(data => {
          variable(data);
           console.log(data);
           resolve(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          reject(error);
        }); 
    })
}

function getClassStudents(id, setvariable) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3001/students/class/${id}`, {
        })
        .then(response => response.json())
        .then(data => {
            setvariable(data);
            console.log(data);
            resolve(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            reject(error);
        });
    })
}

// Make a POST request to add a new student to the database
function createStudent(name, class_id, grade_id, school_id) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, class_id, grade_id, school_id})
        })
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            resolve(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            reject(error);
        });
    })
}

// Make a PUT request to update an existing student in the database
function updateStudent(newname, id) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3001/students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newname
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            resolve(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            reject(error);
        });
    })
}

// Make a DELETE request to remove a student from the database
function deleteStudent(id) {
    // returns a promise for asnychronous operations
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3001/students/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            resolve(data);
        })
        .catch((error) => {
            console.error('Error:', error);
            reject(error);
        });
    });
}

export {
    getStudents,
    getClassStudents,
    createStudent,
    updateStudent,
    deleteStudent,
}