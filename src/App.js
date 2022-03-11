import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Keyboard from './components/Keyboard';

const App=()=>{
  
  return(
    <div>
     <center><h1>Musingly</h1></center>
     <center><Keyboard></Keyboard></center>
    </div>
  )
}
export default App;