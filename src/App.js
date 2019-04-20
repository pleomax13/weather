import React, { Component } from 'react';
import './App.css';
import Days from './components/Days';
import Head from './components/Head';
import Degree from './components/Degree';
import rain from './components/images/rain.jpg'
import thunderstorm from './components/images/thunderstorm.jpg'
import fog from './components/images/fog.jpg'
import snow from './components/images/snow.jpg'
import clear from './components/images/clear.jpg'
import clouds from './components/images/clouds.jpg'
import LoadAnim from './components/LoadAnim';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import loadScreen from './components/images/loadScreen.jpg'

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: '',
      latitude: '',
      longitude: '',
      temp: 'N/A',
      list: [],
      id: '',
      onLoad: true, 
      status: 'Getting location',
      city: 'N/A',
      country: 'N/A'
    }

    this.geoSuccess = this.geoSuccess.bind(this);
    this.weather = this.weather.bind(this);
    this.geoError = this.geoError.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  geoSuccess(position) {
    let startPos = position;

    //console.log(startPos.coords.latitude);
    //console.log(startPos.coords.longitude);
    this.weather(startPos.coords.latitude, startPos.coords.longitude);
    this.setState({
      latitude: startPos.coords.latitude,
      longitude: startPos.coords.longitude
    });
  }

  weather(lat, lon) {
    let xhrDay = new XMLHttpRequest();
    let xhrDays = new XMLHttpRequest();

    xhrDay.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b300ca69f98ecd8d6d52349dc0450de7`);
    xhrDay.send();

    xhrDay.onreadystatechange = () => {
      if (xhrDay.readyState !== 4) return;
      if (xhrDay.status !== 200) {
        this.setState({
         status: xhrDay.status + ': ' + xhrDay.statusText
        })
       } else {
          const weather = JSON.parse(xhrDay.responseText);
          //console.log(weather)
   
           this.setState({
             weather: weather.weather[0].main,
             temp: Math.round(weather.main.temp),
             city: weather.name,
             country: weather.sys.country,
             day: new Date(),
             id: weather.weather[0].id
           })
         }
    }

    xhrDays.open('GET', `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b300ca69f98ecd8d6d52349dc0450de7`);
    xhrDays.send();

    xhrDays.onreadystatechange = () => {
      if (xhrDays.readyState !== 4) return;      
      if (xhrDays.status !== 200) {
        this.setState({
         status: xhrDays.status + ': ' + xhrDays.statusText
        })
       } else {
           const weather = JSON.parse(xhrDays.responseText);
           //console.log(weather)
   
           this.setState({
             list: weather.list,
             onLoad: false,
             lastUpdate: this.lastUpdate()
           })
         }
    }
  }

  lastUpdate() {
    const now = new Date();

    return `${now.getHours()}:${now.getMinutes()}`
  }

  geoError(error) {
    let status;
    //console.log('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    if(error.code === 0){
        status = 'Unknown error. Please try again'
      }
      else if(error.code === 1){
         status = 'To determine the weather, the app needs your location'
        } 
        else if(error.code === 2){
          status = 'Position unavailable. Please try again'
         }
         else if(error.code === 3){
          status = 'Timed out. Please try again'
         }

      this.setState({
        status: status
      })
  }

  handleUpdate() {
    this.weather(this.state.latitude, this.state.longitude);
  }

  componentDidMount(){
    let geoOptions = {
      //enableHighAccuracy: true,
      maximumAge: 5 * 60 * 1000,
      timeout: 10 * 1000
    }

    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, geoOptions);
  }

  getDateNow(){
    let date = new Date();
    let day;
    let month;

    switch(date.getDay()){
      case 0: 
        day = 'Sunday' 
        break;
      case 1: 
        day = 'Monday' 
        break;
      case 2: 
        day = 'Tuesday' 
        break;
      case 3: 
        day = 'Wednesday' 
        break;
      case 4: 
        day = 'Thursday' 
        break;
      case 5: 
        day = 'Friday' 
        break;
      case 6: 
        day = 'Saturday' 
        break;
      default:
    }

    switch(date.getMonth()){
      case 0: month = 'January' 
        break;
      case 1: month = 'February' 
        break;
      case 2: month = 'March' 
        break;
      case 3: month = 'April' 
        break;
      case 4: month = 'May' 
        break;
      case 5: month = 'June' 
        break;
      case 6: month = 'July' 
        break;
      case 7: month = 'August' 
        break;
      case 8: month = 'September' 
        break;
      case 9: month = 'October' 
        break;
      case 10: month = 'November' 
        break;
      case 11: month = 'December' 
        break;
      default:
    }

    return [day, month, date.getFullYear()]
  }

  bgImage() {
    let weatherId = this.state.id;

    if(weatherId === 800){
      return clear;
    }
    else if(weatherId > 800){
        return clouds;
      }
      else if(weatherId > 700){
          return fog;
        }
        else if(weatherId >= 600){
            return snow;
          }
          else if(weatherId >= 500 || weatherId >= 300) {
              return rain;
            }
            else if(weatherId >= 200) {
                return thunderstorm;
              } 
              else return loadScreen;
  }

  render() {
    //const forecastList = this.state.list.map(item => );
    //console.log(this.state.onLoad)
    return (
      <div className = 'App' style = {{backgroundImage: `url(${this.bgImage()})`}}>
        <TransitionGroup component={null}>
          {
            this.state.onLoad && 
            <CSSTransition classNames="fade" timeout={350} >
              <LoadAnim status = {this.state.status}/>
            </CSSTransition>
          }
        </TransitionGroup>
        <div className = 'box-main'>
          <Head 
            day = {this.getDateNow()[0]} 
            month = {this.getDateNow()[1]} 
            year = {this.getDateNow()[2]}
            weather = {this.state.weather}
          />
          <Degree 
            temp = {this.state.temp} 
            city = {this.state.city} 
            country = {this.state.country}
          />
        </div>
        <Days list = {this.state.list} lastUpdate = {this.state.lastUpdate}  handleUpdate = {this.handleUpdate} />
      </div>
    );
  }
}

export default App;
