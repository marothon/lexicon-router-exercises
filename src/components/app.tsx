import { Outlet } from 'react-router-dom'
import './app.css'
import Header from './header'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
