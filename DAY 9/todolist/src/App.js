import React from 'react';
import img from './todolist.png'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newItem:"",
      list:[]
    }
  }

  addItem(todoValue) {
    if(todoValue!==""){
        const newItem ={ // make object of new item
          id:Date.now(),
          value:todoValue,
          isDone:false
        }
        const list = [...this.state.list]; // fetch all previous value of list
        list.push(newItem);// add new item in the list

        this.setState({ // set item in the list
          list,
          newItem:""
        })
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id != id)
    this.setState({list:updatedList})
  }

  updateInput(input){
    this.setState({newItem:input})
  }

  render(){
    return (
      <div>
        <img src={img} width={100} height={100} className="logo"/>
        <h1 className="app-title">React TODO App</h1>
        <div className="container">
          Add an Item...
          <br/>
          <input
          type="text"
          className="input-text"
          placeholder="Enter Your Task"
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          />
          <button 
          className="add-btn"
          onClick={()=>this.addItem(this.state.newItem)}
          >Add</button>
          <div className="list">
            <ul>
              {this.state.list.map(item =>{
                return (
                  <li>
                <input type="checkbox"  checked={item.isDone}/>
                {item.value}
                <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
              </li>
                  
                )
              })}
              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
