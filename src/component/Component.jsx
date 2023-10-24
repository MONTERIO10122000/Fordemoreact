import React from 'react';
import Table  from 'react-bootstrap/Table';


// ==============================================  Nested map Implimentation========================================


// function App() {
//   const obj = [
//     {name:'Gourab' , contactNO: 32984709 , adress : [
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'}
//     ] },

//     {name:'Gourab' , contactNO: 32984709 , adress : [
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'}
//     ] },

//     {name:'Gourab' , contactNO: 32984709 , adress : [
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'}
//     ] },

//     {name:'Gourab' , contactNO: 32984709 , adress : [
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'},
//       {block: 'Soroni-1' , District : 'Hooghly' , state : 'West Bengal'}
//     ] },

//   ]
//   return (
//     <div className="App">
//       <h1>This is a Example of Nested object</h1>
//       <Table>
//         <tbody>
//             <tr>
//               <td>Xame</td>
//               <td>Xno</td>
//               <td>xress</td>
//             </tr>
       
//           {
//             obj.map((item, i)=>
//               <tr key={i}>
//                 <td>{item.name}</td>
//                 <td>{item.contactNO}</td>
//                 <td>
//                     <Table>
//                       <tbody>
//                         {
//                           item.adress.map((data,j)=>
//                             <tr key={j}>
//                               <td>{data.block}</td>
//                               <td>{data.District}</td>
//                               <td>{data.state}</td>
//                             </tr>
//                           )
//                         }
//                        </tbody>
//                     </Table>
//                 </td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table>
//     </div>
//   );
// }


// export default App;


//========================= Reuse Component =================================


// function App() {
//     const obj = [
//       {name : 'Gourab' , email : 'bisal.das2000@gmail.com' , date: 'whatever'},
      
//       {name : 'Gourab' , email : 'bisal.das2000@gmail.com' , date: 'whatever'},
  
//       {name : 'Gourab' , email : 'bisal.das2000@gmail.com' , date: 'whatever'},
  
//       {name : 'Gourab' , email : 'bisal.das2000@gmail.com' , date: 'whatever'},
//     ]
//     return (
//       <div className="App">
//         <h1>This is a Example of Nested object</h1>
//         {
//         obj.map((item)=>
//             <Reuse data={item.name}/>
//         )
//         }
//       </div>
//     );
//   }
  
  
//   export default App;
  

export default function Reuse(props){
    return(
        <React.Fragment>
            <h1>The name{props.data}</h1>
        </React.Fragment>
    )
}

//=========================ChildtoParent props passing==========================

export function ChildToParent(props){
    const data  = 'anil'
    return(
        <div>
            <h1>something</h1>
            <button onClick={props.alert(data)}>Click it</button>
        </div>
    )

}