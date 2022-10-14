import React from 'react';
import Option from '../Option/Option';
import Question from '../Question/Question';


const Questions = ({ ques }) => {
    // console.log(ques)
    const { correctAnswer, options, question } = ques;
    return (
        <div className='bg-slate-200 my-8 md:py-3 py-1 md:px-8 px-4 w-[80%] mx-auto rounded-2xl '>
            <Question
                question={question}
                correctAnswer={correctAnswer}
            ></Question>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-2 pb-3'>
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