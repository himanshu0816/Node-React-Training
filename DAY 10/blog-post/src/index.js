import React from "react";
import  ReactDOM  from "react-dom";
import profile1 from './image/profile1'
const App=()=>{
    return(
        <div className='ui comments'>
        <div className='comment'>
            <a href="/" className="avatar">
                <img src={profile1} alt="Profile picture"></img>
            </a>
            <div className='content'>
            <a href="/" className="author">
                Preety
            </a>
            <div className='metadata'>
                <span className='date'>Today at 5:00 PM</span>
            </div>
            <div className='text'>
                Its Very Cool
            </div>
            </div>
        </div>
        <div className='comment'>
            <a href="/" className="avatar">
                <img src={profile1} alt="Profile picture"></img>
            </a>
            <div className='content'>
            <a href="/" className="author">
                Himanshu
            </a>
            <div className='metadata'>
                <span className='date'>Today at 6:00 PM</span>
            </div>
            <div className='text'>
                React Component reusability
            </div>
            </div>
        </div>
        <div className='comment'>
            <a href="/" className="avatar">
                <img src={profile1} alt="Profile picture"></img>
            </a>
            <div className='content'>
            <a href="/" className="author">
            Dev
            </a>
            <div className='metadata'>
                <span className='date'>Today at 8:00 PM</span>
            </div>
            <div className='text'>
                My new blog-post will release
            </div>
            </div>
        </div>
    </div>
        )
}
ReactDOM.render(
    <App/>,document.querySelector('#root')
)