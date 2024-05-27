import React, { useContext } from 'react'
import Themecontext from './Themecontext'
function Themec() {
    const {theme} = useContext(Themecontext)
  return (
    <div
    style={{
        background : theme === "light" ? "white" : "green",
        width :"50%",
        height : "30vh"
    }}
    ></div>
  )
}

export default Themec