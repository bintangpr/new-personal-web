import React, { useState, forwardRef } from "react";

const Button = forwardRef((props, _ref) => {
    const [Active, setActive] = useState(false);

    const seteverything = (type) => {
        setActive(!Active)
        props.getData(type) 
    }

    const defaultStyle = (styled) => {
        if(styled){
            return (`h-12 w-36 bg-[#279AF1] border rounded-md text-white`)
        } else {
            return (`h-12 w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white`)
        }
    }
    
      return (
        <button 
        id={props.type}
        className={defaultStyle(props.styled)} 
        value={props.type}
        onClick={()=> seteverything(props.type)} 
        > 
            <h1 className='text-xl font-medium text-center'>{props.type}</h1>
        </button>
      );
    })
    
    export default React.memo(Button);