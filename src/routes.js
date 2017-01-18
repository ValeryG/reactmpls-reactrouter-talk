import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';


import LivePlanner from './components/LifePlanner';
import Home from './components/Home';
import Songs from './components/Songs';
import About from './components/About';
import Books from './components/Books';

import Lyrics from './components/Lyrics';

export default (
    <Route path="/" component={LivePlanner}>
        <IndexRedirect to="/home" />

        <Route path="home" component={Home} />
        <Route path="songs" component={Songs}>
            <Route path=":id" component={Lyrics} />
        </Route>
        <Route path="books" component={Books} />
        <Route path="places" getComponent={
                (location, callback) => {
                    require.ensure([],
                        require => {
                            callback(null, require('./components/Places').default)
                    })
                }
            } />
        <Route path="about" component={About} />

        <Route  path="*" component={() => <div> Page not found </div>} status={404} />
    </Route>
)
