import { useState } from "react"



function Counter ()
{
    let [count, setcount]=useState(0);

    const increase=()=>
    {
        setcount(count+1)
    }
    const decrease=()=>
    {
        setcount(count-1)
    }
    return(
        <div className=" flex justify-center items-center w-full h-fit p-10">

        <div className="flex justify-center items-center w-fit h-1/2 bg-slate-800 rounded-xl shadow-2xl ">
            <button className="bg-gray-500 w-30 h-10 p-5 m-5 rounded-md text-white  text-center font-bold" onClick={decrease}>-</button> 
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                {count}
                </h1>
            <button className="bg-gray-500 w-30 h-10 p-5 m-5 rounded-md text-white   font-bold " onClick={increase}>+</button>
        </div>
         </div>
    )
}

export default Counter