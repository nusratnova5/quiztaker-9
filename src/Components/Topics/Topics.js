import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Topics = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div>
            <div className='flex justify-evenly'>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic = {topic}
                ></Topic> )
            }
            </div>
        </div>
    );
};

export default Topics;