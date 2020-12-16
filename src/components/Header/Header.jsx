import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png"/>
            <div className={s.info}>
                {props.authData.isAuth&&  props.authData.email}
                {props.authData.isAuth&& <button onClick={props.logout}>Logout</button>}
                {!props.authData.isAuth&& <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;