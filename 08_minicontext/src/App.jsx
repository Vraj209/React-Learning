

import './App.css'
import Login from './components/Login'
import Profie from './components/Profie'

import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1>React </h1>
      <Login />
      <Profie/>
    </UserContextProvider>
  )
}

export default App
