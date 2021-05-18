import React from "react";
import style from "./Styles.module.css";

export default function Ciudad({ city }) {
    if (city) {
        return (
            <div className={style.citySection}>
                <div className={style.infoCityContainer}>
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Length: {city.longitud}º</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div className={style.alternativeText}>City not found</div>;
    }
}
