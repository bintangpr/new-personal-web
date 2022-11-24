import React, { useState } from "react";
import Button from "../component/button";
import Porto from "../component/porto";

function MyWork(){
   const portoWeb = [{
    Image: "Rentrips",
    projectName: "Rentrips.id",
    import: "import Rentrips from '../img/Rentrips.svg",
    description: "This is a rental marketplace by Rentrips.id where i’m intern there as a frontend Developer. were Using Typescript, React, Redux, and Tailwind CSS."
  },
  {
    Image: "Lingoschool",
    projectName: "Lingoschool",
    description: "This is a Dashboard for monitoring student activity for Lingoschool by Lingotalk.co. I help working and fixing some bugs here when i had my intership as a frontend developer in this company. Were using Svelte and javascript."
  },
  {
    Image: "Ovent",
    projectName: "Ovent",
    description: "Ovent is a web marketplace that created for BCC internship using React.js"
  },
  {
    Image: "BCC",
    projectName: "BCC Company Profile",
    description: "A website company profile for Basic Computing Community that created by me and other frontend developer member of BCC Filkom UB, Were using React Typescript and tailwind css"
  },
  {
    Image: "DSI",
    projectName: "Data Science Learning Studio",
    description: "A website for join and know information of a workshop called Data Science Learning Studio that created by Data Science Indonesia. I’m Creating this web using HTML, Javascript, and google sites."
  }
  ]

  const protoAndroid = [{
    Image: "Clearvis",
    projectName: "Clearvis",
    description: "This is a eyecheck app for detecting retinablastoma cancer that occur in kids. I create this app in 2022 in Bangkit Academy using Kotlin, Retrofit and Tensorflow Lite"
  },
  {
    Image: "GithubClone",
    projectName: "Github Clone",
    description: "This app is a clone of github where we could search for a user name and we could see their followers, following, and the amount of repo the user have. also there is a like feature where you could add user in favorite list that you could see anytime"
  }
  ]


    const [isWeb, setWeb] = useState(true)
    function getType(type){
      const btnWeb = document.getElementById("web")
      const btnAndroid = document.getElementById("android")
      if(type === "web"){
        
        if(btnWeb != null){
          btnWeb.className = `h-8 md:h-12 w-24 md:w-36 bg-[#279AF1] border rounded-md text-white`
        }
        if (btnAndroid != null){
            btnAndroid.className = `h-8 md:h-12 w-24 md:w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white`
        }
        setWeb(true)
      } else {
        if(btnWeb != null){
          btnWeb.className = `h-8 md:h-12 w-24 md:w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white`
        }
        if(btnAndroid != null){
          btnAndroid.className = `h-8 md:h-12 w-24 md:w-36 bg-[#279AF1] border rounded-md text-white`
        }
        setWeb(false)
      }
    }

    function check(type){
      if(type){
        return(
        // <h1>INI PERCOBAAN WEB</h1>
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
            <Button type="web" getData={getType} styled={true} />
              <div className="w-2 h-8 md:h-10 my-auto bg-lightgreen"/>
            <Button type="android" getData={getType}/>
          </div>
          <div className="mt-4">
            {check(isWeb)}
          </div>
        </div>
      </div>
    )
}

export default MyWork;