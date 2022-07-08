import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return(
        <div className='cell'>
            <div className='welcome message'>
                <h2>Hi, my name is Mónika Lisztes and I'm an art manager and heritage professional.</h2>
                <p className='guiding text'>Learn more about me</p>
                <p className='guiding text'>Learn more about my projects</p>
                <p className='guiding text'>Contact me at lisztesmoni _at_ gmail.com</p>
            </div>
        </div>
    );
}

export default Welcome;