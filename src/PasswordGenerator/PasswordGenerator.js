import { useState,useCallback, useEffect, useRef } from "react"


function PasswordGenerator()
{   const [length, setlength]=useState(8)
    const [Nallow, setNallow]=useState(false)
    const [Callow, setCallow] = useState(false)
    const [Password, setPassword] =useState("")
    const [copy ,setCopy]=useState(false)

    const passwordRef=useRef("")

    const copyPassword=useCallback(()=>{
        window.navigator.clipboard.writeText(Password)
    },
    [Password])

    const  generate= useCallback(()=>{
        let password=""
        let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
        if (Nallow) str+="0123456789"
        if (Callow) str+="!@#$%^&*()_+}{:?><;,-.[]/|`~"
        
        for (let i=0 ;i< length ;i++)
        password+=str[Math.floor(Math.random() * str.length+1)]
        setPassword(password)
        
    },[length, Nallow, Callow, setPassword])

    useEffect(()=>{
        generate();
    },[length,Nallow,Callow,setPassword])

    return(
        <>
        <h1 className="m-5 text-4l text-center text-black font-bold">Password Generator</h1>
        <div className="flex justify-center w-full h-screen">

        <div className="flex-col items-center justify-center w-3/4 h-1/2 pl-20 p-7 bg-gray-400 rounded-lg">
            <div className="flex justify-around items-center bg-gray-300 w-4/5 h-1/3 m-10 rounded-xl">
                <input
                type="text" 
                value={Password} 
                className="p-4 m-10 border-green-700 border-2 rounded-md shadow-xl w-1/2 h-12 text-left" readOnly
                ref={passwordRef}
                placeholder="Password"/>
                <button
                className="w-1/5  h-12 rounded-md border-2 border-teal-600 border-solid font-semibold bg-slate-100 hover:bg-gray-600 hover:text-white"
                onClick={()=>{copyPassword();
                    setCopy(true);}}
                    >COPY</button>
                {copy && <p className="text-green-500  text-center">Copied!</p>}

            </div>
           {/* < div className="flex justify-around bg-gray-300 w-fit h-fit m-5 rounded-xl"> */}
           <div className="p-9  m-10 flex-col border-2  rounded-md shadow-xl bg-gray-300 w-4/5  h-1/3 text-left">
            <input 
             type="range" min="4" max="20"
             value={length} 
             className="cursor-pointer"
             onChange={e=>{setlength(e.target.value)}}
             />
            
             <label htmlFor="Length" className="m-6">Length : {length}</label>

            <input type="checkbox" id="numeric" defaultChecked={Nallow} onClick={() => setNallow((prev)=>!prev)}/>
            < label htmlFor="setNumber" className="m-6">Allow Numbers</label>

            <input type="checkbox" id="character" defaultChecked={Callow} onClick={() => setCallow((prev)=>!prev)}/>
            < label htmlFor="allowcharacter" className="m-6">Allow Characters</label>
           </div>

            </div>
        </div>
             {/* </div> */}
        </>
    )
}

export default PasswordGenerator