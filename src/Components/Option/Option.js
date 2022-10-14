import React from 'react';

const Option = ({ option, correctAnswer}) => {
    const handleRigth = () => {
        if(option === correctAnswer){
            console.log('ture')
        }else{
            console.log('false')
        }
    }
    
    return (
        <div className='bg-blue-300 my-2 px-2 py-3 rounded-xl font-semibold'>
            <label onClick={() => handleRigth()}  className='pl-2  cursor-pointer flex items-center' >
            <input  type="checkbox" className=" checkbox"/>
                {option}</label>
        </div>
    );
};

export default Option;