import React from "react";
import "./banner.scss";

function Banner() {
    return(
        <div className="header">
            <div className="header__logo">
                <img src="kasa.png" alt="logo de Kasa"></img>
            </div>
            <div className="header__links">
                <button>Accueil</button>
                <button>A propos</button>
            </div>
            
        </div>
    )
}

export default Banner;