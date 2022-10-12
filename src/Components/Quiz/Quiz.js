import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    return (
        <div>
            <div>
                <div>{question}</div>
                <div><EyeIcon className="h-6 w-6"/></div>
            </div>
            <form className='grid grid-cols-2'>
            {
                options.map( option => <Option
                    option = {option}
                    correctAnswer = {correctAnswer}
                ></Option>)
            }
            </form>
        </div>
    );
};

export default Quiz;