import React from 'react'
import style from './navbar.module.css'
import {Link} from 'react-router-dom'

function Navbar({title}) {
  return (
    <div className={style["container__navbar"]}> 
      <div className={style["wrap__navbar"]}>
        <div className={style["navbar__contents"]}>
          <Link to="/" className={style["title"]}>{title}</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
