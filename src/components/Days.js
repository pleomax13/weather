import React from 'react';
import './Days.css';
import Day from './Day';
import Update from '@material-ui/icons/UpdateRounded';
import Button from '@material-ui/core/Button';

class Days extends React.Component{
    render() {
        const list = this.props.list.map(item => <Day 
            date = {item.dt_txt.slice(0, -3)} 
            temp = {Math.round(item.main.temp)} 
            weather = {item.weather[0].main}
            key = {item.dt} 
        />)
        return(
            <div className = 'Days'>
                <Button 
                    size="small" 
                    style = {{height: '40px'}}
                    onClick = {this.props.handleUpdate}
                >
                    last update: {this.props.lastUpdate ? this.props.lastUpdate : 'N/A'}
                    <Update style = {{marginLeft: '10px'}}/>
                </Button>
                <div className = 'box'>
                    {list}
                </div>
            </div>
        );
    }
}

export default Days;