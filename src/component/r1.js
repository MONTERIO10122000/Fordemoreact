import  { Component, useState } from "react";

export function Simple(){
    return(
        <h1>Hello Folks</h1>
    ) 
}

export function Changestate(){
    const [email,setemail]=useState('bisal.das2000@gmial.com')
    function change(){
        setemail('gourabdas10122000@gmail.com')
    }
    return(
        <div>
            <h1>{email}</h1>
            <button onClick={change}>click to change the state</button>
        </div>
    )
}
export function ExampleforProps(props){
    return(
        <div>
            <h1>This is</h1>{props.name}
        </div>
    )
}

export class UsingPropClass extends Component{ 
    constructor(){
        super()
        this.state={name:'This is Gourab'}
    }
    apple(){
        this.setState({name : 'This is Bishal'})
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=> this.apple()}>Click it</button>
            </div>
        )
    }

}

export function fetchIt(){
    
}





