import React from 'react';
import {ReactComponent as ProfilePic} from '../img/Profile.svg';
import {ReactComponent as Bubble} from '../img/Bubble.svg';


function main() {
    return (
      <div className='bg-white'>
        <div className='w-4/5 mx-auto h-screen'>
          <div className='mt-16'>
            <h1 className='text-2xl font-medium text-blue text-center'>I'am a <span className='text-2xl font-medium text-red'>Frontend Developer</span></h1>
            <h1 className='text-2xl font-medium text-black text-center'>I design & code simple and clean. I also love what i do</h1>
          </div>
          <div className=' '>
                <ProfilePic className='mx-auto my-16 scale-125 '/>  
          </div>
          <div className='mt-16'>
            <h1 className='text-2xl font-semibold text-blue text-center'>Muhammad Bintang Prabowo</h1>
          </div>
          <div className='mt-8 flex items-center'>
            <button className='mx-auto h-12 w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white'>
              <h1 className='my-auto text-xl font-medium text-center'>Learn More</h1>
            </button>
          </div>
          <div>
          <Bubble className="absolute bottom-0 right-6"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default main;