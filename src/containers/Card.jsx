import React from "react";
import style from "./Styles.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
    // acá va tu código
    return (
        <div className={style.cardBox}>
            <button className={style.cardButton} onClick={props.onClose}>
                &times;
            </button>
            <Link to={`/ciudad/${props.id}`} className={style.cardTitle}>
                {props.name}
            </Link>
            <p className={style.property1}>Temp min</p>
            <div className={style.info1}>{props.min}</div>
            <p className={style.property2}>Temp max</p>
            <div className={style.info2}>{props.max}</div>
            <img
                className={style.weatherIcon}
                src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
                alt=""
            />
        </div>
    );
}
