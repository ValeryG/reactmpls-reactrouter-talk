import React from 'react';

import placesData from '../../data/places';

export default React.createClass({

    getInitialState() {
        return {places: placesData.slice(0, 100)};
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
