import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../src/components/homepage';
import Contact from '../src/components/ContactUs';



function App(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        
    </Routes>
  )

}

export default App;