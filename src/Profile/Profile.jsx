import React, { useState, useEffect, useLocation } from 'react';
import "./Profile.css";
import image123 from './123.png';
import  axios  from 'axios';

const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });
  

const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(localStorage.getItem('image'))

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('token');
    
    if (accessToken && !localStorage.getItem('token')) {
      localStorage.setItem('token', accessToken);
      handleRefreshToken();
    }
    else if (!localStorage.getItem('token') && localStorage.getItem('password') && localStorage.getItem('username'))
      {
        const url = '/core_api/auth/token/login/';
            
        const data = {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password'),
        }

        axios.post(url, data)
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
              localStorage.setItem('is_active', response.data.is_active);
              localStorage.setItem('image',  response.data.image);
              window.location.reload()
            }).catch(function (error) {
              console.log(error);
            })

          });
      }
  }, []);





  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSavePhoto = () => {
    if (photo) {
      const formData = new FormData();
      formData.append('image', photo);
  
      axiosInstance.post('/core_api/profile/', formData)
        .then(response => {
          localStorage.setItem('image', response.data.image)
          window.location.reload()
        })
        .catch(error => {
        });
    }
  };


  const handleRefreshToken = () => {
    const data4 = new FormData();
    data4.append('username', localStorage.getItem('username'));
    data4.append('password', localStorage.getItem('password')); 

    const url = '/core_api/auth/token/refresh/';

    axios.post(url, data4)
        .then(function (response) {
            localStorage.setItem('token', response.data.auth_token);
            // Проверяем успешность обновления токена
            if(response.data.auth_token) {
                window.location.reload();
            } else {
                console.log('Не удалось обновить токен');
            }
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
            axiosInstance.get('/core_api/profile/').then(function(response) {
                localStorage.setItem('user_id', response.data.id);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('is_active', response.data.is_active);
                localStorage.setItem('password', response.data.username);
                localStorage.setItem('image', response.data.image)
                if(response.data.id) {
                    window.location.reload();
                } else {
                    console.log('Не удалось получить данные профиля');
                }
            }).catch(function (error) {
                console.log(error);
            })
        });

};

  return (
    <div className='Profile'>
      <img src={localStorage.getItem('image')} className='image1' alt="описание_картинки"></img>
      <input type="file" onChange={handlePhotoChange} />
      <button className="buttons" onClick={handleSavePhoto}>Сохранить фотографию</button>
      <input className='inputing' type="email" value={localStorage.getItem('email')} readOnly />
      <input className='inputing' type="text" value={localStorage.getItem('username')} readOnly />
      <button className="buttons" onClick={handleRefreshToken}>Обновить токен</button>
    </div>
  );
};

export default Profile;