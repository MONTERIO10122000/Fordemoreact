import React,{useState} from "react";

export class Demo extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'Gourab'
        }
    }
    render(){
        // console.log('ok')
        return(
            <div>
                <h1> {this.name} </h1>
                <button onClick={()=>this.name}>Click it</button>
            </div>
        )
    }
    componentDidMount(){
        this.setState({name : 'Bishal'})
        console.log('here')
    }
}



export class Demo2 extends React.Component{ 
    constructor(){
        super()
        this.state={
            birth : ' 10 dec'
        }
    }
    render(){
        return(
            <div>
                <h1>BirthDay : {this.state.birth}</h1>
                <button onClick={()=>this.setState({birth:'12 dec'})}>Change</button>
            </div>
        )
    }
    componentDidUpdate(preprops,prestate,snapshot=true){    
        console.log(prestate)
        console.log(preprops)
    }
    shouldComponentUpdate(){
        // console.log(2)
        return true//by defoult
    }
        
}
