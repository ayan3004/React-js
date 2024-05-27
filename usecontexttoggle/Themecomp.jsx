import React, { useContext } from 'react'
import Themecontext from './Themecontext'
function Themecomp() {
    const {theme} = useContext(Themecontext)
  return (
    <div
    style={{
        background : theme === "light" ? "white" : "white",
        width :"50%",
        height : "30vh"
    }}
    ></div>
  )
}

export default Themecomp