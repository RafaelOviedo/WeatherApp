import React, { useState } from "react";
import style from "./Styles.module.css";

export default function SearchBar(props) {
    const [city, setCity] = useState("");
    // acá va tu código
    return (
        <form
            className={style.searchBar}
            onSubmit={(event) => {
                event.preventDefault();
                props.onSearch(city);
                setCity("");
            }}
        >
            <input
                className={style.searchBarInput}
                type="text"
                placeholder="  Search your city..."
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <input
                type="submit"
                value="Search"
                className={style.searchBarBtn}
            />

            <hr />
        </form>
    );
}
