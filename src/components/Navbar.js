import React from 'react';
// import {link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a className='navbar-brand collapse navbar-collapse' href="/">HOME</a>
                <a className='navbar-brand collapse navbar-collapse' href="/project/src/components/Form.js">Addsong</a>
            </nav>
        </div>
    );
};
export default Navbar;