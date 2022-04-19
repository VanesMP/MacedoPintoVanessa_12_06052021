import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

import './App.css';
//import { useEffect } from 'react';

/*const url = 'http://localhost:3000/user/:id'

fetch(url)
    .then(response => {
        console.log(response.json());
    })*/

function App() {

    return ( 
      <Router>  
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route path="/user/:id" element={<Dashboard/>}/>
        </Routes> 
    </Router> 
    );
}

export default App;

// fetch("/datas/12")
//.then((response) => console.log(response.json()));
