import React, { Component } from 'react';
import './DonationUpdator.css'

export default class DonationUpdator extends Component {
    state = {
        progress: 24,
        daysToGo: 1
    };

    handleIncrement = () => {
        if (this.state.progress !== 100) {
            this.setState(prevState => ({ progress: prevState.progress + 1 }),
                () => console.log(this.state.progress));
        }
        else alert("oops, you hit the max value!")
    }

    render() {
        const test = this.state.progress + "%";
        const daysLeft = this.state.daysToGo;
        var style = { width: test }

        return (
            <div className="flex-container">
                <div className="progresss" data-label={`${daysLeft} Days Remaining`}>
                    <span className="value" style={style}></span>
                </div>
                &nbsp;
                <div className="progress" data-label={`${test} completed`}>
                    <span className="value" style={style}></span>
                </div>
                &nbsp;
                <div>
                    <button className="button" onClick={this.handleIncrement}>&#128512; Donate Again</button>
                </div>
            </div>
        )
    }
}
