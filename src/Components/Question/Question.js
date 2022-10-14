import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question, correctAnswer }) => {
    const notify = () => toast.success(`${correctAnswer}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleAddToast = () => {
        notify()
    }
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-[17px] font-semibold py-4 text-gray-700'> {question}
            </h3>
            <div>
                <button onClick={() => handleAddToast()}>
                    <EyeIcon className='inline h-6 w-6 text-blue-500'></EyeIcon>
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Question;