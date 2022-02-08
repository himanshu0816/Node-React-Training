import React from 'react'
// const Hello=()=><h1>Hello frineds</h1>

const Hello=(props)=>{
    console.log(props)
    return <h1>Hello{props.name} likes {props.movie}</h1>
}
export default Hello;