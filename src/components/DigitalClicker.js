// Code DigitalClicker Component Here
import React, {Component} from 'react';
 
class DigitalClicker extends Component {
 constructor() {
   super()
   // initial state has count set at 0
   this.state = {
    timesClicked: 0
   }
 }
 
 handleClick = () => {
   // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
   let newCount = this.state.timesClicked + 1
   this.setState({
    timesClicked: newCount
   })
 }
 
 render() {
   return (
     <div>
       <button onClick={this.handleClick}>
       {this.state.timesClicked}
         </button>
     </div>
   )
 }
}
 
export default DigitalClicker