
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router'

function App() {
  


  return (
    <>
    <Sidebar/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
