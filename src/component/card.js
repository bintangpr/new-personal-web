import React from 'react';

function card(props) {
  var techlist
  if (props.techlist){
     techlist = props.techlist
  } else {
    techlist = ["React","JavaScript"]
  }
  const listItems = techlist.map((techlist, index) =>
  <h1 key={index} className="text-black text-lg md:text-xl font-normal">{techlist}</h1>
);
    return (
      <div className={`mx-auto my-2 sm:my-0 sm:mx-0 h-80 sm:h-3/5screen md:h-2/5screen ${props.bg} w-64 sm:w-72 border-2 rounded-lg ${props.border}`}  >
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