import React, { Component } from 'react'
interface State {
    name : string ;
} 
interface Props {
}
export default class Class extends Component<Props, State> {
  constructor (props : Props){
    super(props);
    this.state = {
        name : " penose DG ",
    }
  }
  handleClick =() => {
    this.setState {name : "dao duc dep tra vcl "}
  }
    render() {
    return (
      <div>
        Class 
        <p>xin chao {this.state.name} </p>
        <button onClick = { this.handleCick}> click </button>
      </div>
    )
  }
}
