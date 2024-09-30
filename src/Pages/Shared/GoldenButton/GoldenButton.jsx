import React from 'react';

const GoldenButton = ({text, children}) => {
    return (
        <button className='bg-gradient-to-r from-[#835D23] to-[#B58130] px-4 py-2 flex items-center gap-1 text-white mt-4 hover:text-black ' type="submit" value="Submit" >{text} <span className='text-xl'> {children} </span>  </button>
    );
};

export default GoldenButton;