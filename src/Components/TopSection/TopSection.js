import React from 'react';
import { Link } from 'react-router-dom';


const TopSection = () => {
    return (
        <div className='grid lg:grid-cols-2 mx-8 md:mx-20 md:my-14 my-7'>
            <div className='px-5 flex flex-col'>
                <h2 className='font-semibold text-sky-400  text-4xl md:pb-7 pb-4 text-left'>It is Quizzes</h2>
                <p className='text-slate-400 text-justify md:text-left md: md:pt-3 md:text-[18px] md:pr-3'>This article describes the use of classroom quizzes as a way of promoting
                    student learning in the Department of Geography at Oxford Brookes University.
                    Starting each class with a quiz on the previous session’s work encourages
                    students to review their course notes ahead of each session, removes the
                    need for any spoken review of course progress, and abets attempts to help
                    students convert surface memorisation into deep learning through classroom
                    discussion. Class quizzes are popular with most students, who mainly agree
                    with the above analysis.</p>
                <Link to={`/cards`} className="w-40 my-5 btn btn-primary normal-case text-2xl">Quizs</Link>
            </div>
            <div>
                <img src="images/img.jpg" className='rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl lg:h-[450px] w-full' alt="" />
            </div>
        </div>
    );
};

export default TopSection;