import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center' >
            <div className=' w-3/4 '>
            <div className='bg-violet-300 text-start m-10 p-5 '>
                <p className='font-bold'>1.What are the purposes of react router?</p>
                <p><span className='font-bold'>Ans: </span>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='bg-violet-300 text-start m-10 p-5 '>
                <p className='font-bold'>2.How does context API work</p>
                <p><span className='font-bold'>Ans: </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='bg-violet-300 text-start m-10 p-5 '>
                <p className='font-bold'>3.What is useRef in react</p>
                <p><span className='font-bold'>Ans: </span>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
            </div>
            
        </div>
    );
};

export default Blogs;