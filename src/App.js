import './App.css'
import EffectComponent from './components/EffectComponent'
// import StateComponent from './components/StateComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StateComponent /> */}
        <EffectComponent name="Stefano" />
      </header>
    </div>
  )
}

export default App
