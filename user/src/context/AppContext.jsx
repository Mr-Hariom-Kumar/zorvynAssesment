import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { dataset } from '../dataset/data'
export const AppContext = createContext()

const AppContextProvider=(props)=> {
const [darkMode, setDarkMode] = useState(
  localStorage.getItem('darkMode') === 'true'
)
const [token,setToken]=useState(
  localStorage.getItem('token')==='true'
)

const [admin,setAdmin]=useState(
  localStorage.getItem('admin')==='true'
)
const [open, setOpen] = useState(false);
const [collapsed, setCollapsed] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  var curryear=dataset[dataset.length-1].year
  const [selectedYear, setSelectedYear] = useState(curryear)
useEffect(()=>{
    console.log("Welcome Back Hari")
    
},[])

useEffect(() => {
  localStorage.setItem('darkMode', darkMode)
}, [darkMode])

useEffect(() => {
  localStorage.setItem('token', token)
}, [token])
useEffect(()=>{
  localStorage.setItem('admin',admin)
},[admin])
const value={darkMode,setDarkMode,open,setOpen,toggleDrawer,collapsed,setCollapsed,selectedYear,setSelectedYear,token,setToken,admin,setAdmin}
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
