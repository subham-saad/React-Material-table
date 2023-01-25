import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from "react-dom/client";
 import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnquiryManagement from './components/EnquiryManagement';
import EnquiryTable from './components/EnquiryTable';
function App() {
  return (
    <div className="App">
    
    <EnquiryManagement/>
    </div>
  );
}

export default App;
