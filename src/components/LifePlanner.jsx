import React from 'react';

import Home from './Home';
import Songs from './Songs';
import About from './About';
import Places from './Places';
import Books from './Books';

export default React.createClass({

    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    },
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    },

    render() {

            let {route= ''} = this.state;

        return (
            <div>
                <h1 className="text-center" style={{color:'red'}}>Life Planner!</h1>
                <a href="#">Home</a> {' | '}
                <a href="#/places">Places To Visit</a> {' | '}
                <a href="#/books">Books To Read</a> {' | '}
                <a href="#/songs">Songs to Listen</a> {' | '}
                <a href="#/about">About</a>

                <hr />

                {route == ""  && (<Home />)}
                {route == "/places"  && (<Places />)}
                {route == "/books"  && (<Books />)}
                {route == "/songs"  && (<Songs />)}
                {route == "/about"  && (<About />)}

            </div>
        )


    }
})
