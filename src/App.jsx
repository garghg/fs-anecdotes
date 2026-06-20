import { useEffect, useState } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { useAnecdoteActions } from './anecdoteStore'
import Notification from './components/Notification'

const App = () => {
  const [show, setShow] = useState(false)
  const { initialize } = useAnecdoteActions()

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <button onClick={() => setShow(!show)} >Add Anecdote</button>
      {show &&
        <AnecdoteForm />
      }
    </div>
  )
}

export default App
