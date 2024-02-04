import React, { useState } from 'react';
import {FaShoppingCart,FaBars ,FaCross } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen , setIsOpen]  = useState(false);
  return (
    <div className='header'>
        <div className="logo">
            <Link to="/">Shopping</Link>
        </div>
        <div className="menu" onClick={()=>setIsOpen(!isOpen)}>
             {
                isOpen?<FaCross size={30}/>:<FaBars size={30}/>
             }
        </div>
        <nav>
            <ul className={isOpen? 'open' :'navbar'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li>
                    <Link to='/cart'>
                    <FaShoppingCart size={25} color='white'/>
                    </Link>
                    </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;