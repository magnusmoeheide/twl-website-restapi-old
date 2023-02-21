import React, { useState } from 'react';
import Downshift from 'downshift';
import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


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

    const [isCopied, setIsCopied] = useState(false);
    const handleCopyClick = () => {
        const lisenceCode = document.querySelector('.lisenceCode');
        navigator.clipboard.writeText(lisenceCode.textContent);
        setIsCopied(true);
        setTimeout(() => {
        setIsCopied(false);
        }, 3000);
    };




  return (
    <div className="container">
        <Navbar title="Admin Home"/>
        <div className="flexbox">
            <div className="item side left">
                <h3>School stats</h3>
                <div>
                    <table className="statsTable">
                        <tr>
                            <td>
                                Teachers registered
                            </td>
                            <td>
                                40
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Active teachers this year
                            </td>
                            <td>
                                23
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Maps created this year
                            </td>
                            <td>49</td>
                        </tr>
                    </table>
                    
     
                </div>
                
            </div>
            <div className="item smallPaddingTop">
                <div>
                    <div className="xsPaddingLeft">
                        <p>
                            Registration code for new teachers: 
                            <b className="lisenceCode"> F4FG2E</b>
                            <button className={isCopied ? 'copyBtn copied' : 'copyBtn'} onClick={handleCopyClick}>
                                {isCopied ? (
                                <>
                                    Copied <FontAwesomeIcon icon={faCheck} />
                                </>
                                ) : (
                                'Copy code'
                                )}
                            </button>
                        </p>
                    </div>
                    <h3>Settings</h3>
                    <button className="orangeBg">Manage Teacher Accounts <FontAwesomeIcon icon="fa-solid fa-chalkboard-user" /></button>
                    <button className="orangeBg">Manage Grades <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /></button>
                </div>

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
                        
                        <div className="classesList admin">
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
            <div className="item paddingTop side right">
                <p>School: Skullerud skole</p>
                <p>Current school year: 2023/2024</p>
            </div>
        </div>
    </div>
  )
};

export default AdminHome;
