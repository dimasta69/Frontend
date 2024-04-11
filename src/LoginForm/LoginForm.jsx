import { useState } from 'react';
import './LoginForm.css'
import axios from 'axios'; 

function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [lock, unlock] = useState(null);

    const cls = (event) => {
        event.preventDefault();
        let cls = document.getElementById('bglog');
        cls.classList.toggle('hidden');
    }

    const enter = (event) => {
        setLoading(true);

        let form = document.getElementById('logreg');

        let login2 = document.getElementById('login2').value;
        let password2 = document.getElementById('password2').value;
        const url = 'http://127.0.0.1:8000/core_api/auth/token/login/';
            
        const data = {
            username: login2,
            password: password2,
        }


        axios.post(url, data)
          .then(function (response) {
            unlock(response.data.auth_token);
            localStorage.setItem('token', response.data.auth_token);
            console.log(123)
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
            const axiosInstance = axios.create({
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
              }
            })
            axiosInstance.get('http://127.0.0.1:8000/core_api/profile/').then(function(response)
            {
              localStorage.setItem('user_id', response.data.id);
              localStorage.setItem('email', response.data.email);
              localStorage.setItem('username', response.data.username);
              localStorage.setItem('is_active', response.data.is_active);
              localStorage.setItem('image', 'http://127.0.0.1:8000/' + response.data.image);
              window.location.reload()
            }).catch(function (error) {
              console.log(error);
            })

          });
          
        
        let cls = document.getElementById('bglog');
        cls.classList.toggle('hidden');
    }
        
    return (
        <div id="bglog" className="bg hidden">
            <div id="logform" className='logform'>
                <button id="close" className='close' onClick={cls}></button>
                <h1>Login</h1>
                <input className="login" type="text" placeholder='Login' id='login2'/>
                <input className="password" type="password" placeholder='Password' id='password2'/>
                <a href=" ">Google</a>
                <button onClick={enter}>Confirm</button>
                {loading && <div className="loader">Loading..</div>}
            </div>
        </div>
    );
}

export default LoginForm;