import React, { useState } from 'react'
import "./Calc.css"
import { ReactDOM } from 'react-dom';


export const Calc = () => {
    const [num, setNum] = useState("");

    const clickHandler = (event) => {
        setNum(num.concat(event.target.value))
    }

const clearDisplay=()=>{
    setNum("")
}

const calculate=()=>{
    setNum(eval(num).toString())
}
    return (
        <div className="calc">
            <input type="text" id="answer" placeholder='0' value={num} />

            <input type="button" value="9" className='button' onClick={clickHandler} />
            <input type="button" value="8" className='button' onClick={clickHandler} />
            <input type="button" value="7" className='button' onClick={clickHandler} />
            <input type="button" value="6" className='button' onClick={clickHandler} />
            <input type="button" value="5" className='button' onClick={clickHandler} />
            <input type="button" value="4" className='button' onClick={clickHandler} />
            <input type="button" value="3" className='button' onClick={clickHandler} />
            <input type="button" value="2" className='button' onClick={clickHandler} />
            <input type="button" value="1" className='button' onClick={clickHandler} />
            <input type="button" value="0" className='button' onClick={clickHandler} />
            <input type="button" value="+" className='button' onClick={clickHandler} />
            <input type="button" value="-" className='button' onClick={clickHandler} />
            <input type="button" value="*" className='button' onClick={clickHandler} />
            <input type="button" value="/" className='button' onClick={clickHandler} />
            <input type="button" value="=" className='button' onClick={calculate}  />
            <input type="button" value="clear" className='button' onClick={clearDisplay} />

        </div>
    )
}
