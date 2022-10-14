import React from 'react';
import Option from '../Option/Option';
import Question from '../Question/Question';


const Questions = ({ ques }) => {
    // console.log(ques)
    const { correctAnswer, options, question } = ques;
    return (
        <div className='bg-slate-200 my-8 py-3 px-8 w-[80%] mx-auto rounded-2xl '>
            <Question
                question={question}
                correctAnswer={correctAnswer}
            ></Question>
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