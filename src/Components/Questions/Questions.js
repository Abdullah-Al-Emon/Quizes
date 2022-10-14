import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ques}) => {
    // console.log(ques)
    const {correctAnswer, options, question} = ques; 
    return (
        <div className='bg-slate-200 my-8 py-3 px-8 w-[80%] mx-auto rounded-2xl '>
            <div className='flex justify-between items-center'>
            <h3 className='text-[17px] font-semibold py-4 text-gray-700'> {question}
            </h3>
            <button>
            <EyeIcon className='inline h-6 w-6 text-blue-500'></EyeIcon>
            </button>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-3'>
                {
                    options.map(option => <Option 
                        option={option} 
                        correctAnswer={correctAnswer}
                        key={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Questions;