import { useState } from 'react'


const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>
const TotalFeedback = ({ good, bad, neutral }) => {
  return (
  good + neutral + bad
  )
}
const Average = ({good, neutral, bad}) => {
  const points = { good: 1, neutral: 0, bad: -1 }
  const totalFeedback = good + bad + neutral  

  let goodPoints = good * points.good
  let badpoints = bad * points.bad
  const totalPoints = goodPoints + badpoints 

  return (
    totalPoints / totalFeedback 
  )
}


const PositivePercentaje = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  
  return (
    good / totalFeedback * 100
  )
}


const StatisticLine = ({text, value}) => {
  return (
    <p> {text} : {value} </p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <div>
        <StatisticLine text="Good Feedback" value={good} />
        <StatisticLine text="Neutral Feedback" value={neutral} />
        <StatisticLine text="Bad Feedback" value={bad} />
        <StatisticLine text="Total Feedback" value={<TotalFeedback good={good} bad={bad} neutral={neutral} />} />
        <StatisticLine text="Average" value={<Average good = {good} neutral={neutral} bad={bad} />} />
        <StatisticLine text="Positive" value={<PositivePercentaje good={good} neutral={neutral} bad={bad} />} />
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickgood = () => setGood(good + 1)
  const handleClickneutral = () => setNeutral(neutral + 1)
  const handleClickbad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick = {handleClickgood} text = "good" />
        <Button handleClick = {handleClickneutral} text = "neutral" />
        <Button handleClick = {handleClickbad} text = "bad" />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App