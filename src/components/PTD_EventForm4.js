
import React, { Component } from 'react'

 class PTD_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Thanh Dat"
        }
    }
    handleGetName=()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>lay du lieu tu props </h2>
        <button onClick={this.handleGetName}> Lay ten</button>
    <h2> Wellcome to, {this.props.name}</h2>
      </div>
    )
  }
}
export default PTD_EventForm4;
