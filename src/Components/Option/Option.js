import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {
    const notify = () => toast.success(`🦄 Wow so easy!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifys = () => toast.error('🦄 Rong Answer!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const handleRigth = () => {
        if (option === correctAnswer) {
            notify()
            console.log('True')
        } else {
            notifys()
        }
    }

    return (
        <div className='bg-blue-300 my-2 px-2 py-3 rounded-xl font-semibold'>
            <label onClick={() => handleRigth()} className='pl-2  cursor-pointer flex items-center' >
                <input type="checkbox" className=" checkbox" />
                {option}
            </label>
            <ToastContainer />
        </div>
    );
};

export default Option;