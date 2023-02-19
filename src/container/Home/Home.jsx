import React, { useState } from 'react';
import Downshift from 'downshift';
import Logo from '../../assets/smg-logo-transparent.png';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


const Home = props => {
    const [selectedMyClass, setSelectedMyClass] = useState('');
    const [selectedSchoolClass, setSelectedSchoolClass] = useState('');
    const [searchValueMyClass, setSearchValueMyClass] = useState('');

    const getClassOptions = (inputValue) => {
        return SchoolClasses.filter((c) =>
          c.class.toLowerCase().includes(inputValue.toLowerCase()) ||
            c.teacher.toLowerCase().includes(inputValue.toLowerCase())
        );
      };


    return (
      <div className="container">
        <Navbar title="Home"/>
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
                    {MyClasses.map(t => (
                    <option key={t.id} value={t.class}>
                        {t.class} ({t.teacher})
                    </option>
                ))}
                </select>
                <Link to="/viewmaps">
                    <button className="orangeBg" disabled={!selectedMyClass}>View Maps in Class <FontAwesomeIcon icon="fa-solid fa-users-rectangle" /></button>
                </Link>
                <Link to="/editclass">
                    <button className="orangeBg" disabled={!selectedMyClass}>Edit Class <FontAwesomeIcon icon="fa-solid fa-users-gear" /></button>  
                </Link>


                <div className="samerow">
                    <Downshift class="downshift" onChange={selectedItem => setSelectedSchoolClass(selectedItem.class)}
                        itemToString={item => (item ? item.class : '')}
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
            </div>
            <div className="item side right">
                <p>School: Skullerud skole</p>
                <p>User: magnus.heide@code.berlin</p>
                <p>Account: Teacher</p> 
            </div>
        </div>
    </div>
    );

}

export default Home;
