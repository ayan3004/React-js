import React, { useContext } from 'react'
import Themecontext from './Themecontext'
function Themecomponent() {
    const {theme} = useContext(Themecontext)
  return (
    <div
    style={{
        background : theme === "light" ? "white" : "orange",
        height : "30vh",
        width :"50%"
    }}
    ></div>
  )
}

export default Themecomponent