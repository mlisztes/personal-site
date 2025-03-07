import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div className='menu'>
            <ul>
                <Link to="/"><li>Válogatott fordítások</li></Link>
                <li>Lisztes Éva (1989)</li>
            </ul>
        </div>
    );
};

export default Header;