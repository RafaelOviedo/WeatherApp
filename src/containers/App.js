import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";
import "./App.css";
import About from "./About.jsx";
import Ciudad from "./Ciudad.jsx";

function App() {
    const [cities, setCities] = useState([]);
    function onSearch(ciudad) {
        const apiKey = "b962bea41d7b3b0eb8d8dfb7906e2978";
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
        )
            .then((r) => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon,
                    };
                    setCities((oldCities) => [...oldCities, ciudad]);
                } else {
                    alert("City not found");
                }
            });
    }
    function onClose(id) {
        setCities((oldCities) =>
            oldCities.filter((ciudad) => ciudad.id !== id)
        );
    }
    function onFilter(ciudadId) {
        let ciudad = cities.filter(
            (ciudad) => ciudad.id === parseInt(ciudadId)
        );
        if (ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
    }

    return (
        <div className="App">
            <Route path="/" render={() => <Nav onSearch={onSearch} />} />
            <Route exact path="/" component={Header} />
            <Route
                path="/weatherSection"
                render={() => <Cards cities={cities} onClose={onClose} />}
            />
            <Route path="/about" component={About} />
            <Route
                exact
                path="/ciudad/:ciudadId"
                render={({ match }) => (
                    <Ciudad city={onFilter(match.params.ciudadId)} />
                )}
            />
        </div>
    );
}

export default App;
