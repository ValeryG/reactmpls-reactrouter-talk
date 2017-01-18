import React from 'react';
import {Link as OrigLink} from 'react-router';

const Link = (props) => (<OrigLink activeStyle={{fontSize: 16, fontWeight: "bold"}} {...props} />);

export default ({children}) => (
    <div>
        <h1 className="text-center" style={{color:'red'}}>Life Planner!</h1>

        <Link to="/home" >Home</Link> {' | '}
        <Link to="/places">Places To Visit</Link> {' | '}
        <Link to="/books">Books To Read</Link> {' | '}
        <Link to="/songs">Songs to Listen</Link> {' | '}
        <Link to="/about">About</Link>
        <hr />

        {children}
    </div>
)
