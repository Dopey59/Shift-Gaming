import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../src/components/homepage';
import Contact from '../src/components/ContactUs';
import Faq from '../src/components/faq';
import GuidePc from '../src/components/guidePc';
import About from '../src/components/about';
import ComposantPc from '../src/components/composantPc';


function App(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/GuidePc" element={<GuidePc/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ComposantPc" element={<ComposantPc/>} />

    </Routes>
  )

}

export default App;