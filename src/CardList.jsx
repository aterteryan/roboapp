import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = props => {
    return <div>
        {robots.map(robot => <Card key={robot.id} robot={robot} />)}
    </div>;
};

export default CardList;