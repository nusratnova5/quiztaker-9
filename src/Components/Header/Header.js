import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
          <div className='bg-purple-100 p-4 mb-5 flex justify-between items-center'>
            <div className=' text-purple-700 font-bold text-4xl'>
             <p className=''><Link to='/'>QuizTaker</Link></p>
           </div>
           <div>
             <ul className='md:flex'>
                <li className='mr-2  text-purple-700 font-bold'><Link to='/topics'>Topics</Link></li>
                <li className='mr-2  text-purple-700 font-bold'><Link to='/statistics'>Statistics</Link></li>
                <li className='mr-2  text-purple-700 font-bold'><Link to='/blogs'>Blogs</Link></li>
             </ul>
           </div>  
          </div>
        </nav>
    );
};

export default Header;