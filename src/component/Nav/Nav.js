import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = ()=>{
  
    return(
        <ul className="menu">
            <li>
                <Link to='/' className="item">Home page</Link>
            </li>
            <li>
                <Link to='/auth' className="item">login</Link>
            </li>
            <li>
                <Link to='/todolist' className="item">todo list</Link>
            </li>
        </ul>
    )
}

export default Nav;