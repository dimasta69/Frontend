import React from "react";
import './Header.css';


const Header = () => {
    let enter = function(event) {
        event.preventDefault();
        let ent = document.getElementById("bglog");
        ent.classList.toggle("hidden");
    }

    let register = function(event) {
        event.preventDefault();
        let ent = document.getElementById("bgreg");
        ent.classList.toggle("hidden");
    }

    return (
        <header>
            <h1>PhotoCraft</h1>
            <div id="logreg" className="logReg">
                <a id="enter" href=" " onClick={enter}>Войти</a>
                <a id="register" href=" " onClick={register} >Регистрация</a>
            </div>
        </header>
    );
}

export default Header;