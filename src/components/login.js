import React, { Component } from 'react';
class Login extends Component{
    constructor(){
        super()
        this.state={
            id:'',
            name:'',
            age:''
        }
    }
    setName=(e)=>{
    this.setState({name:e.target.value})
    }

    setAge=(e)=>{
        this.setState({age:e.target.value})
        }
        
    send=()=>{
        this.props.sendData(this.state)
    } 
   
    render(){
    return(
        <React.Fragment>
            <div className="container">
                <h1 className=" mb-3">please enter your data</h1>
                <input type="text" value={this.state.name} onChange={this.setName} className="col-4 mb-2" placeholder="name"></input>
                <br></br>
                <input type="number" value={this.state.age} onChange={this.setAge} className="col-4 mb-2" placeholder="age"></input>
                <br></br>
                <input type="button" value="add" onClick={this.send} className="btn btn-primary align-items-center col-4 mb-2 "></input>
            </div>
           </React.Fragment>
    )
}
};



export default Login