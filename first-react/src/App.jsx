import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0) //useState is the react hook is used to hook into a state variable
  //count is the current value of the state variable 
  //setCount is the function that is used to update the state variable 
  return (
    <>
      <h1>Rohit solanki this side ,How are you</h1>
      <button onClick={() => setCount(c => c +1)}>Click here!!</button>
      <h1>{count}</h1>
    </>
  )
}

export default App
