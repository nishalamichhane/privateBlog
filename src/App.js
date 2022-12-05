import React, { useState } from 'react';
import Nav from "./components/Nav/Nav"
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Blogoverzicht from "./pages/Blogoverzicht/Blogoverzicht";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/Not Found/NotFound";



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [auth, setAuth ] = useState(false);

  return (
    <>
      <div>
        <Nav auth={auth} setAuth={setAuth}/>
        <Routes>
          <Route path="/" element = {<Home/> } />
          <Route path="/Login" element = {<Login setAuth={setAuth}/>}/>
          <Route path="/Blogoverzicht" element = { auth ? <Blogoverzicht/> : <Navigate to="/"/> } />
          <Route path="/Blog/:id" element = { <Blog/> } />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
