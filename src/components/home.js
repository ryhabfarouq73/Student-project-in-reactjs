import React, { Component } from 'react'
import List from'./list'
import Login from'./login'

class Home extends Component{
    users;  
    constructor(){
        super()
        this.users=[]
        this.state={
            userList:[]
        }
       
    }
    recived=(e)=>{
        this.users.push(e)
        this.setState({userList:this.users})
    }
    render(){
        return( <div>
            <Login sendData={this.recived}/>
           <List list={this.state.userList}/>
        </div>)
    }
}



export default Home 