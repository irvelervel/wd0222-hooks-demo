import { useEffect, useState } from 'react'
// useEffect is a replacement for the most used lifecycle react methods
// e.g. componentDidMount, componentDidUpdate

// 2 GOLDEN RULES OF HOOKS:
// 1) React Hooks can be used just in React Functional Components
// (no class components, no generic JS (you must be in a react component))
// 2) Use React Hooks at the TOP LEVEL of your component (not inside a loop,
// not inside an if/else statement, not inside other functions!)

const EffectComponent = ({ name }) => {
  useEffect(
    () => {
      console.log('this is like componentDidMount')
    },
    [
      // this tells the hook HOW OFTEN to invoke the callback again
      // it's called array of dependencies, since everything you're going to
      // put here is going to be watched, and upon ANY change the callback
      // will be invoked again
    ]
  )
  // this is a direct replacement of componentDidMount!
  // it is guaranteed to be executed just once, since I'm leaving the dependency array
  // empty

  const [counter, setCounter] = useState(0)

  const [color, setColor] = useState('red')

  useEffect(() => {
    console.log('counter value just changed!')
  }, [counter]) // everytime counter changes, console log happens again
  // this can be seen as a componentDidUpdate, with a check on the value
  // of counter from the state
  //   if(prevState.counter !== this.state.counter)

  useEffect(() => {
    console.log('color value just changed!')
  }, [color]) // everytime color changes, console log happens again

  useEffect(() => {
    // console.log('when are we going to see this?')
    // setCounter(counter + 1) // <-- beware!
  }) // works like a componentDidUpdate but without any check

  return (
    <div>
      <h3>EFFECT HOOK</h3>
      <div>
        <p>Counter value: {counter}</p>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        <div>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
      </div>
      <div style={{ backgroundColor: color }}>
        <h4>WOW, SO MUCH {color}</h4>
        <button onClick={() => setColor(color === 'red' ? 'green' : 'red')}>
          CHANGE COLOR
        </button>
      </div>
    </div>
  )
}

export default EffectComponent
