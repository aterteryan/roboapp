import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: event => dispatch(setSearchField(event.target.value))
    };
};
class App extends Component {
    constructor() {
        super();
        this.state = { robots: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    filteredRobots() {
        const { robots } = this.state;
        const { searchField } = this.props;

        return robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    }

    render() {
        return !this.state.robots.length ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f1'>ROBOAPP</h1>
                <SearchBox search={this.props.onSearch} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filteredRobots()} />
                    </ErrorBoundary>
                </Scroll>
            </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);