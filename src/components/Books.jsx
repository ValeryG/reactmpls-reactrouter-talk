import React from 'react';

import Helmet from 'react-helmet';


export default React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {
        fetch("/data/books.json").then(res =>res.json())
            .then(books => this.setState(books));
    },

    render() {
        let {text = ''} = this.state;
        return  (

            <div>
                <Helmet
                    script={[
                        {src:"https://nthitz.github.io/turndownforwhatjs/tdfw.js"}

                    ]}
                />


                <span dangerouslySetInnerHTML={{__html: text}} />
            </div>
        )
    }
});
