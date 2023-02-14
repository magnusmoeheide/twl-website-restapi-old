import React, { useState } from 'react';
import Downshift from 'downshift';
import { Link } from 'react-router-dom';


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

const AdminHome = () => {
    const [selectedSchoolClass, setSelectedSchoolClass] = useState('');
    const [searchValueMyClass, setSearchValueMyClass] = useState('');

    const getClassOptions = (inputValue) => {
        return SchoolClasses.filter((c) =>
          c.class.toLowerCase().includes(inputValue.toLowerCase()) ||
            c.teacher.toLowerCase().includes(inputValue.toLowerCase())
        );
      };


  return (
    <div>
        <h1>Admin - Home</h1>
        <p>School: Skullerud skole</p>
        <p>Share this code with teachers that want to open an account: F4FG2E</p>

        <br />
        <div className="samerow">
            <Downshift class="downshift" onChange={selectedItem => setSelectedSchoolClass(selectedItem.class)}
                itemToString={item => (item ? item.class : '')}
            >
            {({getInputProps, getItemProps, getLabelProps,  isOpen, getMenuProps, inputValue,
                highlightedIndex,selectedItem}) => (

                <div className="seachClassesInSchool">
                    <label {...getLabelProps()}>My school's classes:</label><br /><br />

                    <input className="searchSchoolDBinput"
                        {...getInputProps({placeholder: 'Search for Class or Teacher', 
                        onChange: e => setSearchValueMyClass(e.target.value)
                        })}
                    />
                    <Link to="/viewmaps">
                        <button disabled={!selectedSchoolClass}>
                            View Maps in Class
                        </button>
                    </Link>
                    <div className="schoolClassesList">
                        <ul {...getMenuProps()}>
                            <br />
                            {isOpen
                            ? getClassOptions(searchValueMyClass).map((item, index) => (
                                <li {...getItemProps({key: item.id, index, item,})}>
                                {item.class} ({item.teacher})
                                </li>
                            ))
                            : null}
                        </ul>
                    </div>
                </div>
                )}
            </Downshift>
        </div>

        <br />
        <br />
        <p>Settings:</p>
        <button>Manage Teacher Accounts</button>
        <button>Manage Grades</button>
    </div>
  )
};

export default AdminHome;
