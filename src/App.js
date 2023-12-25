import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Doctor from './components/Doctor';
import Single_illness from './components/sub_components/Single_illness';
import Map from './components/google_map/Map';
import Public from './components/hospital/Public';
import Private from './components/hospital/Private';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact Us' element={<Contact/>}/>
        <Route path='/Exper_Doctor' element={<Doctor/>}/>
        <Route path='/Single_illness/:id' element={<Single_illness/>}/>
        <Route path='/Single_illness/google map/:id' element ={<Map/>}/>
        <Route  path='/Public Hospital' element={<Public/>}/>
        <Route path='/Private Hospital' element={<Private/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
