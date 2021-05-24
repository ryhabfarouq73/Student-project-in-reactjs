import React from 'react';
import users from './components/users'
import userdetails from './components/userdetails'
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom'  
import error from './components/error'
import Home from './components/home';

const App=()=>{
    return(
        <BrowserRouter>
  <nav class="navbar navbar-expand-lg navbar-Dark bg-dark ">
  <Link class="navbar-brand ml-5 " to="/">Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active ml-5" to="/users">Users <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link ml-5" to="/users/3">Userdetails</Link>
      {/* <Link class="nav-item nav-link" to="#">Pricing</Link>
      <Link class="nav-item nav-link disabled" to="#">Disabled</Link> */}
    </div>
  </div>
</nav>
    <Switch>
        <Route exact path="/users/:id" component={userdetails} />
        <Route exact path="/users" component={users} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={error} />
    </Switch>
  
   
</BrowserRouter>

    )
}
export default App