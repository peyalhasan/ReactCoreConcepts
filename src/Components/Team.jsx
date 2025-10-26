import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)
    const handleAdd = () =>{
        setTeam(t => t + 1)
    }
    const handleReduce = () =>{
        setTeam(t => t -1)
    }
    return (
        <div className=" border-2 border-purple-600 m-4 p-4 rounded-2xl  ">
            <h3>Players: {team}</h3>
            <div className="flex gap-2 "> 
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}