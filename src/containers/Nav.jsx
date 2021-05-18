import React from "react";
import SearchBar from "./SearchBar.jsx";
import style from "./Styles.module.css";
import { Link } from "react-router-dom";
import About from "./About.jsx";

function Nav(props) {
    return (
        <nav className={style.navBar}>
            <div className={style.navBarLogo}>LOGO</div>
            <SearchBar onSearch={props.onSearch} />
            <ul className={style.navMenu}>
                <Link className={style.navItem} to="/">
                    Home
                </Link>
                <Link className={style.navItem} to="/weatherSection">
                    Weather Section
                </Link>
                <Link className={style.navItem} to="/about">
                    About
                </Link>
                {/* <Link className={style.navItem} to="/footer">
                    Footer
                </Link> */}
            </ul>
        </nav>
    );
}

export default Nav;
