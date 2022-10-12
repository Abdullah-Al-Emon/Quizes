import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-20 py-4 shadow-lg'>
            <h1 className='text-3xl font-semibold text-blue-400'>Quizzes</h1>
            <div className='flex text-[16px]'>
                <p><Link to='home' className='mr-8 font-[500]'>Home</Link></p>
                <p><Link to='statistics' className='mr-8 font-[500]'>Statistics</Link></p>
                <p><Link to='blog' className='mr-8 font-[500]'>Blog</Link></p>
            </div>
        </div>
    );
};

export default Header;