import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile/Profile.js';

class App extends Component {
  
  state = { show:false };

  render() { 
    return ( 
      <div className="App">
   <h1>What is a Web Developer ?</h1>
      <button className='button' onClick={()=>{ this.setState({show:!this.state.show});}}>
        <span>{this.state.show ? "Hide": "Show"} </span> 
      </button>

         {this.state.show && <Profile/>}

    </div>
     );
  }
}
 
export default App;


