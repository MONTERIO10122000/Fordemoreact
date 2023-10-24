import React from 'react';
import './App.css';
import Table  from 'react-bootstrap/Table';
import {Reuse,ChildToParent} from './component/Component';





function App() {
  function parentalert(data){
    alert(data)
  }
  return (
    <div className="App">
      <h1>This is a Example of Nested object</h1>
      <ChildToParent alert={parentalert}/>
    </div>
  );
}


export default App;
