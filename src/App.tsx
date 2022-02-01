import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, AppBody, SideBar } from './components';

function App() {
  return (
    <Router>
      <>
        <Header />
        <SideBar />
        <AppBody />
        <Routes>{/* <Route path="/" ></Route> */}</Routes>
      </>
    </Router>
  );
}

export default App;
