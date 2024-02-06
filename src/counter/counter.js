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
            <button className="bg-red-100" onClick={decrease}>-</button>
            {count}
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter