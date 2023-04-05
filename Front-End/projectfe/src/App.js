
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from './components/NavBar';
import Footer from './components/Footer';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Contact} from './pages/contact';
import {Doctor} from './pages/doctorlog';
import {Patient} from './pages/patientlog';
import { Doctorreg } from './pages/doctor-reg';
import { Patientreg } from './pages/patient-reg';
import {ImageUploadForm} from './pages/insertimageus';
import {PatientProfilesDoctorView} from './pages/PatientProfilesDoctorView';
import {PatientProfilePatientView} from './pages/PatientProfilePatientView';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' exact element={<Home/>}/> 
        <Route path='/about'  element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/doctorlog' element={<Doctor/>}/> 
        <Route path='/patientlog' element={<Patient/>}/>
        <Route path='/doctor-reg' element={<Doctorreg/>}/>
        <Route path='/patient-reg' element={<Patientreg/>}/>
        <Route path='/insertimageus' element={<ImageUploadForm/>}/>
        <Route path='/PatientProfilesDoctorView' element={<PatientProfilesDoctorView/>}/>
        <Route path='/PatientProfilePatientView' element={<PatientProfilePatientView/>}/>
        
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
