import React from 'react';

function card(props) {
    return (
      <div className={`h-2/5screen ${props.bg} w-64 border-2 rounded-lg ${props.border}`}  >
          <div className='my-4 w-24 h-24 rounded-full border-2 mx-auto border-black flex flex-col justify-center'>
             <img src={props.img} className="mx-auto"/>
          </div>
          <h1 className='text-center text-red font-medium text-xl'>{props.name}</h1>
         <h1 className="text-black text-medium text-2xl pt-10">test</h1>
      </div>
    );
  }


  
  export default card;