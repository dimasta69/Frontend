import './RegistrationForm.css'
import axios from 'axios';
import { useState } from 'react'

function RegistrationForm() {
    let cls = function(event) {
        event.preventDefault();
        let cls = document.getElementById('bgreg');
        cls.classList.toggle('hidden');
        setMessage(null)
    }

    let login2
    let password2

    const [message, setMessage] = useState(null);

    const handleKeyPress = (event) => {
      if (event.key == 'Enter')
        {
          enter();
        }
    }
    
    let enter = () => {     

        let login1 = document.getElementById('login').value
        let email1 = document.getElementById('email').value
        let password1 = document.getElementById('password').value
        const url = '/core_api/auth/users/';
            
        const data = new FormData();
        data.append('email', email1);
        data.append('username', login1);
        data.append('password', password1);

        axios.post(url, data)
          .then(function (response) {
            console.log(response);
            login2 = login1
            password2 = password1
            setMessage('Перейдите по ссылке, отправленной вам на почту. После нажмите кнопку "Почта подтверждена".')
          })
          .catch(function (error) {
            console.log(error)
            setMessage(error.message)
          });
    }

    let enter1 = () => {     
      const url4 = '/core_api/auth/token/login/';
          
      const data3 = new FormData();
      data3.append('username', document.getElementById('login').value);
      data3.append('password', document.getElementById('password').value);

      axios.post(url4, data3)
          .then(function (response) {
            localStorage.setItem('token', response.data.auth_token);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            const axiosInstance = axios.create({
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
              }
            })
            axiosInstance.get('/core_api/profile/').then(function(response)
            {
              localStorage.setItem('user_id', response.data.id);
              localStorage.setItem('email', response.data.email);
              localStorage.setItem('username', response.data.username);
              localStorage.setItem('password', response.data.username);
              localStorage.setItem('is_active', response.data.is_active);
              localStorage.setItem('image', response.data.image)
              window.location.reload()
            }).catch(function (error) {
              console.log(error);
            })

          });
  }


    return(
      <div id="bgreg" className="bg hidden">
          <div id="regform" className='regform'>
              <button id="close" className='close' onClick={cls}></button>
              <h1>Регистрация</h1>
              <input className="login" type="text" placeholder='Login' id='login'/>
              <input className="email" type="text" placeholder='Email' id='email'/>
              <input className="password" type="password" placeholder='Password' id='password'/>
              <input className="confirmPassword" type="password" placeholder='Confirm password'/>
              <a className='google' href="/core_api/social/login/google-oauth2/">Google</a>
              <button className='buttons' onClick={enter}>Зарегестрироваться</button>
              {message && <p className='reg'>{message}</p>}
              <button className='buttons' onClick={enter1}>Почта подтверждена</button>
          </div>
      </div>
  );

}

export default RegistrationForm;