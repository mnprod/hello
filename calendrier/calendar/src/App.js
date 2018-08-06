import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCalendar from './mycalendar.js'
import NewPlan from './newplan.js'
import $ from 'jquery'
class App extends Component {
constructor(props){
  super(props);
  this.state ={
    slotSelected:null,
    events:[
    {
      title: "test",
      startDate: null,
      endDate:null,
    },]
  }
  this.togglePopup= this.togglePopup.bind(this);
  this.slotSelected = this.slotSelected.bind(this);
}
togglePopup(){
console.log("clickeddtoglle");
this.setState({
  slotSelected: null
});
//$("#new-plan").slideToggle("slow")
}

slotSelected(slotInfo){
  console.log(slotInfo);
  this.setState({
    slotSelected: slotInfo,
     events:[
    {
      title: "test",
      startDate: slotInfo.start,
      endDate:slotInfo.end,
    },]
  });
  //return this.togglePopup();
  console.log(this.state.slotSelected.start);
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <MyCalendar 
       slotSelected={this.slotSelected} 
       events={this.state.events}
       startAccessor="start"
       endAccessor="end"/>
       {this.state.slotSelected ? <NewPlan togglePopup={this.togglePopup} slotdate={this.state.slotSelected} events={this.state.events}/> : null }
      </div>
    );
  }
}

export default App;
