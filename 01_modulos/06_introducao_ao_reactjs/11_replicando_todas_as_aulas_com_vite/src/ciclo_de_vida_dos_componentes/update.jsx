import { Component } from "react";

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Leonardo'
        }

        console.log('Constructor');
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        console.log(prevProps, prevState)
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        console.log('componentDidUpdate');
        return null;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        console.log('componentDidCatch');

    }

    changeState = () => {
        this.setState(
            { name: 'Alterado' }
        );
    };

    render() {
        console.log('render');
        return (
            <div>
                <div>Update</div>
                <button onClick={this.changeState}>Atualizar</button>
            </div>
        );
    }
}

export default Update;