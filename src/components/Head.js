import React from 'react';
import './Head.css';

class Head extends React.Component{
    render(){
        return(
            <div className = 'Head'>
                <div className = 'day-of-the-week'>{this.props.day}</div>
                <div className = 'month'>{this.props.month} {this.props.year}</div>
                <div className = 'weather'>{this.props.weather}</div>
            </div>
        );
    }
}

export default Head;