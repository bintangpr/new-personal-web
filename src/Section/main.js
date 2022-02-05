import React from 'react';
import {ReactComponent as ProfilePic} from '../img/Profile.svg';
import {ReactComponent as ArrowScroll} from '../img/ArrowScroll.svg';
import {ReactComponent as Bubble} from '../img/Bubble.svg';

function main() {
    return (
      <div className='h-screen bg-white' >
          <div className="w-4/5 mx-auto h-screen  flex flex-col justify-around">
            <div>
              <h1 className="text-3xl font-bold text-red text-center my-4">Designer , Front-end Developer & Human Resource Ethusiast</h1>
              <h1 className="text-3xl text-black text-center my-4">I design & code simple and clean. I also love what i do</h1>
            </div>            
            <div>
              <ProfilePic className='mx-auto'/>
            </div>
            <div>
              <ArrowScroll className='mx-auto' />
            </div>
          </div>
          <Bubble className='absolute bottom-0 right-10'/>
      </div>
    );
  }
  
  export default main;