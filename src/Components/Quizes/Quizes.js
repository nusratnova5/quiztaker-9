import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data.questions;
    console.log(quizes);
    return (
        <div className=''>
            {
                quizes.map( quiz => <Quiz
                    key={quiz.id}
                    quiz = {quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizes;