import React from "react";
import style from "./Styles.module.css";

export default function About(props) {
    return (
        <div className={style.aboutContainer}>
            <img
                className={style.aboutSectionImage}
                src="https://wallpaperaccess.com/full/3225176.jpg"
                alt="sunset2"
            />
            <p className={style.aboutTitle}>About</p>
            <p className={style.aboutText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus qui, eveniet sunt, rerum ea porro soluta aperiam
                maiores deleniti unde aut ex voluptatum velit culpa optio
                laudantium similique commodi incidunt? Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. <br /> Repellendus qui,
                eveniet sunt, rerum ea porro soluta aperiam maiores deleniti
                unde aut ex voluptatum velit culpa optio laudantium similique
                commodi incidunt?
            </p>
            <ul className={style.socialMediaBox}>
                <li>
                    <a target="_blank" href="https://codepen.io/dgtgnd">
                        <img
                            className={style.codepenLogo}
                            src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
                            alt="codepen logo"
                        />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/RafaelOviedo">
                        <img
                            className={style.githubLogo}
                            src="https://pngimg.com/uploads/github/github_PNG58.png"
                            alt="github logo"
                        />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/dgtgnd/">
                        <img
                            className={style.instagramLogo}
                            src="https://img.icons8.com/ios-glyphs/452/instagram-circle.png"
                            alt="instagram logo"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}
