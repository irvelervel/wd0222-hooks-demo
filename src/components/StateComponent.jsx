import { useState } from 'react'
// useState brings state functionality in functional components!

// 2 GOLDEN RULES OF HOOKS:
// 1) React Hooks can be used just in React Functional Components
// (no class components, no generic JS (you must be in a react component))
// 2) Use React Hooks at the TOP LEVEL of your component (not inside a loop,
// not inside an if/else statement, not inside other functions!)

// state = {
//     counter: 0 // <-- we're taking this out and declaring it!
// }

const StateComponent = () => {
  // right here!
  const [counter, setCounter] = useState(0)
  // the first element is the state variable itself!
  // the second element is a function (the only one) capable of changing its value
  // the initial value of the stae variable is going to be taken from the argument you invoke useState with
  const [username, setUsername] = useState('Marios')

  return (
    <div>
      <h2>STATE HOOK EXAMPLE</h2>
      <div>
        <div>Current user is {username}</div>
        <button onClick={() => setUsername('Naveen')}>CHANGE USER</button>
        <div>The value of the counter is: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>
          INCREASE COUNTER
        </button>
        <button onClick={() => setCounter(counter - 1)}>
          DECREASE COUNTER
        </button>
      </div>
    </div>
  )
}

export default StateComponent
