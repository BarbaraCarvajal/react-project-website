import { useState } from 'react'
import './App.css'
import NavBarPrincipal from './components/NavBarPrincipal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <div className="App">
        <NavBarPrincipal />
        <Banner />

      </div>
    </>
  )
}

export default App
