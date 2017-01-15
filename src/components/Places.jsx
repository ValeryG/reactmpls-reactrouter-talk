import React from 'react';
export default React.createClass({

    getInitialState() {
        return {places:[]};
    },

    componentDidMount() {
            fetch("/api/places?n=100").then(res =>res.json())
                    .then(places => this.setState({places}));
    },


    render() {
        let {places = []} = this.state;
        return  (
            <div>
                {places.map(place =>
                    <div style={{padcdingTop: 20}} key={place.id}>
                        Name: {place.name} <br />
                        Address: {place.address}
                    </div>
                )}
            </div>
        )
    }
});
