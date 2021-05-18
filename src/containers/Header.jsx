import React from "react";
import style from "./Styles.module.css";

export default function Header(props) {
    return (
        <div className={style.headerContainer}>
            <h1 className={style.mainTitle}>My Weather App</h1>
            <p className={style.subTitle}>
                You can check the weather in the Weather Section
            </p>
            <img
                className={style.headerImage}
                src={`https://fondosmil.com/fondo/33595.jpg`}
                alt="sunset"
            />
        </div>
    );
}
