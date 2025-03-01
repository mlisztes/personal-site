import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Header from './Header';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Welcome />
            </BrowserRouter>
        </div>
    );
};

export default App;