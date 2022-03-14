import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = good + neutral + bad;
  const average = (good - bad) / Math.max(all, 1);
  const positive = ((good / Math.max(all, 1)) * 100).toString() + ' %';

  return (
    <>
      <h1>Statistics</h1>
      {all > 0 ?
      <>
        <table>
          <tbody>
            <StatisticLine name={'good'} value={good} />
            <StatisticLine name={'neutral'} value={neutral} />
            <StatisticLine name={'bad'} value={bad} />
            <StatisticLine name={'all'} value={all} />
            <StatisticLine name={'average'} value={average} />
            <StatisticLine name={'positive'} value={positive} />
          </tbody>
        </table>
      </>
      :
      <p>No feedback given</p>
      }
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick(props.name)}>{props.name}</button>
  )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (btnType) => {
    switch (btnType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={(name) => handleClick(name)} name={'good'}/>
      <Button handleClick={(name) => handleClick(name)} name={'neutral'}/>
      <Button handleClick={(name) => handleClick(name)} name={'bad'}/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App