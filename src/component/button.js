import React, { useState, forwardRef , useImperativeHandle} from "react";

const Button = forwardRef((props, _ref) => {
    const [Active, setActive] = useState(false);
    const [Btn, setBtn] = useState("web")
    // Banyak error bagian nambah class
    const addclass = (btn) =>{
        const btnWeb = document.getElementById("web")
        const btnAndroid = document.getElementById("android")
        if(btn === "web"){
            if(btnWeb != null){
                btnWeb.className = `mx-auto h-12 w-36 bg-[#279AF1] border rounded-md text-white`
            }
            if (btnAndroid != null){
                btnAndroid.className = `mx-auto h-12 w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white`
            }
            
        } else {
            btnWeb.className = `mx-auto h-12 w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white`
            btnAndroid.className = `mx-auto h-12 w-36 bg-[#279AF1] border rounded-md text-white`
        }
    }

    useImperativeHandle(_ref, ()=>({
        getActiveBtn: () =>{
            return Btn
        }
    }))

    const seteverything = (type) => {
        setActive(!Active)
        setBtn(type)
        props.getData(Btn) 
    }
    
      return (
        <button 
        id={props.type}
        className={`mx-auto h-12 w-36 bg-blue/25 border rounded-md text-black hover:bg-[#279AF1] hover:text-white`} 
        value={props.type}
        onClick={()=> seteverything(props.type)} 
        > 
            <h1 className='my-auto text-xl font-medium text-center'>{props.type}</h1>
            {addclass(Btn)}
        </button>
      );
    })
    
    export default React.memo(Button);