import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';


import LivePlanner from './components/LifePlanner';
import Home from './components/Home';
import Songs from './components/Songs';
import About from './components/About';
import Places from './components/Places';
import Books from './components/Books';

export default (
    <Route path="/" component={LivePlanner}>
        <IndexRedirect to="/home" />

        <Route path="home" component={Home} />
        <Route path="songs" component={Songs} />
        <Route path="books" component={Books} />
        <Route path="places" component={Places} />
        <Route path="about" component={About} />
    </Route>
)
