import React, { Component } from 'react';


export class Schedule extends Component {
  static displayName = Schedule.name;

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  static renderPersonalInfo(visible){

    return(
      <td>
        <info_header>Weekly Schedule:</info_header>
      <hr></hr>
      
        <tr>
        <table class="center"> 
        <img src="../../weeklyschedule2.png" alt="temp"></img>
              </table>
        </tr>
       
      
     
     
        <tr>
      <body>
  
        </body>
      
        </tr>
        
        <hr></hr>
        
        <info_header>Class List:</info_header>

  <label class="container" >COMPPSCI 535-201 MoWe 4:00PM-5:15PM
    <input type="checkbox" ></input>
    <span class="checkmark" hidden ={!visible} ></span>
      
  </label>
  <label class="container">COMPSCI 595-201 TuTh 3:00PM-3:50PM
    <input type="checkbox"></input>
    <span class="checkmark"  hidden ={!visible}></span>
  </label>
  <label class="container">COMPSCI 351-102 TuTh 10:00AM-10:50AM
    <input type="checkbox"></input>
    <span class="checkmark"  hidden ={!visible}></span>
  </label>
  <label class="container">COMPSCI 101-202 MoWe 2:00PM-2:50PM
    <input type="checkbox"></input>
    <span class="checkmark" hidden ={!visible} ></span>
    <hr></hr>
    
    <button  hidden ={!visible}>Drop</button> 
    
  </label>
      
      </td>
  
    );
  }

  render() {
    return <div id="profile_format">
      <profile_header>
          <center>
          Schedule
          </center>
      </profile_header>

      <td>
            {Schedule.renderPersonalInfo(this.state.visible)}
         <button onClick={()=>{this.setState({visible: !this.state.visible})}}>Edit Classes </button>
         <button>Add</button>
         
         
            
      </td>
    </div>
  }

 
}
