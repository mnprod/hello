import React, { Component } from "react";
import TimePicker from 'react-times';

// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
class NewPlan extends Component{
	constructor(props){
  super(props);
  this.state ={
    hour_dep:15,
    minute_dep:50,
    hour_fin:15,
    minute_fin:50
  }
 
}
componentDidMount(){
	console.log("Event", this.props.events);
	this.setState({
		hour_dep:this.props.slotdate.start.getHours(),
		minute_dep:this.props.slotdate.start.getMinutes(),
		hour_fin:this.props.slotdate.end.getHours(),
		minute_fin:this.props.slotdate.end.getMinutes()
	})
}
	onTimeDepChange(options) {
    // do something
    this.setState({
    	hour_dep:options.hour,
    	minute_dep:options.minute
    })
   
   this.props.events[0].title='boom';
   this.props.events[0].startDate.setHours(options.hour, options.minute, 0, 0);
   console.log(this.props.events[0]);
  }
  onTimeFinChange(options) {
    // do something
    this.setState({
    	hour_fin:options.hour,
    	minute_fin:options.minute
    })
  }

  onFocusChange(focusStatue) {
    // do something
  }
getMonthNameFromNumber(monthNumber){
	var monthNames = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]
	return monthNames[monthNumber]
}
getDayNameFromNumber(monthNumber){
	var monthNames = ["Dimanche", "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
	return monthNames[monthNumber]
}

	render(){
		return <div id="new-plan">
		<main>
		<h3>{"Date sélectionnée: Le " + this.getDayNameFromNumber(this.props.slotdate.start.getDay()) + " " + this.props.slotdate.start.getDate() + " " + this.getMonthNameFromNumber(this.props.slotdate.start.getMonth()) + " " + this.props.slotdate.start.getFullYear()} </h3>

		<input type="text" id="add_depart"  placeholder= "Adresse de départ de course" required/>
		<input type="text" id="add_retour"  placeholder= "Adresse d'arrivée de course" required/>    
		<h3 color="green"> Heure de départ de course : </h3>
		<TimePicker
      onFocusChange={this.onFocusChange.bind(this)}
      onTimeChange={this.onTimeDepChange.bind(this)}
       showTimezone // show the timezone, default false
    // whether to show timepicker modal after rendered. default false
    language="fr"
     
         colorPalette="dark" // main color, default "light"
  
    time={this.state.hour_dep+":"+this.state.minute_dep}
    theme="material"
    />
    <h3 color="red"> Heure d'arrivée de course : </h3>
    <TimePicker
      onFocusChange={this.onFocusChange.bind(this)}
      onTimeChange={this.onTimeFinChange.bind(this)}
       showTimezone // show the timezone, default false
     // whether to show timepicker modal after rendered. default false
    language="fr"
     
         colorPalette="dark" // main color, default "light"
  
    time={this.state.hour_fin+":"+this.state.minute_fin}
    theme="material"
    />
		<button type="submit" onClick={this.props.togglePopup}> Valider </button>
		</main>
		</div>
	}
}

export default NewPlan
