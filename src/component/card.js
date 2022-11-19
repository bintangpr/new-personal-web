import React from 'react';

function card(props) {
  var techlist
  if (props.techlist){
     techlist = props.techlist
  } else {
    techlist = ["React","JavaScript"]
  }
  const listItems = techlist.map((techlist) =>
  <h1 className="text-black text-xl font-normal">{techlist}</h1>
);
    return (
      <div className={`h-2/5screen ${props.bg} w-72 border-2 rounded-lg ${props.border}`}  >
          <div className='my-4 w-24 h-24 rounded-full border-2 mx-auto border-black flex flex-col justify-center'>
             <img src={props.img} alt="icon" className="mx-auto"/>
          </div>
          <h1 className='text-center text-red font-medium text-xl'>{props.name}</h1>
          <div className='m-5 flex gap-4 flex-wrap text-center justify-center'>
            {listItems}
          </div>
         
      </div>
    );
  }
  
  export default card;