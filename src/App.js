import React, { Component } from 'react'
import PTD_EventForm1 from './components/PTD_EventForm1'
import PTD_EventForm2 from './components/PTD_EventForm2';
import PTD_EventForm3 from './components/PTD_EventForm3';
import PTD_EventForm4 from './components/PTD_EventForm4';

class App extends Component {

  render() {
    return (
      <div className='container'>
     <h1> Event  Form Demo - Pham Thanh Dat</h1>
      <PTD_EventForm1/>
      <PTD_EventForm2/>
      <PTD_EventForm3/>
      <PTD_EventForm4 name="Pham Thanh Dat"/>
      </div>
    )
  }
}
export default App;
