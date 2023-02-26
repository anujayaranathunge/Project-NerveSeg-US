
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from './components/NavBar';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Contact} from './pages/contact';
import {Doctor} from './pages/doctorlog';
import {Patient} from './pages/patientlog';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' exact element={<Home/>}/> 
        <Route path='/about'  element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/doctorlog' element={<Doctor/>}/> 
        <Route path='/patientlog' element={<Patient/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
