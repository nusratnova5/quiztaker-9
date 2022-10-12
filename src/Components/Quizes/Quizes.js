import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data;
    const {questions,name}=quizes;

    console.log(quizes);
    return (
        <div className=''>
            <div>
                Quizes of {name}
            </div>
            <div>
            {
                questions.map( quiz => <Quiz
                    key={quiz.id}
                    quiz = {quiz}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Quizes;