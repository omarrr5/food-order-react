import React from 'react'
import Logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={Logo} alt="Resturant Logo"/>
            <h1>React Food</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
    </header>
  )
}

export default Header