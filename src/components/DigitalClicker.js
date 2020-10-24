// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor () {
        super();

        this.state = {
            timesClicked: 0 
        };
    }

    clicks = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    
    
    render () {
        return (
        <div>
        <button onClick={this.clicks}>{this.state.timesClicked}</button>
         </div>
          )  }
}