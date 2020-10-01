import React from 'react';
import './sidebar.scss';
import closeIcon from './close.svg';

const Sidebar = _ => {
    return (
        <aside id="open-menu">
            <a href="#"><img src={closeIcon}/></a>
            <nav>
                <a href="#">About Us</a>
                <a href="#">How to take care of the planet</a>
                <p>Seasons:</p>
                <a href="#">Winter</a>
                <a href="#">Spring</a>
                <a href="#">Summer</a>
                <a href="#">Autumn</a>
            </nav>
            <p className="additional-text">Help us take care of the planet, 
                the most important place in our lives!</p>
        </aside>
    );
};

export default Sidebar;