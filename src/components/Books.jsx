import React from 'react';

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
                <span dangerouslySetInnerHTML={{__html: text}} />
            </div>
        )
    }
});
