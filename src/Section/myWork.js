import React, { useState } from "react";
import Button from "../component/button";
import Porto from "../component/porto";
import { portoWeb, protoAndroid } from "../aset/text";

function MyWork(){

    const [isWeb, setWeb] = useState(true)
    const [styleWeb, setStyleWeb] = useState (`bg-[#279AF1] text-white`)
    const [styleAndroid, setStyleAndroid] = useState (`bg-blue/25 text-black hover:bg-[#279AF1] hover:text-white`)
    function getType(type){
      if(type === "web"){
        setStyleWeb(`h-8 md:h-12 w-24 md:w-36 bg-[#279AF1] border rounded-md text-white`)
        setStyleAndroid(`bg-blue/25 text-black hover:bg-[#279AF1] hover:text-white`)
        setWeb(true)
      } else {
        setStyleWeb(`bg-blue/25 text-black hover:bg-[#279AF1] hover:text-white`)
        setStyleAndroid(`h-8 md:h-12 w-24 md:w-36 bg-[#279AF1] border rounded-md text-white`)
        setWeb(false)
      }
    }

    function check(type){
      if(type){
        return(
        portoWeb.map(({Image, projectName, description})=>{
          return(
            <Porto img={Image} projectName={projectName} description={description} size="h-44 my-2 mx-auto"/>
          )
        })
        )
      } else {
        return(
          protoAndroid.map(({Image, projectName, description})=>{
            return(
              <Porto img={Image} projectName={projectName} description={description} size="h-44 mx-auto"/>
            )
          })
        )
      }
    }

    return(
        <div className="pt-16">
        <div className="w-4/5 mx-auto">
          <div className="bg-lightgreen w-32 sm:w-56 h-3"/>
          <h1 className="my-4 text-2xl md:text-3xl font-medium text-blue">My Works</h1>
          <div className="my-4 flex justify-center gap-4">
            <Button type="web" getData={getType} styled={`h-8 md:h-12 w-24 md:w-36 border rounded-md ${styleWeb}`} />
              <div className="w-2 h-8 md:h-10 my-auto bg-lightgreen"/>
            <Button type="android" getData={getType} styled={`h-8 md:h-12 w-24 md:w-36 border rounded-md ${styleAndroid}`}/>
          </div>
          <div className="mt-4">
            {check(isWeb)}
          </div>
        </div>
      </div>
    )
}

export default MyWork;