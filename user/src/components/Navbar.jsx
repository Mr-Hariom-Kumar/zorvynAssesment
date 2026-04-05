import React, { useContext, useState } from 'react'
//import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { AppContext } from '../context/AppContext'
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const navigate=useNavigate()
    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken]=useState("");
    const {darkMode, setDarkMode}=useContext(AppContext)
    const {active,setActive}=useState(false)


    const logout=async (req,res)=>{
       // localStorage.removeItem("token")
        setToken('')
        //navigate('/')
    }
  return (
    
    <div className={`${darkMode?'bg-dark text-white shadow-slate-900':'bg-light'} flex items-center    justify-between text-sm py-3  px-4  shadow-lg  rounded-sm`}>
        <MenuIcon sx={{ fontSize: 36, display: { xs: 'block', md: 'none' } }} onClick={()=>{setShowMenu(true)}} className='cursor-pointer'/>
        <ul className='hidden md:flex items-start gap-5 font-medium' >
            <NavLink to='/' className='max-md:hidden' >
                <li className='py-1' >LOGO</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' ></hr>
            </NavLink>
            <NavLink to='/' >
                <li className='py-1' >Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' ></hr>
            </NavLink>

            <NavLink to='/doctors' >
                <li className='py-1' >Services</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' ></hr>
            </NavLink >

             <NavLink to='/about' >
                <li className='py-1' >About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' ></hr>
            </NavLink>
             <NavLink to='/contact' >
                <li className='py-1' >Help & Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' ></hr>
            </NavLink>    
        </ul>
        

        <div className='flex items-center gap-4'>
                <div onClick={()=>setDarkMode(!darkMode)} className='flex items-center gap-2 cursor-pointer border py-1 px-2 rounded-full '>
                    {
                        darkMode?
                        <DarkModeOutlinedIcon/>
                        :<DarkModeIcon />
                        
                    }
                    
                </div>
                <div>

                </div>
            {
                token?
                <div className='flex items-center gap-2 cursor-pointer group relative' >
                    <AccountCircleIcon sx={{ fontSize: 36 }} />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={()=>navigate('/my-profile')} className='hover:bg-primary hover:text-white cursor-pointer w-full px-3 py-2 rounded '>My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:bg-primary hover:text-white cursor-pointer w-full px-3 py-2 rounded '>My Appointments</p>
                            <p onClick={logout} className='hover:bg-primary hover:text-white cursor-pointer w-full px-3 py-2 rounded '>Logout</p>
                        </div>
                    </div>
                </div>: 
                <button onClick={()=>setToken("token")} className={`${darkMode?'bg-white text-black':'bg-black text-white'} px-3  py-2 rounded-lg font-semibold hidden md:block cursor-pointer`} >Create Account</button>

            }
            
            <div className={`${showMenu? 'fixed w-full':'h-0 w-0'} md:hidden left-0 top-0 bottom-0 z-20 overflow-hidden  ${darkMode?'bg-black/10 text-white':'bg-white/10 text-black'} backdrop-blur-md`}>
                <div className='flex items-center justify-between px-5 py-6' >
                    <img className='w-36'  alt="LOGO" />
                    <CloseIcon className='w-7 cursor-pointer' onClick={()=>setShowMenu(false)} />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=>{setShowMenu(false)}} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                    <NavLink  onClick={()=>{setShowMenu(false)}} to='/doctors'><p className='px-4 py-2 rounded inline-block'>Services</p></NavLink>
                    <NavLink  onClick={()=>{setShowMenu(false)}} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                    <NavLink  onClick={()=>{setShowMenu(false)}} to='/contact'><p className='px-4 py-2 rounded inline-block'>Help & Contacts</p></NavLink>
                    <NavLink  onClick={()=>{setShowMenu(false),setToken(!token)}} to='/Home'><p className='px-4 py-2 rounded inline-block'>{token?"Logout":"Login"}</p></NavLink>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar
