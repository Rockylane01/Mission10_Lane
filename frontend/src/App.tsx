import './App.css'
import BowlerList from './BowlerList'

function Welcome() {
  return (
    <>
      <h1>Welcome to the Bowling League List!</h1>
      <p>This is a simple list of bowlers in the league that are from the Marlins or Sharks teams.</p>
    </>
  )
}

function App() {
  return (
    <>
      <Welcome />
      <br />
      <BowlerList />
    </>
  )
}

export default App
