import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

import './App.css';

export default function App() {

    return ( 
      <Router>  
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route path="/user/:id" element={<Dashboard/>}/>
        </Routes> 
    </Router> 
    );
}

