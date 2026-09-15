import { useState } from 'react'

const Button = (props) => {
  return ( 
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {(props.good - props.bad) / props.all || 0}</p>
      <p>positive {props.good / props.all * 100 || 0} %</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App