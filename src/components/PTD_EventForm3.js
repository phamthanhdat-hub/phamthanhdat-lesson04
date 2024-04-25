import React, { Component } from 'react'
//xu ly du lieu  voi porps,state
 class PTD_EventForm3 extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu thong qua state
        this.state={
            name:"Pham Thanh Dat",
            job:"Dev soft"
        }
    }
    // ham xu ly su kien 
    handleChangeName=()=>{
        this.setState({
            name:"K22CNT3-reactJs"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            name:"Cong nghe phan mem"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2> Thay doi du lieu trong state </h2>
        <p> Du lieu :{ this.state.name}.{this.state.job}</p>
        <button onClick={this.handleChangeName} Thay doi name></button>
        <button onClick={this.handleChangeJob} Thay doi Job></button>
      </div>
    )
  }
}
export default PTD_EventForm3;