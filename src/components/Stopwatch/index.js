// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimerRunning: false,
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  clearTimer = () => clearInterval(this.intervalId)

  incrementTimeInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.incrementTimeInSeconds, 1000)
  }

  onClickStop = () => {
    this.clearTimer()
  }

  onClickReset = () => {
    this.clearTimer()
    this.setState({
      timeElapsedInSeconds: 0,
    })
  }

  displayTimer = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const displayMinutes = minutes > 9 ? minutes : `0${minutes}`
    const displaySeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${displayMinutes}:${displaySeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="display-timer">{this.displayTimer()}</h1>
          <div>
            <button
              type="button"
              className="button bg-green"
              onClick={this.onClickStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button bg-red"
              onClick={this.onClickStop}
              disabled={isTimerRunning}
            >
              Stop
            </button>
            <button
              type="button"
              className="button bg-yellow"
              onClick={this.onClickReset}
              disabled={isTimerRunning}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
