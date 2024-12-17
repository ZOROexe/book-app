import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <main className='min-h-screen max-w-screen-xl mx-auto px-4 py-6'>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
