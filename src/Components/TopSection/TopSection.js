import React from 'react';


const TopSection = () => {
    return (
        <div className='grid lg:grid-cols-2 mx-10 md:mx-20 my-14'>
            <div className='px-5'>
                <h2 className='font-semibold text-sky-400 text-3xl pb-4 text-left'>It is Quizzes</h2>
                <p className='text-left text-slate-400 text-justify'>This article describes the use of classroom quizzes as a way of promoting
                    student learning in the Department of Geography at Oxford Brookes University.
                    Starting each class with a quiz on the previous session’s work encourages 
                    students to review their course notes ahead of each session, removes the 
                    need for any spoken review of course progress, and abets attempts to help 
                    students convert surface memorisation into deep learning through classroom 
                    discussion. Class quizzes are popular with most students, who mainly agree 
                    with the above analysis.</p>
            </div>
            <div>
                <img src="images/img.jpg" className='rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl h-72 w-full' alt="" />
            </div>
        </div>
    );
};

export default TopSection;