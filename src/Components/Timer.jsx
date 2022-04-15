import React from 'react';
import '../app.css';


let interval;
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false,
        };
    };
    // Start Timer
    startTimer = () => {
        if(this.state.isStart === false) {
            this.setState({
                isStart: true,
            });
            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1,
                });
    
                if(this.state.second === 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1,
                    });
                };
                if(this.state.minute === 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1,
                    });
                };
            }, 1000);
        }
    };
    // Stop Timer
    stopTimer = () => {
        this.setState({
            isStart: false,
        });
        clearInterval(interval);
    };
    
    resetTimer = () => {
        this.stopTimer();
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
        });
    }

    render() {
        return(
            <>
                <p className="text-center text-gray-100 text-2xl mt-4 animate-pulse shadow-md shadow-slate-900 flex justify-center items-center w-48 py-3 px-7 rounded-lg mx-auto" dir="ltr">
                {`${this.state.hour > 9 ? this.state.hour : '0' + this.state.hour} : ${this.state.minute > 9 ? this.state.minute : '0' + this.state.minute} : ${this.state.second > 9 ? this.state.second : '0' + this.state.second}`}
                </p>
                <div className="flex items-center">
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm mt-5 ml-3 border-2 border-transparent hover:bg-transparent hover:border-slate-900 duration-300 rounded-full w-14 h-14 flex justify-center items-center" onClick={this.startTimer} title="Start">Start</button>
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm mt-5 ml-3 border-2 border-transparent hover:bg-transparent hover:border-slate-900 duration-300 rounded-full w-14 h-14 flex justify-center items-center" onClick={this.stopTimer} title="Stop">Stop</button>
                    <button type="button" className="bg-slate-900 text-white px-4 py-3 text-sm mt-5 ml-3 border-2 border-transparent hover:bg-transparent hover:border-slate-900 duration-300 rounded-full w-14 h-14 flex justify-center items-center" onClick={this.resetTimer} title="Reset">Reset</button>
                </div>
            </>
        );
    };
}

export default Timer;