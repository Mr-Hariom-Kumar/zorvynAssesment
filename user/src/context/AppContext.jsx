import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

const AppContextProvider=(props)=> {
const [darkMode, setDarkMode]=useState("false");
const [open, setOpen] = useState(false);
const [collapsed, setCollapsed] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

useEffect(()=>{
    console.log("Welcome Back Hari")
    
},[])
const value={darkMode,setDarkMode,open,setOpen,toggleDrawer,collapsed,setCollapsed}
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
