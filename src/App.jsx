import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = { searchValue: '', robots };
    }

    onSearch = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    filteredRobots() {
        const { robots, searchValue } = this.state;
        
        return robots.filter(robot => robot.name.toLowerCase().includes(searchValue.toLowerCase()));
    }

    render() {
        return <div className='tc'>
            <h1>ROBOAPP</h1>
            <SearchBox search={this.onSearch} />
            <CardList robots={this.filteredRobots()} />
        </div>;
    }
}

export default App;