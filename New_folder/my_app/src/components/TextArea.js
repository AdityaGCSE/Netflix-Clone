import React, { useState } from 'react'

export default function TextArea() {
    const changeToUpperCase = ()=>{
        let newtext = text.toUpperCase();
        changeText(newtext);
    }
    const changeToLowerCase = ()=>{
        let newtext = text.toLowerCase();
        changeText(newtext);
    }

    const userInput = (event)=>{
        changeText(event.target.value);
    }

    const [text,changeText] = useState('');
  return (
    <>
    <div className="container">
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={userInput}></textarea>
            <br />
            <button className="btn btn-primary mx-2" onClick={changeToUpperCase}>change comment to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>change comment to lowercase</button>
            <button className="btn btn-primary mx-2">submit</button>
        </div> 
    </div>
    <div className="container">
    <p> {text.length} charecters </p>
    </div>
    </>
  )
}