import React from 'react';
import {ReactComponent as ProfilePic} from '../img/Profile.svg';
import {ReactComponent as Bubble} from '../img/Bubble.svg';
import { Link, animateScroll as scroll } from "react-scroll";


function main() {
    return (
      <div className='bg-white'>
        <div className='w-4/5 mx-auto h-screen'>
          <div className='mt-16'>
            <h1 className='text-xl sm:text-2xl font-medium text-blue text-center '>I'am a <span className='text-xl sm:text-2xl font-medium text-red'>Frontend Developer</span></h1>
            <h1 className='text-xl sm:text-2xl font-medium text-black text-center'>I design & code simple and clean. I also love what i do</h1>
          </div>
          <div className='my-4 sm:my-8 xl:my-16 '>
                <ProfilePic className='mx-auto scale-75 xl:scale-125 sm:scale-100  '/>  
          </div>
          <div className='mt-4 sm:mt-8 xl:mt-16'>
            <h1 className='text-xl sm:text-2xl font-semibold text-blue text-center'>Muhammad Bintang Prabowo</h1>
          </div>
          <div className='mt-8 flex items-center'>
            <button className='mx-auto h-12 w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white'>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              <h1 className='my-auto text-xl font-medium text-center'>Learn More</h1>
            </Link>
            </button>
          </div>
          <div>
          <Bubble className="absolute bottom-0 right-0 sm:right-6 scale-75 md:scale-90 xl:scale-100 hidden md:block"/>
          </div>
          <Bubble className="absolute bottom-0 right-0 scale-75 md:scale-90 xl:scale-100 hidden sm:block md:hidden"/>
        </div>
      </div>
    );
  }
  
  export default main;