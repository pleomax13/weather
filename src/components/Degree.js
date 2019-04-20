import React from 'react';
import './Degree.css';

class Degree extends React.Component{
    render(){

        return(
            <div className = 'Degree'>
                <div className = 'degree'>{this.props.temp}<span className = 'deg-symbol'>&deg;</span>C</div>
                <div className = 'city'>{this.props.city}, {this.props.country}</div>
            </div>
        );
    }
}

export default Degree;