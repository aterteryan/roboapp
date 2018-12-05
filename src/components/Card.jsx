import React from 'react';

const Card = ({ robot }) => {
    const { id, name, email } = robot;

    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div>
                <h3>{name}</h3>
                <p>{email}.com</p>
            </div>
        </div>
    );
};

export default Card;
