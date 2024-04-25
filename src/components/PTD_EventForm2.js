
import React from 'react'

export default function PTD_EventForm2() {
    // dinh nghia cac ham xu ly su kien
const eventHandleClick1=(content)=>{
    console.log('===================');
    console.log('content');
    console.log('===================');
}
  return (
    <div className='alert alert-success'>
        <h2>Event Demo-Function Component-Pham Thanh Dat</h2>
        <button onClick={eventHandleClick1("Pham Thanh Dat")}> Goi khi Rebder</button>
        <button  onClick={eventHandleClick1("K22CNT3-ReactJs")}> Goi khi Click</button>
    </div>
  )
}


