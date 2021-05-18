import React from "react";
import Card from "./Card.jsx";
import style from "./Styles.module.css";

export default function Cards({ cities, onClose }) {
    return (
        <div className={style.cardsSection}>
            <div className={style.cardsTextContainer}>
                <div className={style.arrowUp}>⬆️</div>
                <p>Find your city in the SearchBar</p>
                <p>For more info about your city click in the name</p>
            </div>
            {cities.map((ciudad) => (
                <Card
                    min={ciudad.min}
                    max={ciudad.max}
                    name={ciudad.name}
                    img={ciudad.img}
                    onClose={() => onClose(ciudad.id)}
                    key={ciudad.id}
                    id={ciudad.id}
                />
            ))}
        </div>
    );
}
