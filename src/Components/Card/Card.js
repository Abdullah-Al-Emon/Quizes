import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { logo, name } = card
    console.log(card)
    return (
        <div>
            <div className="card card-compact w-[280px]  bg-base-300 shadow-xl">
                <figure><img className='h-48 w-full' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions mx-1 justify-between items-center">
                        <h2 className="card-title">{name}</h2>
                        <Link className="btn btn-primary">Start Practice</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;