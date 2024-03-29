import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([]);

  const next = () => {
    if (selected === anecdotes.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }

  const vote = () => {
    const votesCopy = [...votes]
    if (votesCopy[selected]) {
      votesCopy[selected] += 1;
    } else {
      votesCopy[selected] = 1;
    }
    setVotes(votesCopy);
  }

  const mostVotes = () => {
    let m = 0;
    let i = 0;
    votes.forEach((v, index) => {
      if (v > m) {
        m = v;
        i = index;
      }
    })
    return i;
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>
      {anecdotes[selected]}
    </div>
    <p>has {votes[selected] ? votes[selected] : 0} votes</p>
    <button onClick={() => next()}>next anecdote</button>
    <button onClick={() => vote()}>vote</button>
    <h1>Anecdote with most votes</h1>
    <div>
      {anecdotes[mostVotes()]}
    </div>
    </>
  )
}

export default App