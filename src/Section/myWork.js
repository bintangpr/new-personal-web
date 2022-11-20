import React, { useState,useRef } from "react";
import Button from "../component/button";

function MyWork(){
    // const activeBtn = useRef();
    // const getActiveBtn = () => {
    //     const whichBtn = activeBtn.current.getActiveBtn()
    //     console.log("which button "+whichBtn)
    // }

    const [isWeb, setWeb] = useState(true)
    function getType(type){
      console.log("which button " + type)
      if(type === "web"){
        //add component porto
        //kasih nilai true ke useState
        setWeb(true)
        console.log("add porto web")
      } else {
        //kasih nilai false ke useState
        setWeb(false)
        console.log("add porto android")
      }
    }

    function check(type){
      if(type){
        return(<h1>INI PERCOBAAN WEB</h1>)
        
      } else {
        return(<h1>INI PERCOBAAN Android</h1>)
      }
    }
    return(
        <div className="h-screen pt-16">
        <div className="w-4/5 mx-auto">
          <div className="bg-lightgreen w-56 h-3"/>
          <h1 className="my-4 text-3xl font-medium text-blue">My Works</h1>
        
          <div className="my-4 flex justify-center gap-4">
            {/* BUTTON WEB ISINYA VALUE = WEB , SAMA TULISANNYA */}
            {/* <Button type="web" ref={activeBtn} getData={getType} />
            <Button type="android" ref={activeBtn} getData={getType}/> */}
            <Button type="web" getData={getType} />
            <Button type="android" getData={getType}/>
          </div>
          {check(isWeb)}
        </div>
      </div>
    )
}

export default MyWork;