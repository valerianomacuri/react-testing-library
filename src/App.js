import { useState } from "react"
import Context from "./components/Context"
import TestHook from "./components/TestHook"
import TestHookContext from "./components/TestHookContext"

const App = () => {
  const [state, setState] = useState("Some Text")
  const [name, setName] = useState("Moe")

  const changeName = () => {
    setName("Steve")
  }

  const changeText = () => {
    setState("Some Other Text")
  }

  return (
    <div className="App">
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName}/>
      <h1> Basic Hook useContext</h1>
      <Context.Provider value={{
          changeTextProp: changeText,
          stateProp: state
      }} >
          <TestHookContext />
      </Context.Provider>
    </div>
  )
} 

export default App