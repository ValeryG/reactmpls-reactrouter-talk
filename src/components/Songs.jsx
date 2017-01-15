import React from 'react';

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
        return  (
            <div>
                {songs.map (song =>
                    <div style={{paddingTop: 20}} key={song.id}>
                        Title: {song.Title} <br />
                        Writen By: {song.Writer}
                    </div>
                )}
            </div>
        )
    }
});
