import React from 'react'
import logo from '../../assests/images/logo.png'
import './header.css'

function Header(){
    return(
        <header className='header'>
            <div className='header__logo'>
                <a href="/">
                    <img src={logo} className='header__image' alt="Meme Generator - KrishnaSahu.in" />
                </a>
                <h2>Meme Generator</h2>
            </div>
            <div className='header__links'>
                <p><a href="https://krishnasahu.in/" target="_blank">/Home</a></p>
                <p><a href="https://krishnasahu.in/" target="_blank">/Res</a></p>
                <p><a href="https://krishnasahu.in/" target="_blank">/SourceCode</a></p>
            </div>
        </header>
    )
}

export default Header