import React from 'react';
import Card from '../Card/Card';

const Cards = ({cards}) => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-6 md:mx-20 mt-4'>
            {
                cards.map(card => <Card card={card} key={card.id}></Card>)
            }
        </div>
    );
};

export default Cards;