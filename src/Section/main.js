import React from 'react';
import {ReactComponent as ProfilePic} from '../img/Profile.svg';
import {ReactComponent as ArrowScroll} from '../img/ArrowScroll.svg';
import Navbar from '../component/navbar';

function main() {
    return (
      <div className='bg-white'>
        <Navbar />
        <div className='flex flex-col justify-around bg-white h-screen'>
          <div className="w-4/5 mx-auto h-screen flex justify-around" >
            <div className='my-auto '>
                <ProfilePic className='mx-auto scale-125 '/>  
            </div>
            <div className='my-auto'>
                <h1 className="text-xl font-medium text-black my-4">Hello. . .</h1>
                <h1 className="text-xl font-medium text-black my-4">Welcome to My page</h1>
                <div>
                  <h1 className="text-xl font-medium text-black my-4">My name is</h1>
                  <h1 className="text-xl font-medium text-black my-4">Muhammad Bintang Prabowo</h1>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-red my-4">A Frontend Developer</h1>
                </div>
                <div>
                  <h1 className="text-xl font-medium text-black my-4">Im from </h1>
                  <h1 className="text-xl font-medium text-black my-4">South Tangerang, Indonesia</h1>
                </div>
            </div>
          </div>
          <div>
              <ArrowScroll className='mx-auto ' />
            </div>
        </div>
      </div>
    );
  }
  
  export default main;