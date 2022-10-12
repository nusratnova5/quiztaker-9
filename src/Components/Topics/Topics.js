import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Topics = () => {
    const topics = useLoaderData().data;
    // console.log(topics);
    return (
        <div>
            <h2>This is Topics</h2>
            <div className='flex'>
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