import { useRef, useState } from "react";
export default function bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi,setBmi]=useState(0);
    const calBmi=()=>{
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi(w / Math.pow(h,2));
    }
    return(
    <>
    <h3>BMI Calcutor</h3>
    Weight <input
        type="text"
        ref={w_inputRef}/>  kg.
    Height <input
        type="text"
        ref={h_inputRef}/>  cm.
        <button onClick={()=>calBmi()}>Calcutor!</button>
        </>
    );
}