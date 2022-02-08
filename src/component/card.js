import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';
import {ReactComponent as CodeLogo} from '../img/CodeLogo.svg';

function card(props) {
    return (
      <div className='h-2/5screen bg-bonewhite w-64 border-2 rounded-lg border-blue' >
          <div>
              {props.name}
          </div>
         <h1 className="text-white text-medium text-2xl pt-10">test</h1>
      </div>
    );
  }
  
  export default card;