import React from 'react';
import './header.scss';
import menuBurger from './menuBurger.svg';
import planet from './planet.svg';

const Header = _ => {
    return (
        <header className="main-header">  
            <div className="menuBurger">
                <a href="#open-menu"><img src={menuBurger}/></a>
            </div>
  
            <div className="logo">
                <p>Natural<strong>Life</strong></p>
                <img src={planet}/>
            </div>
        </header>
    );
};

export default Header;