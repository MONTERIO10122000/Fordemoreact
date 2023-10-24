import React , {useState} from "react";





// ============= For fetching input value===========================
// function App() {
//   const [well, setWell] = useState()
//   const [real,setReal] = useState(false)
//   let gl;
//   function Fetch(e){
//       var b = e.target.value
//       gl=b
//   }
//   function show(){
//     setReal(true)
//     setWell(gl)
//     setReal(false)
//   }
//   return (
//     <div className="App">

//       <h2>For Fething input and all functionalities ...</h2>
//       <input type='text' onChange={Fetch}></input>
//       <button onClick={show}>Show</button>
//       <h1>{well}</h1>
//     </div>
//   );
// }
// export default App;



//Form Validation in React============================================================

// function App() {
//     const[inptxt , setInptext] = useState('Should be atleast 7 Character')
//     const[pass, setPass] = useState('Should be contain alphabetic value')
//     let txt , psw;
//     function final(e){
//         e.preventDefault();      
//     }
//     function fortxt(e){
//       txt = e.target.value.length
//       txt>=7?setInptext():setInptext('Should be atleast 7 Character')
//     }
//     function forpsw(e){
//       let ps = e.target.value
//       psw = isNaN(ps)  //False
//       psw==true?setPass():setPass('Should be contain alphabetic value')
//     }
//     return (
//       <div className="App">
//         <h2>For Fething input and all functionalities ...</h2>
//         <form onSubmit={final}>
//            <input type='text' placeholder='UserName'onChange={fortxt}></input><span>{inptxt}</span>
//            <br/>
//            <input type='password' placeholder='password' onChange={forpsw}></input><span>{pass}</span>
//            <br/>
//            <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
  
  
//   export default App;
