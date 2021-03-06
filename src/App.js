import React from "react";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/rooms' element={<Rooms />} />
        <Route exact path='/rooms/:slug' element={<SingleRoom />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
