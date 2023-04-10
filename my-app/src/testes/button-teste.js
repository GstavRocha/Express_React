import React, {useState} from 'react';
const ButtonTeste =()=>{
    let [clickar, setClikar] = useState(false);
    const eventButton =()=>{
        setClikar(!clickar);
      
    }
    return(
        <button onClick={eventButton}>{clickar? <h1> true</h1>:<h2> false</h2>}</button>
    )
}
export default ButtonTeste;
