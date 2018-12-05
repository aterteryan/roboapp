import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = props => {
    return <div className='tc'>
        <h1>ROBOAPP</h1>
        <SearchBox />
        <CardList />
    </div>;
}

export default App;