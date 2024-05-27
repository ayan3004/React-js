import React, { useState } from 'react'
import Themecontext from './Themecontext'

function Themeprovider({children}) {
    const [theme , settheme] = useState('light')

    const toggletheme = () =>{
         settheme(prevTheme =>(prevTheme === "light" ? "dark" : "light") )
    }
  return (
   <Themecontext.Provider value={{theme , toggletheme}}>
    {children}
   </Themecontext.Provider> 
  )
}

export default Themeprovider