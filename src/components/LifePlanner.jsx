import React from 'react';
import {Link} from 'react-router';

export default ({children}) => (
    <div>
        <h1 className="text-center" style={{color:'red'}}>Life Planner!</h1>

        <Link to="home">Home</Link> {' | '}
        <Link to="places">Places To Visit</Link> {' | '}
        <Link to="books">Books To Read</Link> {' | '}
        <Link to="songs">Songs to Listen</Link> {' | '}
        <Link to="about">About</Link>

        <hr />

        {children}
    </div>
)
