import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../src/components/homepage';


function App(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        
    </Routes>
  )

}

export default App;