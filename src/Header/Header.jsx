import React from "react";
import './Header.css';


const Header = () => {
    let enter = function(event) {
        event.preventDefault();
        let ent = document.getElementById("logform");
        console.log(ent);
        ent.classList.toggle("hidden");
        console.log(ent);
    }

    let register = function(event) {
        event.preventDefault();
        let ent = document.getElementById("regform");
        ent.classList.toggle("hidden");
    }

    return (
        <header>
            <h1>PhotoCraft</h1>
            <div className="logReg">
                <a id="enter" href=" " onClick={enter}>Войти</a>
                <a id="register" href=" " onClick={register} >Регистрация</a>
            </div>
        </header>
    );
}

export default Header;