import React, { useState } from 'react';
import {FaShoppingCart,FaBars  } from 'react-icons/fa';
import { FaCircleXmark } from "react-icons/fa6";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({choice}) => {
    const [isOpen , setIsOpen]  = useState(false);
  return (
    <div className='header'>
        <div className="logo">
            <Link to="/">Shopping</Link>
        </div>
        <div className="menu" onClick={()=>setIsOpen(!isOpen)}>
             {
                isOpen?<FaCircleXmark size={30}/>:<FaBars size={30}/>
             }
        </div>
        <nav>
            <ul className={isOpen? 'open' :'navbar'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li>
                    <Link to='/cart'>
                    <FaShoppingCart size={25} color='white'/>
                    <span>{choice.length=== 0 ? 0 :choice.length}</span>
                    </Link>
                    </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;