import './RegistrationForm.css'
import axios from 'axios';

function RegistrationForm() {
    let cls = function(event) {
        event.preventDefault();
        let cls = document.getElementById('bgreg');
        cls.classList.toggle('hidden');
    }


    let enter = () => {       
        let login1 = document.getElementById('login').value
        let email1 = document.getElementById('email').value
        let password1 = document.getElementById('password').value
        const url = 'http://127.0.0.1:8000/core_api/auth/users/';
            
        const data = {
            email: email1,
            username: login1,
            password: password1,
        }

        axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <div id="bgreg" className="bg hidden">
            <div id="regform" className='regform'>
                <button id="close" className='close' onClick={cls}></button>
                <h1>Регистрация</h1>
                {/* <input className="name" type="text" placeholder='First Name'/>
                <input className="surname" type="text" placeholder='Last Name'/> */}
                <input className="login" type="text" placeholder='Login' id='login'/>
                <input className="email" type="text" placeholder='Email' id='email'/>
                <input className="password" type="password" placeholder='Password' id='password'/>
                <input className="confirmPassword" type="password" placeholder='Confirm password'/>
                <a href=" ">Google</a>
                <button onClick={enter}>Confirm</button>
            </div>
        </div>
    );
}

export default RegistrationForm;