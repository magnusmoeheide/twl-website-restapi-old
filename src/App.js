
import { 
  Home,
  RegisterNewClass,
  OptionalConditions,
  ViewMaps,
  AdminManageGrades,
  CreateNewMap,
  GeneratedEditMap,
  AdminManageTeachers,
  AdminHome,
  EditClass 
} from './container';

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
          <Route path="/GeneratedEditMap" element={<GeneratedEditMap/>}/>
          <Route path="/optionalconditions" element={<OptionalConditions/>}/>
          <Route path="/registernewclass" element={<RegisterNewClass/>}/>
          <Route path="/editclass" element={<EditClass/>}/>
        </Routes>
    </div>
  );
}

export default App;
