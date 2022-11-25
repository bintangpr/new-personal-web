import React, { useState, forwardRef } from "react";

const Button = forwardRef((props, _ref) => {
    const seteverything = (type) => {
        props.getData(type) 
    }
    
      return (
        <button 
        id={props.type}
        className = {props.styled}
        value={props.type}
        onClick={()=> seteverything(props.type)} > 
            <h1 className='text-lg md:text-xl font-medium text-center'>{props.type}</h1>
        </button>
      );
    })
    
    export default React.memo(Button);