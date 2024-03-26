import React from 'react'; 
import axios from 'axios'; 
import "./App.css" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
 
import Header from './Header/Header.jsx' 
import Category from './Category/Category.jsx' 
import Content from './Content/Content.jsx'; 
import Contents from './Contents/Contents.jsx';
import RegistrationForm from './RegistrationForm/RegistrationForm.jsx';
import LoginForm from './LoginForm/LoginForm.jsx';
import AddPhoto from './AddPhoto/AddPhoto.jsx';
import MyPhoto from './MyPhoto/MyPhoto.jsx';
 
function App() { 
  return ( 
    <body>
      <RegistrationForm />
      <LoginForm />
      <Header /> 
      <main> 
        <Category /> 
        <BrowserRouter> 
          <Routes> 
            <Route path='/' element={<Content />} />
            <Route path='/1/' element={<Contents className="contents" />}/> 
            <Route path='/add_photo/' element={<AddPhoto className="AddPhoto" />}/>
            <Route path='/my_photo/' element={<MyPhoto/>} />  
          </Routes> 
        </BrowserRouter> 
      </main> 
    </body> 
  ); 
} 
 
export default App;