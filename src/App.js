import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Card from './card/card';
import SelectColor from './color selector/Select_color';
import Counter from './counter/counter';
import PasswordGenerator from './PasswordGenerator/PasswordGenerator';

function App() {
  return (
    <Router>
      <div  className="flex justify-around w-screen bg-slate-300 p-10 ">
        
          
           <>
           <Link to="/card">Card</Link>
           </> 
            <>
            <Link to="/color-selector">Select_color</Link>
            </>
            <>
            <Link to="/PasswordGenerator">PasswordGenerator</Link>
            </>
            <>
            <Link to="/counter">Counter</Link>
            </>
        
      </div>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/color-selector" element={<SelectColor />} />
        <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
