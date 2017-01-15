import React from 'react';

export default React.createClass({

    _fetchSong(id) {
        this.setState({text:'', id: ''});
        fetch(`/data/${id}.txt`).then(res =>res.text()).then(text => {
            this.setState({text, id});
        });
    },

    componentDidMount() {
       this. _fetchSong(this.props.params.id);
    },

    componentWillReceiveProps(newProps) {
        this. _fetchSong(newProps.params.id);
    },

    getInitialState() {
        return {text: ""};
    },

    render() {
        let {text, id} = this.state;
        return (
            <pre key={id}>
                {text}
            </pre>
    )}
})
