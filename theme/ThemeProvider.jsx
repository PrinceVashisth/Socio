"use client"
import { createContext, use, useEffect, useState } from "react";

export const theme = createContext()

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("theme"));
      return value || "light";
    }
  };

export const ThemeContext = ({children})=>{

   const [mode,setmode] = useState(() => {
    return getFromLocalStorage();
  });
   const [mess,setmess] = useState(false);
   const [chat,setChat] = useState(false);
   const [SideBar,setSideBar] = useState(false);
   const toggle = ()=>{
    setmode(mode==='light'?"dark":"light");
   }

   const ChatToggle = ()=>{
    setChat(!chat);
   }

   const SideToggle = ()=>{
    setSideBar(!SideBar);
   }  

   const MessageToggle = ()=>{
    setmess(!mess);
   }  

   useEffect(()=>{
    localStorage.setItem('theme',JSON.stringify(mode));
   },[mode]); 
   return(
        <theme.Provider value={{mode,toggle,mess,chat,ChatToggle,MessageToggle,SideBar,SideToggle}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>
        </theme.Provider>
    )
}