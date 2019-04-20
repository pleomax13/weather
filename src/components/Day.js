import React from 'react';
import './Day.css';

class Day extends React.Component{
    render(){
        return(
            <div className = 'Day'>
                <div className = 'weather'>{this.props.weather}</div>
                <div className = 'degree'>{this.props.temp}<span className = 'deg-symbol'>&deg;</span>C</div>
                <div className = 'date'>{this.props.date}</div>
            </div>
        );
    }
}

export default Day;