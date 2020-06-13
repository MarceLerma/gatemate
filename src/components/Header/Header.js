import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

import '../estilos/sass/_header.sass';


function Header (){
    return (
    <header className="Header">
        <Logo />
        <Search />
        <Nav />
    </header>

    )
}

export default Header 