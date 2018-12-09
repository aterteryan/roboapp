import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    conponentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.error) {
            return <h1>Opps, something went wrong :(</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;