import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, id } = topic;
    // console.log(id);
    return (
        <div >
            
                <div className='mx-2 bg-violet-700 text-white justify-evenly'>
                    <div className='bg-violet-100'><img className='w-40' src={logo} alt=''></img></div>
                    <div className='flex justify-between p-2'>
                        <div className='font-bold'>{name}</div>
                        <div><Link to={`/topic/${id}`}><button className='font-bold'>Select</button></Link></div>
                    </div>
                </div>
            
        </div>
    );
};

export default Topic;