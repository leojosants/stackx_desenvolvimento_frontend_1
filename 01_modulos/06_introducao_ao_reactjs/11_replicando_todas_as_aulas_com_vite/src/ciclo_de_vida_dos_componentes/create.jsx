import { Component } from 'react';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Leonardo'
        }

        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <div>Create</div>
        );
    }
}

export default Create;