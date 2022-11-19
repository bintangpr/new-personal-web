import React, { useRef } from "react";
import Button from "../component/button";

function MyWork(){
    const activeBtn = useRef();
    const getActiveBtn = () => {
        const whichBtn = activeBtn.current.getActiveBtn()
        console.log("which button "+whichBtn)
    }
    return(
        <div className="h-screen pt-16">
        <div className="w-4/5 mx-auto">
          <div className="bg-lightgreen w-56 h-3"/>
          <h1 className="my-4 text-3xl font-medium text-blue">My Works</h1>
        
          <div className="my-4 flex justify-center gap-4">
            {/* BUTTON WEB ISINYA VALUE = WEB , SAMA TULISANNYA */}
            <Button type="web" ref={activeBtn}/>
            <Button type="android" ref={activeBtn}/>
            {getActiveBtn}
          </div>
          
        </div>
      </div>
    )
}

export default MyWork;