import React from 'react'
import Logo from '../assets/logo.jpg';
import Button from './UI/Button';

const Header = () => {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={Logo} alt="Resturant Logo"/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textonly>Cart (0)</Button>
        </nav>
    </header> 
  )
}

export default Header