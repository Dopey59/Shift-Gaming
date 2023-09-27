import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../src/components/homepage';
import Contact from '../src/components/ContactUs';
import Faq from '../src/components/faq';




function App(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Faq />} />

        
    </Routes>
  )

}

export default App;