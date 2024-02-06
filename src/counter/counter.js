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
        <div>
            <button className="bg-red-100 w-30 h-10 p-5 m-5 " onClick={decrease}>-</button>
            {count}
            <button className="bg-red-100 w-30 h-10 p-5 m-5" onClick={increase}>+</button>
        </div>
    )
}

export default Counter