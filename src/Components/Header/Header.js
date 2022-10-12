import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
          <div className='bg-purple-100 p-4 mb-5 flex justify-between items-center'>
            <div className=' text-purple-700 font-bold text-lg '>
             <p >QuizTaker</p>
           </div>
           <div>
             <ul>
                <li><Link to='/topics'>Topics</Link></li>
                <li><Link to='/statistics'>Statistics</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
             </ul>
           </div>  
          </div>
        </nav>
    );
};

export default Header;