import React from 'react';
import './LoadAnim.css';
import loadScreen from './images/loadScreen.jpg'

class LoadAnim extends React.Component {
    render() {
        return(
            <div className = 'LoadAnim' style = {{backgroundImage: `url(${loadScreen})`}}>
                <div style = {{position: "absolute", left: 0, right: 0, top: '50px', fontSize: '20px'}}>
                    {this.props.status}
                </div>
                <div className="windows8">
                    <div className="wBall" id="wBall_1">
                        <div className="wInnerBall"></div>
                    </div>
                    <div className="wBall" id="wBall_2">
                        <div className="wInnerBall"></div>
                    </div>
                    <div className="wBall" id="wBall_3">
                        <div className="wInnerBall"></div>
                    </div>
                    <div className="wBall" id="wBall_4">
                        <div className="wInnerBall"></div>
                    </div>
                    <div className="wBall" id="wBall_5">
                        <div className="wInnerBall"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoadAnim;