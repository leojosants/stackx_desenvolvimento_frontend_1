import React, { Component } from 'react';

class Create extends Component {
    // 1º a ser executado
    constructor(props) {
        super(props);
        this.state = {
            name: 'Leonardo',
        };
        console.log('Constructor - create');
    }

    // 2º a ser executado
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps - create');
        return null;
    }

    // ultimo a ser executado
    componentDidMount() {
        console.log('componentDidMount - create');
    }

    // 3º a ser executado
    render() {
        console.log('render - create');
        return <div>Create</div>
    };
}

export default Create;