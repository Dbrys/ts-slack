import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
