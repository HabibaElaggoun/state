import "./Profile.css"
import React, { Component } from "react";
import image from "../../devlp.jpg"

class Profile extends Component {
    
    state = { timer:0 };
    componentDidMount(){
        setInterval(() =>{
            this.setState({timer: this.state.timer+1});
        }, 1000);
    }
    render() { 
        return ( 
            <div className="Profil">

        
          <div className="profile2">
            <h3 style={{color:"#800000",fontSize:"55px",fontFamily:"Arial, Helvetica, sans-serif"}}>Web Developer</h3>
           <br/>
           <img src={image} alt="imgprofil" />
            <h4 style={{color:"#2F4F4F",fontSize:"25px",fontFamily:"Arial, Helvetica, sans-serif"}}><span style={{color:"#F08080",fontSize:"35px"}}>Profession :</span> Software Developer </h4>
        <h4 style={{color:"#2F4F4F",fontSize:"25px",fontFamily:"Arial, Helvetica, sans-serif"}}>
                <span style={{color:"#F08080",fontSize:"35px"}}> Bio : </span>
            A web developer is a programmer who develops World Wide Web applications using a client–server model.
            The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Node.js, Go or Java in the server, and http for communications between client and server.
            <br/>A web developer may specialize in client-side applications (front-end developer), server-side applications (back-end developer), or both (full-stack developer). </h4>
        
          
        </div>
        <div className="timer"> Timer:  {this.state.timer}s </div> 
            </div>
         );
    }
}
 
export default Profile;