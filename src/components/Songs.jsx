import React from 'react';
import {Link} from 'react-router';

export default React.createClass({

    getInitialState() {
        return {songs:[]};
    },

    componentDidMount() {
        fetch("/data/songs.json").then(res =>res.json()).then(songs => {
            this.setState({songs});
        });
    },

    render() {
        let {songs = []} = this.state;
        debugger;
        return  (
            <div className="row">
                <div className="col-md-6">

                    {songs.map (song =>
                        <div style={{paddingTop: 20}} key={song.id}>
                            <Link to={`/songs/${song.id}`}>
                                Title: {song.Title} <br />
                                Writen By: {song.Writer}
                            </Link>
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    {this.props.children}
                </div>
            </div>
        )
    }
});
