import React from 'react';
import {Link, Navigate, NavLink} from "react-router-dom";

import './Nav.css';
import Blogoverzicht from "../../pages/Blogoverzicht/Blogoverzicht";
const Nav = ( { auth, setAuth } ) => {
    return (
        <>
          <nav className="navbar">
              <ul>
                  <li>
                      <NavLink to ="/">Home</NavLink>
                  </li>
                  <li>
                      <NavLink to ="/Login">Login</NavLink>
                  </li>
                  <li>
                      <NavLink to ="/Blogoverzicht">
                          { auth ? "Blog Overzicht" : "" }

                      </NavLink>
                  </li>
                  {auth && <li>
                      <button type="button"
                              onClick = { () => { setAuth(false); } } >
                          Logout
                      </button>
                  </li>}
                  {/*<li>*/}
                  {/*    <button type="button"*/}
                  {/*            onClick = { () => { setAuth(true); } } >*/}
                  {/*        Login*/}
                  {/*    </button>*/}
                  {/*</li>*/}

              </ul>
          </nav>
        </>
    );
};

export default Nav;