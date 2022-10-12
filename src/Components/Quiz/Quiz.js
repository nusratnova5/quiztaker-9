import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;

    const clickedEye = () => {
        alert(`right ans is ${correctAnswer}`);
    }

    return (
        <div className='flex justify-center'>
            <div className='my-2  bg-violet-500 w-3/4 p-2 '>
                <div className=' '>
                    <div className='flex justify-between'>
                        <div>{question}</div>
                        <div onClick={clickedEye} ><EyeIcon className="h-6 w-6" /></div>
                    </div>
                </div>
                <form className='grid grid-cols-2 bg-violet-300 '>
                    {
                        options.map(option => <Option
                            option={option}
                            correctAnswer={correctAnswer}
                        ></Option>)
                    }
                </form>
            </div>
        </div>
    );
};

export default Quiz;