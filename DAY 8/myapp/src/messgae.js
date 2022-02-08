import React,{Component} from "react";
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welocme to your menu select items'
        }
    }
    updateMessage(){
        this.setState({
            message:'Thanks for choosing us'
        })
    }
    render(){
        return(
            <div>
                <h1>this.state.message</h1>
                <button onClick={()=>this.updateMessage()}> subscribe</button>
            </div>
        )
    }
}
