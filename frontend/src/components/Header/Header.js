import React from 'react';
import "./Header.css"
import { Button } from 'bootstrap'
const Header = () => {
    return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/todos">My tasks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/todos/add">Add tasks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth">Login</a>
          </li>
        </ul>
        /*<div className={"header_wrapper"}>

            <div className={"header_main_menu"}>
                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={"/"}> Home </a>
                </div>

                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={"/todos"}> My tasks </a>
                </div>
            </div>


            <div className={"header_add_menu"}>
                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={'/todos/add'}>Add task</a>
                </div>
            </div>

            <div className={"header_login_menu"}>
                <div className={"header_el_wrapper"}>
                    <a className={"header_el"} href={"/auth"}> Login </a>
                </div>
            </div>

        </div>8*/
    );
};

export default Header;