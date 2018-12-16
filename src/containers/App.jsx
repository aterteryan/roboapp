import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};
class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots()
    }

    filteredRobots() {
        const { robots } = this.props;
        const { searchField } = this.props;

        return robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    }

    render() {
        return this.props.isPending ?
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