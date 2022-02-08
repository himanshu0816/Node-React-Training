import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <h2><b/>Treding Framworks</h2>
    <div>
  <App image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWQkVKBJ_y8ppXonOPcjLKXQ54B9w4gwmog&usqp=CAU"
  head="NO_SQL DataBase"
  description="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database."
  link="https://www.mongodb.com/"
  />
  <App image="https://fd-development.com/images/expressjs.png"
  head="NodeJS FrameWork"
  description="Express.js, or simply Express, is a back end web application framework for Node.js, released as free open-source."
  link="https://expressjs.com/"
  />
  
  <App image="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
  head="Front End Library "
  description="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. "
  link="https://reactjs.org/"
  />
  <App image="https://nodejs.org/static/images/logo.svg"
  head="Provide Virtual Enviroment"
  description="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine .."
  link="https://nodejs.org/en/"
  />
  
  </div>
  
</div>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
