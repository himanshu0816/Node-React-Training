import React from "react";
import {Link,Navlink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <nav className="ui raised very padded segment">
            <a className="ui teal invetred segment"> Aapna Infotech</a>
            <div className="ui right floated header">
                <button className="ui button">
                    <link to="/">Home</link>
                </button>
                <button className="ui button">
                    <link to="/">About</link>
                </button>
                <button className="ui button">
                    <link to="/">Contact</link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar