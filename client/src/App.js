import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../src/components/homepage';
import Contact from '../src/pages/ContactUs';
import Faq from '../src/pages/faq';
import GuidePc from '../src/pages/guidePc';
import About from '../src/pages/about';
import ComposantPc from '../src/pages/composantPc';
import Apidata from '../src/pages/apidata';


function App(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/GuidePc" element={<GuidePc/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ComposantPc" element={<ComposantPc/>} />
        <Route path="/RektGaming" element={<Apidata/>} />

    </Routes>
  )

}
export default App;