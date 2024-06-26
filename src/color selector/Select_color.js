import React from "react";
import { useState } from "react";

 function SelectColor () {

    const [color, setColor] = useState("red");
    return(
        <div className=" w-full h-screen flex justify-center align-middle "  style={{backgroundColor: color}}>
            <div className=" bg-slate-400 w-full h-12 rounded-md flex justify-center items-center">
                <button className="bg-red-700 rounded-md p-2 w-16"  onClick={() => setColor("red")}>Red</button>
                <button className="ml-4 bg-green-600 rounded-md p-2 w-16" onClick={()=> setColor("green")} >Green</button>
                <button className="ml-4 bg-yellow-400 rounded-md p-2 w-16" onClick={()=> setColor("yellow")} >Yellow</button>



        </div>

        
        </div>
    )
}

export default SelectColor