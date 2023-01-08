import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
