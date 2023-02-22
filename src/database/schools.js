// Make a GET request to get schools from the database
function getSchools(variable) {
    fetch('http://localhost:3001/schools')
    .then(response => response.json())
    .then(data => {
      variable(data);
       console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });  
}

// Make a POST request to add a new school to the database
function createSchool(setvariable, name, admin_id) {
    fetch('http://localhost:3001/schools', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, admin_id})
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        //alert(data);
        getSchools(setvariable);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Make a PUT request to update an existing school in the database
function updateSchool(newname, id) {
    fetch(`http://localhost:3001/schools/${id}`, {
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

// Make a DELETE request to remove a school from the database
function deleteSchool(id) {
    fetch(`http://localhost:3001/schools/${id}`, {
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
    getSchools,
    createSchool,
    updateSchool,
    deleteSchool,
}