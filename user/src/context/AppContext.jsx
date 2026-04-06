import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { dataset } from '../dataset/data'
export const AppContext = createContext()

const AppContextProvider=(props)=> {
const [darkMode, setDarkMode]=useState("false");
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
const value={darkMode,setDarkMode,open,setOpen,toggleDrawer,collapsed,setCollapsed,selectedYear,setSelectedYear}
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
