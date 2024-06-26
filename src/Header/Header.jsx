import './Header.css';
import axios from "axios";

import React, { useState } from 'react';


const Header = () => {
    let enter = function(event) {
        event.preventDefault();
        let ent = document.getElementById("bglog");
        ent.classList.toggle("hidden");
    }


    const axiosInstance = axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      });
    

    let leave = function() {
        axiosInstance.post('/core_api/auth/token/logout/')
        .then(function (response) {
            localStorage.setItem('token', response.data.auth_token);
            localStorage.clear();
            window.location.replace("/")
          })
          .catch(function (error) {
            console.log(error);
          });
          localStorage.clear()
          window.location.href = "/core_api";
    }


    let register = function(event) {
        event.preventDefault();
        let ent = document.getElementById("bgreg");
        ent.classList.toggle("hidden");
    }

    if (localStorage.getItem('token'))
    {
        return (
            <header>
                <h1><a href="/">PhotoCraft</a></h1>
                <div id="logreg" className="logReg">
                <a id="cabinet" className="cabinet" href="/profile">Личный кабинет</a>
            <a id="my-photos" className="my-photos" href="/my_photo/status/Published">Мои фото</a>
            <a id="leave" className="leave" href="/" onClick={leave}>Выйти</a>
                </div>
            </header>
    );
    }
    else {
        return (
            <header>
                <h1><a href="/">PhotoCraft</a></h1>
                <div id="logreg" className="logReg">
                    <a id="enter" href=" " onClick={enter}>Войти</a>
                    <a id="register" href="" onClick={register} >Регистрация</a>
                </div>
            </header>
    );
    }
    
}

export default Header;