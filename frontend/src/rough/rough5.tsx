import React from "react";
import { Component } from "react";

class Rough5 extends Component<null,{count:number}>{ //null is props type count is state type
constructor(){

    super(null);
    this.state={
        count:0
    };
    
}
increment=()=>{
this.setState({count:this.state.count+1})
}
decrement=()=>{
    this.setState({count:this.state.count-1})
    }

render() {
    return(
        
        <div>
            <button onClick={this.increment}>+</button>
            <div className="">{this.state.count}</div>
            <button onClick={this.decrement}>-</button>
        </div>
        
    )
}

}

export default Rough5;