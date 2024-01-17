// imports
import { useState } from "react"
import ConditionalRender from "./ConditionalRender";
// globals


const Container = () => {
    // hooks
    const [condition, setCondition] = useState(true);
    // vars
    // functs

  return (
    <>
    <div>
    <button onClick={()=>setCondition(1>1)}>1 &gt; 1</button>
    <button onClick={()=>setCondition(1==1)}>1 = 1</button>
    </div>
    <ConditionalRender condition={condition}/>
    </>
  )
}

export default Container