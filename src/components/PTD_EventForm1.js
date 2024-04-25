import React, { Component } from 'react'

export default class PTD_EventForm1
 extends Component {
    // ham xy ly su kien
    eventHandleClick1 = ()=>{
        alert("event handle 1");
    }
    eventHandleClick2(){
        alert("event handle 2");
    }
  render() {
    return (
      <div className='alert alert-danger'>
      <h2> Event Handle- Pham Thanh Dat</h2>
      {/* goi ham xu ly su kien khi reader */}
      <button onClick={this.eventHandleClick1()}>Click1</button>
        {/* goi ham xu ly su kien khi Click */}
        <button onClick={this.eventHandleClick2()}>Click2</button>
      </div>
    )
  }
}
