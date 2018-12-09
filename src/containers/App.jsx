import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
    constructor() {
        super();
        this.state = { searchValue: '', robots: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearch = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    filteredRobots() {
        const { robots, searchValue } = this.state;

        return robots.filter(robot => robot.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    render() {
        return !this.state.robots.length ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f1'>ROBOAPP</h1>
                <SearchBox search={this.onSearch} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filteredRobots()} />
                    </ErrorBoundary>
                </Scroll>
            </div>;
    }
}

export default App;