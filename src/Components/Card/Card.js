import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { logo, name, id } = card
    // console.log(card)
    return (
        <div>
            <div className="card card-compact w-60 bg-base-50  shadow-xl">
                <figure><img className='h-48 bg-blue-100 w-full' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions mx-1 justify-between items-center">
                        <h2 className="card-title">{name}</h2>
                        <Link to={`/card/${id}`} className="btn btn-primary">Practice</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;