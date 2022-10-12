import React from 'react';

const Option = ({option, correctAnswer}) => {
    const clickedOption = () =>{
        if(option === correctAnswer){
            alert('right');
        }
        else{
            alert('wrong');
        }
    }
    return (
        <lebel className='radio-inline'>
            <input onClick={clickedOption} type='radio' name='optradio'/>
            {option}
        </lebel>
    );
};

export default Option;