import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Doctor from './components/Doctor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact Us' element={<Contact/>}/>
        <Route path='/Exper_Doctor' element={<Doctor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
