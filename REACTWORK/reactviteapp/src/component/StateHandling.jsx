import { useState } from "react"

function StateHandling() {
    const [counter,setcounter] = useState(20);
    function IncreaseCounterValue(){
        setcounter(counter+2);
    }
    function DecreaseCounterValue(){
        setcounter(counter-2);
    }
  return (
    <div>
        <h2>Counter value = {counter}</h2>
        <button onClick={IncreaseCounterValue}>Increment Counter</button>
        <button onClick={DecreaseCounterValue}>Decrease Counter</button>
        <button onClick={()=>setcounter(counter*2)}>Multiply Counter</button>
    </div>
  )
}
export default StateHandling