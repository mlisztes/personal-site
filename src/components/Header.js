import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div>
            <Link to="/">
                <div className="logo">M</div>
            </Link>
        </div>
    );
};

export default Header;