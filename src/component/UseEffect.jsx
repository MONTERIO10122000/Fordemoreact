import React,{useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

export function Hooks(){
    const [age , val] = useState(0)
    const [count,setCount] = useState(100)
    useEffect(()=>{
        console.log(1)
    },[age])
    return(
        <div>
           <div>This is example of Hooks </div>
           <h1>{age} {count} </h1>
           <button onClick={()=>val(age+1)}>age</button>
           <button onClick={()=>setCount(count-2)}>count</button>
        </div>
        
    )
}

export function Checkingbootstrap(){
    return(
        <div>
            <Button>Click Me</Button>
        </div>
    )
}
//==================for Map Function=================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function App() {
//   const arr = ['Anil' , 'snil' , 'avhi' , 'sam ', 'titi'];
//   const obj = [
//     {Name: 'abc' ,phno: 110 ,emai:'bisal@d'},
//     {Name: 'efg' ,phno: 110 ,emai:'bisal@d'},
//     {Name: 'lmn' ,phno: 110 ,emai:'bisal@d'},
//   ];
//   return (
//     <div className="App">
//       <h2>This is the name</h2>    
//       { <table border = '1' >
//         {
//           obj.map((obj)=>
//             <tr>
//               <td>{obj.Name}</td>
//               <td>{obj.phno}</td>
//               <td>{obj.emai}</td>
//             </tr>
//           )
//         }
//         </table>
//       }
//     </div>
//   );
// }


// export default App;



//===========================Using Bootstrap==================================
// import Table  from 'react-bootstrap/Table';

// function App() {
//     const obj = [
//       {Name: 'abc' ,phno: 110 ,emai:'bisal@d'},
//       {Name: 'efg' ,phno: 110 ,emai:'bisal@d'},
//       {Name: 'lmn' ,phno: 110 ,emai:'bisal@d'}
//     ]
//     return (
//       <div className="App">
//         <h2>This is the name</h2>    
//         { 
//           <Table striped bordered hover variant='dark'>
//               <tbody>
//                 <tr>
//                   <td>Name</td>
//                   <td>phno</td>
//                   <td>Email</td>
//                 </tr>
//                 {
//                   obj.map((obj,i)=>
//                     <tr key={i}>
//                       <td>{obj.Name}</td>
//                       <td>{obj.phno}</td>
//                       <td>{obj.emai}</td>
//                     </tr>
//                   )
//                 }
//               </tbody>
//           </Table>
//         }
//       </div>
//     );
//   }
  
  
//   export default App;



