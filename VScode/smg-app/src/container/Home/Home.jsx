import React, { useState, useEffect } from 'react';
import Downshift from 'downshift';
import Logo from '../../assets/smg-logo-transparent.png';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTeacherClasses, getSchoolClasses, getSchoolTeachers } from '../../database';

/*
const SchoolClasses = [
    {id: 1, class: '8A', teacher: 'Julie', created: '01-01-2023'},
    {id: 2, class: '8B', teacher: 'Julie', created: '01-01-2023'},
    {id: 3, class: '8C', teacher: 'Tom', created: '01-01-2023'},
    {id: 4, class: '8D', teacher: 'Tom', created: '01-01-2023'},
    {id: 5, class: '9A', teacher: 'Anna', created: '01-01-2023'},
    {id: 6, class: '9B', teacher: 'Anna', created: '01-01-2023'},
    {id: 7, class: '9C', teacher: 'Julie', created: '01-01-2023'},
    {id: 8, class: '9D', teacher: 'Julie', created: '01-01-2023'},
    {id: 9, class: '10A', teacher: 'Hans', created: '01-01-2023'},
    {id: 10, class: '10B', teacher: 'Hans', created: '01-01-2023'},
    {id: 11, class: '9th Grade German', teacher: 'Hans', created: '01-01-2023'},
    {id: 12, class: '10th Grade German', teacher: 'Hans', created: '01-01-2023'},

];

const MyClasses = [
    {id: 1, class: '10C', teacher: 'Magnus', created: '01-01-2023'},
    {id: 2, class: '10D', teacher: 'Magnus', created: '01-01-2023'},
    {id: 3, class: '10E', teacher: 'Magnus', created: '01-01-2023'},
    {id: 4, class: '9th Grade French', teacher: 'Magnus', created: '01-01-2023'},
    {id: 5, class: '10th Grade French', teacher: 'Magnus', created: '01-01-2023'},
]
*/

const Home = props => {

    // ---------- for database query -------------- //
    const [teacherId, setTeacherId] = useState('2');//should change according to login details
    const [schoolId, setSchoolId] = useState('1');//should change according to login details

    const [teacherClasses, setTeacherClasses] = useState([]);
    const [schoolClasses, setSchoolClasses] = useState([]);
    const [schoolTeachers, setSchoolTeachers] = useState([]);

    useEffect(() => {
        getTeacherClasses(teacherId, setTeacherClasses);
        getSchoolClasses(schoolId, setSchoolClasses);
        getSchoolTeachers(schoolId, setSchoolTeachers)
    }, []);
    // ------------------------------------------- //

    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [selectedSchoolClass, setSelectedSchoolClass] = useState('');
    const [searchValueMyClass, setSearchValueMyClass] = useState('');

    const getClassOptions = (inputValue) => {
        return schoolClasses.filter((c) =>
          c.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            c.teacher_id == (inputValue)
        );
      };

    const [greeting, setGreeting] = useState('');
    const [user, setUser] = useState('User');

    useEffect(() => {
    // Retrieve the current time
    const now = new Date();
    const hours = now.getHours();

    // Set the greeting based on the current time
    if (hours >= 6 && hours < 12) {
        setGreeting('Good morning');
    } else if (hours >= 12 && hours < 18) {
        setGreeting('Good afternoon');
    } else {
        setGreeting('Good evening');
    }
    }, []);

    return (
      <div className="container">
        <Navbar title={`${greeting}, ${user}`} />

        <div className="flexbox fullHeight">
            <div className="item side left">
            </div>
            <div className="item">
                <div className="flexbox">
                    <div className="item smallMarginTop">
                        <img src={Logo} alt="" className='logo' />
                    </div>
                </div>

                <div className="center">
                    <Link to="/createnewmap">
                        <button className="orangeBg bold">Create New Map <FontAwesomeIcon icon="fa-solid fa-pen" /></button>
                    </Link>
                </div>

                <h3 className="smallMarginTop">
                    My classes
                </h3>

                <select value={selectedMyClass} onChange={e => setSelectedMyClass(e.target.value)}>
                    <option value="" disabled>Choose Class</option>
                    {teacherClasses.map(t => {
                        // Find the teacher that corresponds to the current class
                        const teacher = schoolTeachers.find(teacher => teacher.id === t.teacher_id);
                        // If the teacher is found, display the teacher's name in the option label
                        const optionLabel = teacher ? `${t.name} (${teacher.name})` : t.name;
                        return (
                        <option key={t.id} value={t.id}>
                            {optionLabel}
                        </option>
                        );
                    })}
                </select>

                <Link to="/viewmaps">
                    <button className="orangeBg" disabled={!selectedMyClass}>View Maps in Class <FontAwesomeIcon icon="fa-solid fa-users-rectangle" /></button>
                </Link>
                <Link to="/editclass">
                    <button className="orangeBg" disabled={!selectedMyClass}>Edit Class <FontAwesomeIcon icon="fa-solid fa-users-gear" /></button>  
                </Link>


                <div>
                    <Downshift class="downshift" onChange={selectedItem => setSelectedSchoolClass(selectedItem.name)}
                        itemToString={item => (item ? item.name : '')}
                    >
                    {({getInputProps, getItemProps, isOpen, getMenuProps, inputValue,
                        highlightedIndex,selectedItem}) => (

                        <div>   
                            <h3>
                                My school's classes
                            </h3>
                            
                            <input className="inputSearchSchool"
                                {...getInputProps({placeholder: 'Search for Class or Teacher', 
                                onChange: e => setSearchValueMyClass(e.target.value)
                                })}
                            />

                            <button className="orangeBg" disabled={!selectedSchoolClass}>
                                View Maps in Class <FontAwesomeIcon icon="fa-solid fa-users-rectangle" />
                            </button>
                            
                            <div className="classesList">
                                <ul {...getMenuProps()}>
                                    <br />
                                    {isOpen
                                    ? getClassOptions(searchValueMyClass).map((item, index) => {
                                        // Find the teacher that corresponds to the current class
                                        const teacher = schoolTeachers.find(teacher => teacher.id === item.teacher_id);
                                        // If the teacher is found, display the teacher's name in the option label
                                        const optionLabel = teacher ? `${item.name} (${teacher.name})` : item.name;

                                        return (
                                            <li {...getItemProps({key: item.id, index, item,})}>
                                            {optionLabel}
                                            </li>
                                        )
                                    })
                                    : null}
                                </ul>
                            </div>
                        </div>
                        )}
                    </Downshift>
                </div>   
            </div>
            <div className="item side right">
                <p>School: Skullerud skole</p>
                <p>User: name@osloskolen.no</p>
                <p>Account: Teacher</p> 
            </div>
        </div>
    </div>
    );

}

export default Home;
