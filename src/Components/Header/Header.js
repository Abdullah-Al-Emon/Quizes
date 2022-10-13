import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between  md:px-20 py-4 shadow-lg'>
            <h1 className='text-3xl font-semibold text-blue-400'>Quizzes</h1>
            <div className='md:flex mt-3 text-[16px]'>
                <p><NavLink 
                to='home' 
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide md:mr-8 text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide md:mr-8 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
                >Home</NavLink></p>
                <p><NavLink 
                to='statistics' 
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide md:mr-8 text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide md:mr-8 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
                >Statistics</NavLink></p>
                <p className=''><NavLink 
                to='blog' 
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide md:mr-8 text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide md:mr-8 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
                >Blog</NavLink></p>
            </div>
        </div>
    );
};

export default Header;