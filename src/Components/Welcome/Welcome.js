import React from 'react';
import img from './image.png.jpg'

const Welcome = () => {
    return (
        <div className='flex justify-center my-5'>
            <div className='w-3/4 bg-violet-100'>
                <div className='flex items-center '>
                <div className=''>
                    <img src={img} alt=''></img>
                </div>
                <div className=''>
                    <div className='p-5'>
                    <p className='font-bold text-4xl'>Welcome to <span className=' text-purple-700 font-bold text-4xl'>QuizTaker</span></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;