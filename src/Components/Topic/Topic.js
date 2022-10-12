import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, id } = topic;
    return (
        <div className='mx-2'>
            <div><img className='w-40' src={logo} alt=''></img></div>
            <div className='flex justify-between'>
                <div>{name}</div>
                <div><Link to={`${id}`}><button>Go</button></Link></div>
            </div>
        </div>
    );
};

export default Topic;