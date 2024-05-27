import React from 'react'
import { useContext } from 'react'
import Themecontext from './Themecontext'
function Toggletheme() {
    const {theme , toggletheme}=useContext(Themecontext)
  return (
   <button onClick={toggletheme}>
    Switch to {theme === "light" ? "dark" : "light"}

   </button>
  )
}

export default Toggletheme