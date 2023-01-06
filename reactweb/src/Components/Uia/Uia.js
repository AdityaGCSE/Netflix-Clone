// import React from 'react'

// export default function uia(props) {
//   return (
//     <div>
//         <div>Name : {props.name} </div>
//         <div>Date : {props.dd}/{props.mm}/{props.yy} and time : {props.time.toLocaleTimeString()}</div>
//         <div>Confirm time : {new Date().toLocaleTimeString()} </div>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react'

// export default class uia extends Component {
//   render() {
//     return (
//     <div>
//       <div>Name : {this.props.name} </div>
//       <div>Date : {this.props.dd}/{this.props.mm}/{this.props.yy} and time : {this.props.time.toLocaleTimeString()}</div>
//       <div>Confirm time : {new Date().toLocaleTimeString()} </div>
//     </div>
//     )
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react'
// import './Uia.css'

// let loadtime = new Date();
// let id = 'ya';

// export default class uia extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        time : new Date(),
//        dd : '02',
//        mm : '12',
//        yy : '2022',
//        count : 0
//     }
//     // this.fun =this.fun.bind(this)
//   }

//   tick(){
//     this.setState({
//         time: new Date()
//     })

//     // this.setState((state,props)=>({
//     //     time: new Date()
//     // }))
//   }

//   componentDidMount(){
//    this.timerID = setInterval(() => {
//        this.tick()
//     }, 1000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }
  

//   fun=(id)=>{
//     if(this.state.count===0)
//         document.getElementById('myname').innerHTML = 'adit'+id;
//     else
//         document.getElementById('myname').innerHTML = 'Aditya Ghosh';
//     this.setState(prevState=>({
//         count: 1-prevState.count
//     }))
// }

//   render() {
//     return (
//     <div>
//       <button id='myname' onClick={this.fun.bind(this,id)}>{this.props.name} </button>
//       <div>Date : {this.state.dd}/{this.state.mm}/{this.state.yy} and current time : {this.state.time.toLocaleTimeString()}</div>
//       <div>load/uia modify time : {loadtime.toLocaleTimeString()} </div>
//     </div>
//     )
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react'
// import './Uia.css'

// export default class uia extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        val:''
//     }
//     this.fileInput = React.createRef();
//   }

//   handleSubmit(event){
//     event.preventDefault();
//     alert(` submitted file - ${this.fileInput.current.files[0].name}`);
// } 

//   handlechange(event){
//     this.setState({val: event.target.value.toUpperCase()});
//     console.log(event.target.type)
//   } 

//   render() {
//     return (
//       <div>
//         <form onSubmit={ this.handleSubmit.bind(this) }>
//             <label>
//                 Write something: <input type="text"  placeholder='enter text' onChange={this.handlechange.bind(this)} style={{width:'400px'}}/>
//             </label>
//             <br /><br />
//                 Written text in uppercase: <textarea value={this.state.val} cols="50" rows="1"></textarea>
//             <br /><br />
//             <input type="file" ref={this.fileInput}/>
//             <br /><br />
//             <button type="submit">submit</button>
//         </form>
//       </div>
//     )
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { useState } from 'react'

// export default function Uia() {
//   const [textcolor,changeColor] = useState("blue");
//   return (
//     <div>
//         <button style={{color:textcolor}} onClick={()=>changeColor("red")} type='button'>Hello!</button>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React,{ useState, useEffect }  from 'react'

// export default function Uia() {
//   const [obj,updateObj] = useState({
//     name: 'Aditya Ghosh',
//     roll: '20CS8028',
//     sec: 'X'
//   });

//   const changeName = () => {
//     updateObj(prevstate=>{
//         return {...prevstate,name:'Ajay Debgon'}
//     });
//   }

//   useEffect(() => {
    

//   }, [])
  

//   return (
//     <div>
//         <div>
//             <button onClick={changeName}>Name : {obj.name}</button>
//         </div>
//         <div>
//             <button>Roll : {obj.roll}</button>
//         </div>
//         <div>
//             <button>Sec : {obj.sec}</button>
//         </div>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState} from "react";
// import {useEffect } from "react";

// export default function Uia() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import { useState} from "react";
// import {useEffect } from "react";

// export default function Uia() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("executed");
//       setCount((count) => count + 1);
//     }, 1000);
//   },[]); // <- add empty brackets here

//   return <h1>I've rendered {count} times!</h1>;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import {React, useRef} from "react";

// export default function Uia(){
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.value="Aditya";
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Fill Name</button>
//     </>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

