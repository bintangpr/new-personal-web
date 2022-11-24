import React from 'react';
import Rentrips from '../img/Rentrips.svg'
import Lingoschool from '../img/Lingoschool.svg'
import Ovent from '../img/Ovent.svg'
import BCC from '../img/BCC.svg'
import DSI from '../img/DSI.svg'
import Clearvis from '../img/Clearvis.svg'
import GithubClone from '../img/GithubClone.svg'


function porto(props){
    const check = (image) =>{
        switch (image) {
            case "Rentrips" :
                return(Rentrips);
            case "Lingoschool" :
                return(Lingoschool);
            case "Ovent":
                return(Ovent);
            case "BCC":
                return(BCC);
            case "DSI":
                return(DSI);
            case "Clearvis":
                return(Clearvis);
            case "GithubClone":
                return(GithubClone);
            default:
                return(Rentrips);
        }   
    }

    return(
        <div>
            {/* WEB AND TABLET SIZE */}
            <div className='hidden sm:flex justify-between my-4'>
                <div id='Pict' className='w-1/3 h-48 rounded-2xl'>
                    <img src={check(props.img)} className={props.size} alt="portofolio"  />
                    {console.log(props.img)}
                </div>
                <div id='information' className='w-7/12 h-48'>
                    <h1 id='Title' className='text-lg md:text-xl font-medium text-black'>{props.projectName}</h1>
                    <div className='my-2 w-32 h-2 bg-blue'/>
                    <p className='text-base md:texl-lg font-normal'>{props.description}</p>
                </div>
            </div>
            {/* mobile size */}
            <div className='block sm:hidden'>
                <div id='Pict' className='w-42 h-48 rounded-2xl'>
                    <img src={check(props.img)} className={props.size} alt="portofolio"  />
                </div>
                <div id='information' className='w-42 mb-4'>
                    <h1 id='Title' className='text-lg md:text-xl font-medium text-black'>{props.projectName}</h1>
                    <div className='my-2 w-32 h-2 bg-blue'/>
                    <p className='text-base md:texl-lg font-normal'>{props.description}</p>
                </div>
            </div>
        </div>
        
    )
}

export default porto;