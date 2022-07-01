import React, { useState } from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Qrcard from '../Form/Qrcard'
import App from '../../App'
import { createContext } from 'react'
import Forms from '../Form/Forms'

export const myContext=createContext()
const Router = () => {
    
    let [card,setCard]=useState({
        fname:'',
        lname:'',
        occupation:'',
        twitter:'',
        linkedin:'',
        phone:'',
        email:''
    })
    
  return (
    <myContext.Provider value={{card, setCard}}>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='Qrcard' element={<Qrcard/>}/>
        <Route path='Forms' element={<Forms/>}/>
    </Routes>
    </BrowserRouter>
    </myContext.Provider>
  )
}

export default Router