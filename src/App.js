import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import SignUp from './Components/SignUp/SignUp';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <>
      <Navbar />
   <Routes>
   <Route exact path="/" element={<Home />}/>
   <Route path="/about" element={<About />}/>
   <Route path="/contact" element={<Contact />}/>
   <Route path="/login" element={<Login />}/>
   <Route path="/signUp" element={<SignUp />}/>
   <Route path="*" element={<ErrorPage />}/>
   </Routes>
    </>
  );
}

export default App;
