import React from 'react';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import './App.css';
//import Values from './components/values';
import Login from './components/login2';
//import PrivateRoute from './components/privateroute'
import ValuesList from './components/valueslist';
import RegisterPage from './components/registration';
import Dashboard from './components/dashboard';
//import Toggle from './components/toggle'
//import Todo from './components/todo'
import CurrentProjects from './components/currentprojects'


function App() {
  return (
    <Router><div className="App">
<header><div className='logo'><div className='esse'><div>ES</div><div>SE</div></div></div>
      <nav><Link className='link' to='//essentialism-jason.netlify.com/#home' onClick='https://essentialism-jason.netlify.com/#home' >Home</Link>
      <Link className='link' to='//esse.netlify.com/about.html' onClick='https://esse.netlify.com/about.html'>About Us</Link>
      <Link className='link' to='//esse.netlify.com/contact.html' onClick='https://esse.netlify.com/contact.html'>Contact</Link>
      <Link className='link' to='/'>Sign In</Link>
      <Link className='link' to='/registration'>Join</Link></nav></header>
      
      
     
    <div className='login-page'> <Route exact path='/' component={Login}/></div>
    <div className='registration-page'><Route  path='/registration' component={RegisterPage}/></div> 
     
    <Route exact path='/values' component={ValuesList}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/currentprojects' component={CurrentProjects}/>

 

    
      
    </div>
    </Router>
  );
}

export default App;

/*<Route  path='/login' component={Login}></Route>
  <Route  path='/signup' component={Signup}></Route>
  <Link to='/signup'>Sign Up</Link>*/
//<Link to='/values'>Values</Link>


/* <header><div className='logo'><div className='esse'><div>ES</div><div>SE</div></div></div>
      <nav><Link className='link' to='//essentialism-jason.netlify.com/#home' onClick='https://essentialism-jason.netlify.com/#home' >Home</Link>
      <Link className='link' to='//essentialism-jason.netlify.com/#about' onClick='https://essentialism-jason.netlify.com/#about'>About Us</Link>
      <Link className='link' to=''>Contact</Link>
      <Link className='link' to='/'>Sign In</Link>
      <Link className='link' to='/registration'>Join</Link></nav></header> */