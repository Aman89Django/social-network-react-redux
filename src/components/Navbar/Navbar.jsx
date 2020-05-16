import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return<nav className={s.nav}>
        <div className={s.button}>
            <NavLink to='/profile' activeClassName={s.active} className={s.button_link}>Profile</NavLink>
        </div>
        <div className={s.button}>
            <NavLink to='dialogs' activeClassName={s.active} className={s.button_link}>Messages</NavLink>
        </div>
        <div className={s.button}>
            <NavLink to='news' activeClassName={s.active} className={s.button_link}>News</NavLink>
        </div>
        <div className={s.button}>
            <NavLink to='music' activeClassName={s.active} className={s.button_link}>Music</NavLink>
        </div>
        <div className={s.button}>
            <NavLink to='setting' activeClassName={s.active} className={s.button_link}>Setting</NavLink>
        </div>
    </nav>
}

export default  Navbar;