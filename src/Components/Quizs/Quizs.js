import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizs = () => {
    const quizs = useLoaderData().data;
    const { name, questions } = quizs;
    return (
        <div className='my-9'>
            <h2 className='text-3xl font-semibold text-blue-400'>This is {name} Quiz</h2>
            <div>
                {
                    questions.map(ques => <Questions ques={ques} key={ques.id}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quizs;