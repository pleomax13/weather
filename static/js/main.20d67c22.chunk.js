(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),c=a.n(r),i=(a(73),a(4)),o=a(5),l=a(7),d=a(6),u=a(8),m=a(11),p=(a(74),a(75),a(76),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Day"},s.a.createElement("div",{className:"weather"},this.props.weather),s.a.createElement("div",{className:"degree"},this.props.temp,s.a.createElement("span",{className:"deg-symbol"},"\xb0"),"C"),s.a.createElement("div",{className:"date"},this.props.date))}}]),t}(s.a.Component)),h=a(61),b=a.n(h),y=a(59),w=a.n(y),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.list.map(function(e){return s.a.createElement(p,{date:e.dt_txt.slice(0,-3),temp:Math.round(e.main.temp),weather:e.weather[0].main,key:e.dt})});return s.a.createElement("div",{className:"Days"},s.a.createElement(w.a,{size:"small",style:{height:"40px"},onClick:this.props.handleUpdate},"last update: ",this.props.lastUpdate?this.props.lastUpdate:"N/A",s.a.createElement(b.a,{style:{marginLeft:"10px"}})),s.a.createElement("div",{className:"box"},e))}}]),t}(s.a.Component),f=(a(165),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Head"},s.a.createElement("div",{className:"day-of-the-week"},this.props.day),s.a.createElement("div",{className:"month"},this.props.month," ",this.props.year),s.a.createElement("div",{className:"weather"},this.props.weather))}}]),t}(s.a.Component)),v=(a(166),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Degree"},s.a.createElement("div",{className:"degree"},this.props.temp,s.a.createElement("span",{className:"deg-symbol"},"\xb0"),"C"),s.a.createElement("div",{className:"city"},this.props.city,", ",this.props.country))}}]),t}(s.a.Component)),E=a(62),j=a.n(E),k=a(63),N=a.n(k),O=a(64),S=a.n(O),x=a(65),B=a.n(x),U=a(66),D=a.n(U),T=a(67),C=a.n(T),I=(a(167),a(31)),M=a.n(I),A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"LoadAnim",style:{backgroundImage:"url(".concat(M.a,")")}},s.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:"50px",fontSize:"20px"}},this.props.status),s.a.createElement("div",{className:"windows8"},s.a.createElement("div",{className:"wBall",id:"wBall_1"},s.a.createElement("div",{className:"wInnerBall"})),s.a.createElement("div",{className:"wBall",id:"wBall_2"},s.a.createElement("div",{className:"wInnerBall"})),s.a.createElement("div",{className:"wBall",id:"wBall_3"},s.a.createElement("div",{className:"wInnerBall"})),s.a.createElement("div",{className:"wBall",id:"wBall_4"},s.a.createElement("div",{className:"wInnerBall"})),s.a.createElement("div",{className:"wBall",id:"wBall_5"},s.a.createElement("div",{className:"wInnerBall"}))))}}]),t}(s.a.Component),J=a(38),L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={weather:"",latitude:"",longitude:"",temp:"N/A",list:[],id:"",onLoad:!0,status:"Getting location",city:"N/A",country:"N/A"},e.geoSuccess=e.geoSuccess.bind(Object(m.a)(Object(m.a)(e))),e.weather=e.weather.bind(Object(m.a)(Object(m.a)(e))),e.geoError=e.geoError.bind(Object(m.a)(Object(m.a)(e))),e.handleUpdate=e.handleUpdate.bind(Object(m.a)(Object(m.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"geoSuccess",value:function(e){var t=e;this.weather(t.coords.latitude,t.coords.longitude),this.setState({latitude:t.coords.latitude,longitude:t.coords.longitude})}},{key:"weather",value:function(e,t){var a=this,n=new XMLHttpRequest,s=new XMLHttpRequest;n.open("GET","https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&appid=b300ca69f98ecd8d6d52349dc0450de7")),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200!==n.status)a.setState({status:n.status+": "+n.statusText});else{var e=JSON.parse(n.responseText);a.setState({weather:e.weather[0].main,temp:Math.round(e.main.temp),city:e.name,country:e.sys.country,day:new Date,id:e.weather[0].id})}},s.open("GET","https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&units=metric&appid=b300ca69f98ecd8d6d52349dc0450de7")),s.send(),s.onreadystatechange=function(){if(4===s.readyState)if(200!==s.status)a.setState({status:s.status+": "+s.statusText});else{var e=JSON.parse(s.responseText);a.setState({list:e.list,onLoad:!1,lastUpdate:a.lastUpdate()})}}}},{key:"lastUpdate",value:function(){var e=new Date;return"".concat(e.getHours(),":").concat(e.getMinutes())}},{key:"geoError",value:function(e){var t;0===e.code?t="Unknown error. Please try again":1===e.code?t="To determine the weather, the app needs your location":2===e.code?t="Position unavailable. Please try again":3===e.code&&(t="Timed out. Please try again"),this.setState({status:t})}},{key:"handleUpdate",value:function(){this.weather(this.state.latitude,this.state.longitude)}},{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(this.geoSuccess,this.geoError,{maximumAge:3e5,timeout:1e4})}},{key:"getDateNow",value:function(){var e,t,a=new Date;switch(a.getDay()){case 0:e="Sunday";break;case 1:e="Monday";break;case 2:e="Tuesday";break;case 3:e="Wednesday";break;case 4:e="Thursday";break;case 5:e="Friday";break;case 6:e="Saturday"}switch(a.getMonth()){case 0:t="January";break;case 1:t="February";break;case 2:t="March";break;case 3:t="April";break;case 4:t="May";break;case 5:t="June";break;case 6:t="July";break;case 7:t="August";break;case 8:t="September";break;case 9:t="October";break;case 10:t="November";break;case 11:t="December"}return[e,t,a.getFullYear()]}},{key:"bgImage",value:function(){var e=this.state.id;return 800===e?D.a:e>800?C.a:e>700?S.a:e>=600?B.a:e>=500||e>=300?j.a:e>=200?N.a:M.a}},{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(this.bgImage(),")")}},s.a.createElement(J.TransitionGroup,{component:null},this.state.onLoad&&s.a.createElement(J.CSSTransition,{classNames:"fade",timeout:350},s.a.createElement(A,{status:this.state.status}))),s.a.createElement("div",{className:"box-main"},s.a.createElement(f,{day:this.getDateNow()[0],month:this.getDateNow()[1],year:this.getDateNow()[2],weather:this.state.weather}),s.a.createElement(v,{temp:this.state.temp,city:this.state.city,country:this.state.country})),s.a.createElement(g,{list:this.state.list,lastUpdate:this.state.lastUpdate,handleUpdate:this.handleUpdate}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){e.exports=a.p+"static/media/loadScreen.980ae7d4.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/rain.927a63cc.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/thunderstorm.9f339257.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/fog.a0e01455.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/snow.12df609b.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/clear.c2e8dca6.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/clouds.914cfd9d.jpg"},68:function(e,t,a){e.exports=a(173)},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.20d67c22.chunk.js.map