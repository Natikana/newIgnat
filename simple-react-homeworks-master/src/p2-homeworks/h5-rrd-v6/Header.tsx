import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import cl from "./Header.module.css"


function Header() {
    const [act, setAct] = useState(true)
    return (
        <div onClick={() => {setAct(!act)}} className={ act ? cl.hidden_menu  : `${cl.hidden_menu} ${cl.active}` }>
            <NavLink className={cl.link} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink className={cl.link} to={PATH.JUNIOR}> Junior </NavLink>
            <NavLink className={cl.link} to={PATH.SUPER_JUNIOR}>Super-junior </NavLink>
        </div>
    )
}

export default Header
