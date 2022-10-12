import React from 'react';
import { toast } from 'react-toastify';

const Option = ({option, correctAnswer}) => {
    
    const clickedOption = () =>{
        // console.log(correctAnswer);
        console.log(option);
        if(option === correctAnswer){
            toast("Right!");
        }
        else{
            toast("Wrong!");
        }
    }

    return (
        <lebel onClick={clickedOption} className='radio-inline'>
            <input type='radio' name='optradio'/>
            {option}
        </lebel>
    );
};

export default Option;