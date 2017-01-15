import React from 'react';

export default React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {
        fetch("/api/home").then(res =>res.json()).then(homeData => {
            this.setState(homeData);
        });
    },

    render() {
        let {songs, places} = this.state;
        return  (
            <div>
                {songs && (
                    <div style={{paddingTop: 40}}>
                        Total Songs To Listen: {songs.total}<br />
                        Next ext Song To Listen: {songs.next}
                    </div>
                )}

                {places && (
                    <div style={{paddingTop: 40}}>
                        Total Places To Visit: {places.total} <br />
                        Next Place  To Visit: {places.next.name} ({places.next.address})
                    </div>
                )}

            </div>
        )
    }
});
