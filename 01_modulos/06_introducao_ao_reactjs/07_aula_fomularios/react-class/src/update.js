import React, { Component } from 'react';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Leonardo' };
        console.log('Constructor - update');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate - update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate - update');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate - update');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps - update');
        return null;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount - update');
    };

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError - update');
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch - update');
    }

    changeState = () => {
        this.setState({ name: 'João' });
    }

    render() {
        console.log('render - update');
        return (
            <div>
                <div>Update</div>
                <button onClick={this.changeState}>Atualizar</button>
            </div>
        );
    };
}

export default Update;