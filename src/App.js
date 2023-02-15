import { ViewMaps } from './container';
import { Home } from './container';
import { AdminManageGrades } from './container';
import { AdminManageTeachers } from './container';
import { AdminHome } from './container';
import { CreateNewMap } from './container';
import { GenerateNewMap } from './container';
import Navbar from './Navbar';
import './App.css';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/AdminManageGrades" element={<AdminManageGrades/>}/>
          <Route path="/AdminManageTeachers" element={<AdminManageTeachers/>}/>
          <Route path="/AdminHome" element={<AdminHome/>}/>
          <Route path="/CreateNewMap" element={<CreateNewMap/>}/>
          <Route path="/ViewMaps" element={<ViewMaps/>}/>
        </Routes>
    </div>
  );
}

export default App;
